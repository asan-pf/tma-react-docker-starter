import { useState } from "react";
import {
  useSignal as useTgSignal,
  initDataState,
} from "@telegram-apps/sdk-react";
import { signal } from "@preact/signals-react";

import { authenticated, setAuthenticated } from "../auth.store";

export function useAuth() {
  const initData = useTgSignal(initDataState);
  const user = initData?.user;
  const token = signal("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(password: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, telegramUserId: user?.id }),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error ?? "Authentication failed");
      }

      token.value = await res.json();
      setAuthenticated(token.value);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setError(e.message ?? "Error");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setAuthenticated(token.value);
  }

  return {
    user,
    authenticated,
    loading,
    error,
    login,
    logout,
    token
  };
}
