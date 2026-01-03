import { signal } from "@preact/signals-react";

export const authenticated = signal(false);

export function setAuthenticated(val: string) {
  authenticated.value = Boolean(val);
}

