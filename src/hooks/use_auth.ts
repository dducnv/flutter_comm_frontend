import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";

export function useAuth(option?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  }: any = useSWR("/me", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...option,
  });
  const fistLoading = profile === undefined && error === undefined;

  //   async function logout() {
  //     await authApi.logout();
  //     await mutate({}, false);
  //   }

  return {
    fistLoading,
    profile,
    error,
    mutate,
  };
}
