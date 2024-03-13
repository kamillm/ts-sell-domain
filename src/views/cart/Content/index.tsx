import React, { useEffect, useState } from "react";
import { Flex } from "@/components";
import { LuMinus, LuPlus } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useContextLocalStorage } from "@/contexts";
import { usePriceToRenew } from "@/utils/web3/usePriceToRenew";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";
import { useGetDomainTLD } from "@/utils/web3/useGetDomainTLD";
import { formatPrice } from "@/utils/func";

const PeriodCounter = ({ index, item }: { index: number; item: any }) => {
  const { localstorage, setLocalStorage } = useContextLocalStorage();
  const { renewPriceInEther, symbol } = usePriceToRenew(item.name.length);
  const TLD = useGetDomainTLD();

  const handlePeriod = (name: string, type: boolean) => {
    let savedItems = JSON.parse(localstorage);
    let filterItem = savedItems.filter((item: any) => item.name === name);

    if (type) {
      savedItems = savedItems.map((item: any) => {
        if (item.name === name) {
          return { ...item, year: item.year + 1, renewPrice: renewPriceInEther };
        }
        return item;
      });
    } else {
      if (filterItem[0].year > 1) {
        savedItems = savedItems.map((item: any) => {
          if (item.name === name) {
            return { ...item, year: item.year - 1 };
          }
          return item;
        });
      }
    }

    setLocalStorage(JSON.stringify(savedItems));
    localStorage.setItem("domains", JSON.stringify(savedItems));
  };

  const removeItem = (name: string) => {
    let savedItems = JSON.parse(localstorage);
    let filterItem = savedItems.filter((item: any) => item.name !== name);
    setLocalStorage(JSON.stringify(filterItem));
    localStorage.setItem("domains", JSON.stringify(filterItem));
    toast.success("Removed Domain");
  };

  return (
    <Flex
      key={`cart-item-${index}`}
      align="items-center"
      justifyContent="justify-between"
      className={clsx(
        "p-[30px] bg-black/40 rounded-2xl border border-main-200 space-x-1",
        "tablet:flex-col tablet:space-y-2"
      )}
    >
      <p className="text-[20px] small:flex-1 font-500 w-[150px] break-all tablet:w-full desktop:w-[300px] tablet:text-center">
        {item.name}.{TLD}
      </p>
      <span className="small:hidden text-verified text-[16px] font-400">
        {/* {item.status ? "Available" : "Not Available"} */}
        Available
      </span>
      <p className="text-[16px] text-primary font-500 small:hidden">
        {item.price ? formatPrice(item.price) + " " + symbol : "N/A"}
      </p>
      <Flex className="space-x-[10px]">
        <Flex className="space-x-5">
          <Flex className="space-x-3" align="items-center">
            <button onClick={() => handlePeriod(item.name, false)}>
              <LuMinus className="w-[12px] h-[12px]" />
            </button>
            <div className="p-1 rounded-lg text-[14px] font-500">{`${item.year} Year`}</div>
            <button onClick={() => handlePeriod(item.name, true)}>
              <LuPlus className="w-[12px] h-[12px]" />
            </button>
          </Flex>
        </Flex>
      </Flex>

      <RiDeleteBin5Line
        onClick={() => removeItem(item.name)}
        className="w-5 h-5 text-danger/60 hover:text-danger cursor-pointer"
      />
      <Toaster />
    </Flex>
  );
};

const ContentSection: React.FC = () => {
  const [items, setItems] = useState([]); // Specify the type for items as an array of Item
  const { localstorage } = useContextLocalStorage();

  useEffect(() => {
    setItems(JSON.parse(localstorage));
  }, [localstorage]);

  return (
    <Flex direction="flex-col" className="space-y-2">
      {items.length != 0 ? (
        items.map((item, index: number) => <PeriodCounter key={`period-counter-${index}`} index={index} item={item} />)
      ) : (
        <p className="text-[40px] text-main-300 uppercase inline-flex items-center justify-center h-full rounded-xl p-4">
          Not Added
        </p>
      )}
    </Flex>
  );
};

export default ContentSection;
