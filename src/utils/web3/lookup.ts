import { abi } from "./abi";
import { config } from "./config";
import { readContract } from "@wagmi/core";
// import { getContractAddressByChain } from "./utils";

export async function fetchDomainDetails(domainName: string, chainId: number): Promise<any> {
  // const contractAddress = getContractAddressByChain(chainId);
  console.log(chainId);
  // console.log(contractAddress);
  const result = await readContract(config, {
    abi: abi,
    address: process.env.NEXT_PUBLIC_REGISTRY_ADDRESS_POLYGON_MUMBAI as `0x${string}`,
    functionName: "registryLookupByName",
    args: [domainName]
  });
  return result;
}
