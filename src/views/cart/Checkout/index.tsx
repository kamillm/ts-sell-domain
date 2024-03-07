import React, { useRef, useCallback, useEffect, useState } from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import clsx from "clsx";
import { useCredit } from "@/contexts";
import { Flex } from "@/components";
import { ascii, gtEq, ltEq } from "@/utils/func";
import { useContextLocalStorage } from "@/contexts";
import { useRouter } from "next/router";
import { useAccount, useBalance, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { baseAbi } from "@/utils/web3/baseAbi";
import { parseEther } from "viem";
const contractAddress = "0x4e050504213e307E05e652187D27a5a54222F32f";

const CheckoutSection: React.FC = () => {
  const router = useRouter();
  const { creditValue } = useCredit();
  const { localstorage, setLocalStorage } = useContextLocalStorage();
  const [isCredit, setIsCredit] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [creditPrice, setCreditPrice] = useState<number>(0);

  //web3
  const { address } = useAccount();
  const { data } = useBalance({ address: address });
  const symbol = data?.symbol;
  const { data: hash, isPending, error, isError, writeContract } = useWriteContract();
  const { isSuccess } = useWaitForTransactionReceipt({
    hash: hash
  });
  const domainNamesRef = useRef<Array<string>>([]);
  const expiresRef = useRef<Array<number>>([]);
  // const { writeContract } = useRegisterDomain(totalPrice, domainNamesRef.current, expiresRef.current);

  useEffect(() => {
    if (isError) {
      console.log("Error : ", error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      setLocalStorage(JSON.stringify([])); // Clear local storage by setting an empty array
      localStorage.removeItem("domains"); // Remove the "domains" key from local storage
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

  return (
    <div>
      <Flex
        direction="flex-col"
        className="px-[50px] py-[30px] rounded-2xl bg-black/40 border border-main-200 space-y-[30px] small:p-5"
      >
        <p className="text-[24px] font-600">Order Summary</p>
        {/* <Flex direction="flex-col" className="space-y-[10px]">
          <Flex
            align="items-stretch"
            justifyContent="justify-between"
            className="space-x-[15px] small:flex-col small:space-x-0 small:space-y-[10px]"
          >
            <button className={clsx("flex-1 p-2 font-500   rounded-lg", "bg-primary text-black")}>Pay in MATIC</button>
          </Flex>
          <Flex align="items-center" justifyContent="justify-between" className="space-x-1">
            <p className="text-[14px] font-400 small:text-[10px]">{"Registration price for 4 domains"}</p>
            <p className="text-[20px] font-500 text-primary shrink-0">{"55 MATIC"}</p>
          </Flex>
        </Flex> */}

        {/* <Flex direction="flex-col" className="space-y-1">
          <div className="relative w-[328px] small:w-full text-[12px] border border-white-400 rounded-xl">
            <input
              placeholder="Enter Refferal ( optional)"
              className="w-full p-4 font-400 placeholder:text-white-500 border-none outline-none bg-transparent"
            />
            <button
              type="submit"
              className="absolute right-0 bg-verified rounded-xl text-center w-[112px] small:w-[80px] h-full inline-flex items-center justify-center"
            >
              Apply
            </button>
          </div>
          <p className="text-[12px] px-4 font-500 text-main-300">{"*Do not enter if don’t have"}</p>
        </Flex> */}

        <Flex direction="flex-col" className="space-y-1">
          <Flex align="items-center" justifyContent="justify-between">
            <p className="text-[14px] font-400 capitalize">{"Total price"}</p>
            <p className="text-[20px] font-500 text-primary">{`${totalPrice.toFixed(8)} ${symbol}`}</p>
          </Flex>
          <Flex align="items-center" justifyContent="justify-between">
            <p className="text-[14px] font-400 capitalize">{"Available Credits"}</p>
            <p className="text-[20px] font-500 text-primary">{`${isCredit ? creditPrice : 0} ${symbol}`}</p>
          </Flex>
          <Flex align="items-center" justifyContent="justify-between">
            <p className="text-[14px] font-400 capitalize">{"Subtotal"}</p>
            <p className="text-[20px] font-500 text-primary">
              {isCredit ? totalPrice - creditPrice : totalPrice.toFixed(8)} {symbol}
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
        <button
          onClick={() =>
            writeContract({
              abi: baseAbi,
              address: contractAddress,
              functionName: "registerDomains",
              value: parseEther(totalPrice.toFixed(8)),
              args: [address, domainNamesRef.current, expiresRef.current, "0x0000000000000000000000000000000000000000"]
            })
          }
          className="bg-primary text-black text-[16px] font-500 p-3 rounded-xl"
        >
          {isPending ? "Loading" : "Checkout"}
        </button>
      </Flex>
      <p className="text-[14px] font-400 text-center pt-[20px]">
        Need more credits ? Get them <span className="text-verified cursor-pointer hover:text-verified/90">here</span>
      </p>
    </div>
  );
};

export default CheckoutSection;
