import React, { useCallback, useEffect, useRef, useState } from "react";
import { Flex, Image } from "@/components";
import { ViewDomainModal } from "@/components/Modal";
// assets
import { HiDotsVertical } from "react-icons/hi";
import { MdRemoveRedEye, MdOutlineSettings } from "react-icons/md";
import clsx from "clsx";

const ListItem = ({
  index,
  src,
  domain,
  refferals,
  earning,
  ranking,
  isYou,
  isPrimary = false
}: {
  index: number;
  src: string;
  domain: string;
  refferals: number;
  ranking: number;
  earning: number;
  isYou: boolean;
  isPrimary: boolean;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const handleClickOutside = useCallback(() => {
    setIsDrop(false);
  }, [setIsDrop]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      console.log(modalRef.current, event.target);
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClickOutside();
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [modalRef, handleClickOutside]);

  return (
    <div className="relative">
      <Flex
        align="items-center"
        justifyContent="justify-between"
        className="p-5 space-x-2 bg-black/40 rounded-2xl cursor-pointer hover:bg-main-100 small:p-4"
      >
        <Flex align="items-center" justifyContent="justify-between" className="w-full space-x-5">
          <div className="w-[5%] text-center mobile:w-[10%]">
            <p
              className={clsx(
                "p-4 w-[20px] h-[20px] rounded-full inline-flex justify-center items-center text-[12px]",
                isYou ? (ranking < 6 ? "bg-success" : "bg-main-300") : index < 6 ? "bg-success" : "bg-main-300"
              )}
            >
              {isYou ? ranking : index}
            </p>
          </div>
          <Flex
            align="items-center"
            justifyContent="justify-start"
            className="w-[40%] space-x-4 mobile:space-x-2 truncate mobile:w-[90%]"
          >
            <Image
              src={src}
              alt={domain}
              fill
              className="w-[62px] h-[62px] small:w-14 small:h-14 shrink-0 rounded-full"
            />
            <Flex direction="flex-col" className="space-y-1">
              <p className="text-[22px] font-500 truncate">{domain}.zeta</p>
              {isPrimary && (
                <p className="text-[12px] border border-verified rounded-full inline-flex items-center justify-center">
                  {"Primary"}
                </p>
              )}
            </Flex>
          </Flex>
          <p className="w-[20%] text-success small:hidden">{refferals}</p>
          <p className="mobile:hidden w-[35%] space-x-5 text-end">{earning} USDT</p>
          {/* <Flex align="items-center" justifyContent="justify-between" className="w-[35%] space-x-5 mobile:justify-end">
            <button onClick={() => setIsDrop(true)}>
              <HiDotsVertical className="w-6 h-6" />
            </button>
          </Flex> */}
          {/* <Flex
            className="space-x-5 w-[430px] tablet:w-[60%] small:w-[80%]"
            align="items-center"
            justifyContent="justify-start"
          >
            <div className="w-5 h-5 shrink-0 rounded-full bg-main-200 text-main-900 text-[16px] inline-flex items-center justify-center">
              {index}
            </div>
            <Flex align="items-center" className="space-x-4 mobile:space-x-2 truncate">
              <Image
                src={src}
                alt={domain}
                fill
                className="w-[62px] h-[62px] small:w-14 small:h-14 shrink-0 rounded-full"
              />
              <p className="text-[22px] small:text-[16px] mobile:text-[12px] font-500 truncate">{name}</p>
            </Flex>
          </Flex>

          <p className="text-[16px] font-700 text-success tablet:hidden">{tokenId}</p>
          <p className="text-[16px] font-500 desktop:hidden">{price}</p>

          <Flex align="items-center" justifyContent="justify-between" className="space-x-5">
            <p className="text-[16px] font-500 small:hidden">{expiration}</p>
            <button onClick={() => setIsDrop(true)}>
              <HiDotsVertical className="w-6 h-6" />
            </button>
          </Flex> */}
        </Flex>
      </Flex>

      {/*  */}
      {/* {isDrop && (
        <div
          ref={modalRef}
          className={clsx(
            "flex-col absolute right-6 top-14 bg-main-100 rounded-xl p-[15px] z-50 space-y-1",
            "transition-all duration-500",
            isDrop ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"
          )}
        >
          <Flex className="space-x-2 bg-black p-2 flex-1 rounded-lg cursor-pointer">
            <MdRemoveRedEye className="w-[14px] h-[14px]" />
            <p className="text-[10px] font-500">View</p>
          </Flex>
          <Flex className="space-x-2 bg-black p-2 flex-1 rounded-lg cursor-pointer">
            <MdOutlineSettings className="w-[14px] h-[14px]" />
            <p className="text-[10px] font-500">Manage</p>
          </Flex>
        </div>
      )} */}
    </div>
  );
};

const TabItem: React.FC<{ affilate_items: any }> = ({ affilate_items }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(1);
  return (
    <div>
      <Flex direction="flex-col" className="space-y-3">
        {affilate_items.length !== 0 &&
          affilate_items.map((item: any, index: number) => (
            <ListItem {...item} key={`affiliate-item-${index}`} index={index + 1} />
          ))}
      </Flex>

      <ViewDomainModal showModal={showModal} setShowModal={setShowModal} selected={selected} />
    </div>
  );
};

export default TabItem;
