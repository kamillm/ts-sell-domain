import React, { useCallback, useEffect, useRef, useState } from "react";
import { Flex, Image } from "@/components";
import { ViewDomainModal } from "@/components/Modal";
// assets
import { DOMAIN_ITEMS } from "@/utils/constants";
import { HiDotsVertical } from "react-icons/hi";
import { MdRemoveRedEye, MdOutlineSettings } from "react-icons/md";
import clsx from "clsx";
import { useRouter } from "next/router";

const ListItem = ({
  index,
  src,
  name,
  isprimary,
  tokenId,
  registrant,
  expiration
  // setShowModal,
  // setSelected
}: {
  src: string;
  name: string;
  index: number;
  isprimary: boolean;
  tokenId: number;
  registrant: string;
  expiration: string;
  setSelected: any;
  setShowModal: any;
}) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const onClickView = () => {
    // setShowModal(true);
    // setIsDrop(false);
    // setSelected(index - 1);
    router.push({
      pathname: "profile",
      query: { domain: name, mode: false }
    });
  };

  const onClickManage = () => {
    // setShowModal(true);
    // setIsDrop(false);
    // setSelected(index - 1);
    router.push({
      pathname: "profile/manage",
      query: { domain: name }
    });
  };

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
        className="px-5 py-2 space-x-2 bg-black/40 rounded-2xl cursor-pointer hover:bg-main-100 small:px-4 small:py-1 final:px-1"
      >
        <Flex align="items-center" justifyContent="justify-between" className="w-full space-x-5 small:space-x-3">
          <Flex
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
                alt={name}
                fill
                className="w-[62px] h-[62px] small:w-14 small:h-14 shrink-0 rounded-full"
              />
              <p className="text-[22px] small:text-[16px] mobile:text-[12px] font-500 truncate">{name}.zeta</p>

              {isprimary && (
                <div className="tablet:hidden inline-flex text-center items-center border-[0.5px] border-verified/60 rounded-xl text-[12px] font-500 px-2 py-[2px]">
                  {"Primary"}
                </div>
              )}
            </Flex>
          </Flex>

          <p className="text-[16px] font-700 text-success tablet:hidden">{tokenId}</p>
          <p className="text-[16px] font-500 desktop:hidden">{registrant}</p>

          <Flex align="items-center" justifyContent="justify-between" className="space-x-5">
            <p className="text-[16px] font-500 small:hidden">{expiration}</p>
            <button onClick={() => setIsDrop(true)}>
              <HiDotsVertical className="w-6 h-6" />
            </button>
          </Flex>
        </Flex>
      </Flex>

      {/*  */}
      {isDrop && (
        <div
          ref={modalRef}
          className={clsx(
            "flex-col absolute right-6 top-14 bg-main-100 rounded-xl p-[15px] z-50 space-y-1",
            "transition-all duration-500",
            isDrop ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"
          )}
        >
          <Flex action={onClickView} className="space-x-2 bg-black p-2 flex-1 rounded-lg cursor-pointer">
            <MdRemoveRedEye className="w-[14px] h-[14px]" />
            <p className="text-[10px] font-500">View</p>
          </Flex>
          <Flex action={onClickManage} className="space-x-2 bg-black p-2 flex-1 rounded-lg cursor-pointer">
            <MdOutlineSettings className="w-[14px] h-[14px]" />
            <p className="text-[10px] font-500">Manage</p>
          </Flex>
        </div>
      )}
    </div>
  );
};

const EndTab: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(1);
  return (
    <div>
      <Flex direction="flex-col" className="space-y-3">
        {DOMAIN_ITEMS.map((item, index) => (
          <ListItem
            {...item}
            key={`follower-item-${index}`}
            index={index + 1}
            setShowModal={setShowModal}
            setSelected={setSelected}
          />
        ))}
      </Flex>
      <ViewDomainModal showModal={showModal} setShowModal={setShowModal} selected={selected} />
    </div>
  );
};

export default EndTab;
