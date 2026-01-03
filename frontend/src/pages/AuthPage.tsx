import { useState } from "react";
import type { FC } from "react";
import PageLayout from "../components/PageLayout";
import { useAuth } from "../hooks/useAuth";
import { Show } from "@preact/signals-react/utils";


export const AuthPage: FC = () => {
  const { authenticated, login, logout, loading, error } = useAuth();
  const [password, setPassword] = useState("");

  return (
    <PageLayout title="Auth page">
      <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="text-lg text-zinc-700">Auth page</p>

        <Show when={authenticated}
          fallback={
            /*LOGIN FORM */
            <div className="rounded-2xl border p-4 space-y-3">
              <p className=""> You need to set up ADMIN_USER_ID and AUTH_PASSWORD in backend/.env file to see Hidden content. Get ADMIN_USER_ID from User page.</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border px-3 py-2"
                placeholder="Password"
              />

              <button
                onClick={() => login(password)}
                disabled={loading}
                className="w-full rounded-xl border px-4 py-2 font-medium"
              >
                {loading ? "Authenticating..." : "Authenticate"}
              </button>

              {error && <div className="text-sm text-red-600">{error}</div>}
            </div>}>
          {/* HIDDEN CONTENT*/}
          <div className="rounded-2xl border p-4 space-y-2">
            <div className="font-semibold">✅ Hidden content revealed</div>
            <p className="text-sm text-zinc-600">
              You are authenticated and can see this section.
            </p>
            <button onClick={() => {
              console.log("before logout authenticated =", authenticated.value);
              logout();

              console.log("after logout clicked", authenticated.value);
            }} className="text-sm underline text-zinc-600">
              Logout
            </button>
          </div>
        </Show>
      </div>
    </PageLayout>
  );
};
