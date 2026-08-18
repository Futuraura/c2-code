import { authClient } from "../lib/auth-client";

export function useAuthSession() {
  return useAsyncData("session", () => {
    return authClient.getSession({
      fetchOptions: {
        headers: useRequestHeaders(["cookie"]),
      },
    });
  });
}
