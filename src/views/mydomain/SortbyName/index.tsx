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
  expiration,
  setShowModal,
  setSelected
}: {
  src: string;
  name: string;
  index: number;
  isprimary: boolean;
  tokenId: number;
  registrant: string;
  expiration: string;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const onClickView = () => {
    router.push({
      pathname: `profile/[domain]`,
      query: { domain: name, editmode: false, owner: isprimary }
    });
  };

  const onClickManage = () => {
    router.push({
      pathname: `profile/manage/[domain]`,
      query: { domain: name }
    });
  };

  const handleClickOutside = useCallback(() => {
    setIsDrop(false);
  }, [setIsDrop]);

  const onClickItem = () => {
    setShowModal(true);
    setSelected(index - 1);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
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
        className="relative px-5 py-2 space-x-2 bg-black/40 rounded-2xl cursor-pointer hover:bg-main-100 small:px-4 small:py-1 final:px-1"
      >
        <Flex
          action={onClickItem}
          align="items-center"
          justifyContent="justify-between"
          className="w-full space-x-3 pr-[50px]"
        >
          <Flex
            className="space-x-5 w-[60%] tablet:w-[80%] small:w-full"
            align="items-center"
            justifyContent="justify-start"
          >
            <div className="w-5 h-5 shrink-0 rounded-full bg-main-200 text-main-900 text-[16px] inline-flex items-center justify-center">
              {index}
            </div>
            <Flex align="items-center" className="space-x-4 mobile:space-x-2">
              <Image
                src={src}
                alt={name}
                fill
                className="w-[62px] h-[62px] small:w-14 small:h-14 shrink-0 rounded-full"
              />
              <p className="text-[22px] small:text-[16px] mobile:text-[12px] font-500 break-all">{name}.zeta</p>

              {isprimary && (
                <div className="tablet:hidden inline-flex text-center items-center border-[0.5px] border-verified/60 rounded-xl text-[12px] font-500 px-2 py-[2px]">
                  {"Primary"}
                </div>
              )}
            </Flex>
          </Flex>

          <p className="w-[90px] text-[16px] font-700 text-success tablet:hidden text-center">{tokenId}</p>
          <p className="w-[90px] text-[16px] font-500 desktop:hidden text-center">{registrant}</p>
          <p className="w-[130px] text-[16px] font-500 small:hidden text-center">{expiration}</p>
        </Flex>
        <Flex align="items-center" justifyContent="justify-between" className="absolute space-x-5 right-3">
          <button onClick={() => setIsDrop(true)}>
            <HiDotsVertical className="w-6 h-6" />
          </button>
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
            <p className="text-[10px] font-500">Profile</p>
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
