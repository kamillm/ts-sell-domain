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
    case "BASE":
      chain = Chain.BASE;
      break;
    case "POLY":
      chain = Chain.POLY;
      break;
    default:
      throw new Error("Invalid Chain / getChainEnum: Chain not found.");
  }
  return chain;
}
