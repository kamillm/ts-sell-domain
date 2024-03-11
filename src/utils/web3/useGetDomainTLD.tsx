import { useAccount } from "wagmi";
export const useGetDomainTLD = () => {
  const { chainId } = useAccount();
  if (chainId) {
    if (chainId === 84532) {
      return "base";
    }
    if (chainId === 204) {
      return "op";
    }
    if (chainId === 195) {
      return "x1";
    }
    if (chainId === 80085) {
      return "bera";
    }
  }
};
