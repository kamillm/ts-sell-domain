import { Chain } from "@prisma/client";

export default function getChainEnum(chainName: string) {
  let chain;
  switch (chainName) {
    case "ZETA":
      chain = Chain.ZETA;
      break;
    case "BERA":
      chain = Chain.BERA;
      break;
    case "X1":
      chain = Chain.X1;
      break;
    case "OPBNB":
      chain = Chain.OPBNB;
      break;
    default:
      throw new Error("Invalid Chain");
  }
  return chain;
}
