import React from "react";
import { Flex, Image } from "..";
import { DOMAIN_ITEMS } from "@/utils/constants";

import { IoMdCloseCircle } from "react-icons/io";

const ViewDomainModal = ({
  selected,
  showModal,
  setShowModal
}: {
  selected: number;
  showModal: boolean;
  setShowModal: any;
}) => {
  const onHandleClose = () => {
    setShowModal(false);
  };
  return (
    <div
      className={`fixed h-full w-full transition-all duration-300 z-[500] left-0 top-0 bg-black/60 flex justify-center items-center ${showModal ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"}`}
    >
      <div className="absolute bg-main-100 p-8 rounded-xl w-[450px] small:w-[80%]">
        <IoMdCloseCircle
          onClick={onHandleClose}
          className="absolute w-[30px] h-[30px] -right-7 -top-7 cursor-pointer"
        />

        <Flex direction="flex-col" justifyContent="justify-between" align="items-center" className="space-y-10">
          <Image
            src={DOMAIN_ITEMS[selected].src}
            alt={"logo"}
            fill
            className="w-[160px] h-[160px] small:w-14 small:h-14 shrink-0 rounded-full"
          />
          <div className="text-[38px] small:text-[26px] font-500 uppercase truncate w-full text-center inline bg-primary_gradient_text bg-clip-text text-transparent">
            {DOMAIN_ITEMS[selected].name}
          </div>
          <Flex direction="flex-col" className="w-full space-y-3">
            <Flex justifyContent="justify-between" align="items-center">
              <p className="text-[20px]  small:text-[16px] text-main-400">Token id</p>
              <p className="text-[20px]  small:text-[16px] font-500">{DOMAIN_ITEMS[selected].tokenId}</p>
            </Flex>
            <Flex justifyContent="justify-between" align="items-center">
              <p className="text-[20px]  small:text-[16px] text-main-400">Registrant</p>
              <p className="text-[20px]  small:text-[16px] font-500">{DOMAIN_ITEMS[selected].registrant}</p>
            </Flex>
            <Flex justifyContent="justify-between" align="items-center">
              <p className="text-[20px]  small:text-[16px] text-main-400">Expiration</p>
              <p className="text-[20px]  small:text-[16px] font-500">{DOMAIN_ITEMS[selected].expiration}</p>
            </Flex>
          </Flex>
          <button className="w-full bg-primary text-black rounded-3xl p-2 text-[20px] small:text-[16px] font-400">
            Close
          </button>
        </Flex>
      </div>
    </div>
  );
};

export default ViewDomainModal;
