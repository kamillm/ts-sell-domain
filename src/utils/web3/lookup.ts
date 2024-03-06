import { abi } from "./abi";
import { config } from "./config";
import { readContract } from "@wagmi/core";
const contractAddress = "0x896704641275a31C9D55430F0f636ED2E383Cc9a";

export async function fetchDomainDetails(domainName: string): Promise<any> {
  const result = await readContract(config, {
    abi: abi,
    address: contractAddress,
    functionName: "registryLookupByName",
    args: [domainName]
  });
  return result;
}
