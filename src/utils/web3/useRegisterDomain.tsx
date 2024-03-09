import { useWriteContract, useAccount } from "wagmi";
import { abi } from "./abi";

const contractAddress = "0x6079cCb64952F788F58A1EB1df96Cbe447e07d6f";

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
