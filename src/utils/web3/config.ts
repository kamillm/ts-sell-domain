import { http, createConfig } from "@wagmi/core";
import { polygonMumbai, opBNBTestnet, x1Testnet, berachainTestnet } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [polygonMumbai, opBNBTestnet, x1Testnet, berachainTestnet],
  transports: {
    [polygonMumbai.id]: http(),
    [opBNBTestnet.id]: http(),
    [x1Testnet.id]: http(),
    [berachainTestnet.id]: http()
  }
});
