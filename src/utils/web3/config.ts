import { http, createConfig } from "@wagmi/core";
import { polygonMumbai } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [polygonMumbai],
  transports: {
    [polygonMumbai.id]: http()
  }
});
