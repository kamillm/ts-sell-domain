import { useAccount } from "wagmi";
export const useGetChainName = () => {
  const { chainId } = useAccount();
  if (chainId) {
    if (chainId === 84532) {
      return "BASE";
    }
    if (chainId === 204) {
      return "OPBNB";
    }
    if (chainId === 195) {
      return "X1";
    }
    if (chainId === 80085) {
      return "BERA";
    }
  }
};
