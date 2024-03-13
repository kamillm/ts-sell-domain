import React, { useRef, useCallback, useEffect, useState } from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import clsx from "clsx";
import { useCredit } from "@/contexts";
import { Flex, Link } from "@/components";
import { ascii, formatPrice, gtEq, ltEq } from "@/utils/func";
import { useContextLocalStorage } from "@/contexts";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import TransactionLoading from "@/components/Loaders/TransactionLoading";
import { useAccount, useBalance, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
// import { baseAbi } from "@/utils/web3/baseAbi";
import { polyAbi } from "@/utils/web3/polyAbi";

import { parseEther } from "viem";
import { useContractAddressByChain } from "@/utils/web3/useContractAddressByChain";
import { useGetDomainTLD } from "@/utils/web3/useGetDomainTLD";
import { useGetChainName } from "@/utils/web3/useGetChainName";
// import { set } from "nprogress";

const CheckoutSection = () => {
  const router = useRouter();
  const { creditValue } = useCredit();
  const { localstorage, setLocalStorage } = useContextLocalStorage();
  const [isCredit, setIsCredit] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [creditPrice, setCreditPrice] = useState<number>(0);
  const contractAddress = useContractAddressByChain();

  //web3
  const { address, isConnected, chainId } = useAccount();
  const { data }: any = useBalance({ address: address });
  const symbol = data?.symbol;
  const { data: hash, isPending, error, isError, writeContract } = useWriteContract();
  const { isSuccess, isLoading } = useWaitForTransactionReceipt({
    hash: hash
  });
  const domainNamesRef = useRef<Array<string>>([]);
  const expiresRef = useRef<Array<number>>([]);
  const [userId, setUserId] = useState<string>("");
  const TLD = useGetDomainTLD();
  const chainName = useGetChainName();

  const getUserDetails = async (walletAddress: string, chainName: string) => {
    if (walletAddress != "" && chainName != "") {
      try {
        const userRequestBody = {
          walletAddress,
          chainName
        };

        const response = await fetch("/api/user/fetch/fetchUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userRequestBody)
        });

        if (response.ok) {
          const data = await response.json();
          return data.data;
        } else {
          console.error("Failed to fetch user:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  };

  const createDomain = async (domainNames: Array<string>, userID: string) => {
    if (domainNames.length > 0 && userID != "") {
      try {
        const domainRequestBody = {
          domainNames,
          userID
        };

        const response = await fetch("/api/domain/create/createDomain", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(domainRequestBody)
        });

        if (response.ok) {
          const data = await response.json();
          return data.data;
        } else {
          console.error("Failed to fetch domain:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching domain:", error);
      }
    }
  };

  useEffect(() => {
    if (isConnected) {
      const fetchUser = async () => {
        try {
          if (address && chainName) {
            const res = await getUserDetails(address, chainName);
            setUserId(res.user.id);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
      fetchUser();
    }
  }, [isConnected, chainId]);

  useEffect(() => {
    const domainWithTLDs = domainNamesRef.current.map((domain) => `${domain}.${TLD}`);
    if (isSuccess) {
      const fetchDomain = async () => {
        try {
          await createDomain(domainWithTLDs, userId);
        } catch (error) {
          console.error("Error fetching domain:", error);
        }
      };
      fetchDomain();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log("Error : ", error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      setLocalStorage(JSON.stringify([]));
      localStorage.removeItem("domains");
      router.push("/mydomain");
    }
  }, [isSuccess]);

  useEffect(() => {
    let savedItems = JSON.parse(localstorage);
    domainNamesRef.current = savedItems.map((item: any) => item.name);
    expiresRef.current = savedItems.map((item: any) => item.year);

    const sumOfPrice = savedItems.reduce((sum: number, item: any) => {
      const price = parseFloat(item.price) || 0;
      const renewPrice = parseFloat(item.renewPrice) || 0;
      const additionalYears = Math.max(item.year - 1, 0);
      return sum + price + renewPrice * additionalYears;
    }, 0);

    setTotalPrice(sumOfPrice);
  }, [localstorage]);

  const handleTransferCount = (type: boolean) => {
    if (type) {
      if (creditPrice < totalPrice) {
        if (creditPrice < creditValue) {
          setCreditPrice(Number(creditPrice) + 1);
        }
      }
    } else {
      if (creditPrice > 1) {
        setCreditPrice(Number(creditPrice) - 1);
      }
    }
  };

  const useCheckTransferNumbers = useCallback(
    ({ target: { value: v } }: { target: { value: any } }) =>
      v && gtEq(ascii([...v].pop()), 48) && ltEq(ascii([...v].pop()), 57)
        ? setCreditPrice(v)
        : setCreditPrice(v.slice(0, -1)),
    [setCreditPrice]
  );

  const onSetMaxCredit = () => {
    if (creditValue < totalPrice) {
      setCreditPrice(creditValue);
    } else {
      setCreditPrice(totalPrice);
    }
  };

  const onCheckOut = () => {
    if (Number(String(data.value)) > totalPrice) {
      writeContract({
        abi: polyAbi,
        address: contractAddress as `0x${string}`,
        functionName: "registerDomains",
        value: parseEther(totalPrice.toString()),
        args: [address, domainNamesRef.current, expiresRef.current, "0x0000000000000000000000000000000000000000", 0]
      });
      toast.success("successful");
    } else {
      toast.error("Not enough balance");
    }
  };

  return (
    <div>
      <Flex
        direction="flex-col"
        className="p-10 rounded-2xl bg-black/40 border border-main-200 space-y-[30px] small:p-5"
      >
        <p className="text-[24px] font-600">Order Summary</p>
        <Flex direction="flex-col" className="space-y-1">
          <Flex align="items-center" justifyContent="justify-between">
            <p className="text-[14px] font-400 capitalize">{"Total price"}</p>
            <p className="text-[20px] font-500 text-primary">{`${formatPrice(totalPrice)} ${symbol}`}</p>
          </Flex>
          <Flex align="items-center" justifyContent="justify-between">
            <p className="text-[14px] font-400 capitalize">{"Available Credits"}</p>
            <p className="text-[20px] font-500 text-primary">{`${formatPrice(isCredit ? creditPrice : 0)} ${symbol}`}</p>
          </Flex>
          <Flex align="items-center" justifyContent="justify-between">
            <p className="text-[14px] font-400 capitalize">{"Subtotal"}</p>
            <p className="text-[20px] font-500 text-primary">
              {formatPrice(isCredit ? totalPrice - creditPrice : totalPrice)} {symbol}
            </p>
          </Flex>
        </Flex>
        <Flex className="space-x-[10px]" justifyContent="justify-between">
          <Flex className="space-x-5">
            <Flex className="space-x-3" align="items-center">
              <button onClick={() => handleTransferCount(false)}>
                <LuMinusCircle className="w-[22px] h-[22px]" />
              </button>
              <input
                placeholder="1"
                value={creditPrice}
                onChange={useCheckTransferNumbers}
                className={clsx(
                  "placeholder:text-[14px] placeholder:text-center placeholder:text-white-500",
                  "w-[60px] p-3 h-full rounded-xl border border-main-300 outline-none bg-black/40 text-center"
                )}
              />
              <button onClick={() => handleTransferCount(true)}>
                <LuPlusCircle className="w-[22px] h-[22px]" />
              </button>
            </Flex>
          </Flex>
          <button onClick={onSetMaxCredit} className="text-primary">
            Max
          </button>
          <Flex align="items-center" justifyContent="justify-between" className="space-x-3">
            <input
              type="checkbox"
              checked={isCredit}
              onChange={() => setIsCredit(!isCredit)}
              className="appearance-none rounded-md h-5 w-5 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-primary
             border-main-200 border-2"
            />
            <p className="text-[14px] font-400">{"Use your credit"}</p>
          </Flex>
        </Flex>

        {isLoading || isPending ? (
          <div className="flex justify-center">
            <TransactionLoading size={40} />
          </div>
        ) : (
          <button
            onClick={onCheckOut}
            className="bg-primary text-black text-[16px] font-500 p-3 rounded-xl flex justify-center"
          >
            {"Checkout"}
          </button>
        )}
      </Flex>
      <p className="text-[14px] font-400 text-center pt-[20px]">
        Need more credits ? Get them{" "}
        <Link href="/settings?tab=credits" className="text-verified cursor-pointer hover:text-verified/90">
          here
        </Link>
      </p>
      <Toaster />
    </div>
  );
};

export default CheckoutSection;
