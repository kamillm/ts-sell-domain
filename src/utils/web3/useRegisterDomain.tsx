import { useWriteContract, useAccount } from "wagmi";
import { abi } from "./abi";
const contractAddress = "0x70b58465681a10c5578C6414477fbD193594D2eB";

export const useRegisterDomain = (
  amount: number,
  domainNames: Array<string>,
  expiry: Array<number>,
  referral?: `0x${string}`
) => {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();
  writeContract({
    abi: abi,
    address: contractAddress,
    functionName: "registerDomains",
    args: [amount, address, domainNames, expiry, referral]
  });
  return { writeContract };
};
