import React, { useCallback, useEffect, useRef, useState } from "react";
import { Flex } from "@/components";
import { ViewDomainModal } from "@/components/Modal";
// assets
import { HiDotsVertical } from "react-icons/hi";
import { SlClose } from "react-icons/sl";

import { MdRemoveRedEye, MdOutlineSettings } from "react-icons/md";
import clsx from "clsx";
import { useRouter } from "next/router";
import TransactionLoading from "@/components/Loaders/TransactionLoading";
import { useDomainLookup } from "@/utils/web3/useDomainLookup";

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
      pathname: `/profile/[domain]`,
      query: { domain: name, editmode: false, owner: isprimary }
    });
  };

  const onClickManage = () => {
    router.push({
      pathname: `/profile/manage/[domain]`,
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

  // TODO: get an alternative for dangerouslySetInnerHTML
  const SVGComponent = ({ svgString }: { svgString: SVGRectElement }) => (
    <svg
      viewBox="0 0 144 144"
      className="w-[62px] h-[62px] small:w-14 small:h-14 shrink-0 rounded-full object-top "
      dangerouslySetInnerHTML={{
        __html: svgString as unknown as string
      }}
    />
  );

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
              {/* SVG Component */}
              <SVGComponent svgString={src as unknown as SVGRectElement} />

              <p className="text-[22px] small:text-[16px] mobile:text-[12px] font-500 truncate">{name}.zeta</p>
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
          <button onClick={() => setIsDrop(!isDrop)}>
            {!isDrop ? <HiDotsVertical className="w-6 h-6" /> : <SlClose className="w-6 h-6" />}
          </button>
        </Flex>
      </Flex>

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

const SortbyName = ({ items }: { items: any }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>(1);
  const { userDomains, allOwnedDomains, domainList, domainUrisList } = useDomainLookup();

  useEffect(() => {
    if (
      userDomains !== undefined &&
      allOwnedDomains !== undefined &&
      domainList !== undefined &&
      domainUrisList !== undefined
    ) {
      setIsFetching(false);
    }
  }, [userDomains, allOwnedDomains, domainList, domainUrisList]);

  const decodeImageData = (dataUri: string) => {
    if (!dataUri) {
      console.error("Invalid dataUri:", dataUri);
      return null;
    }
    const base64Json = dataUri.split(",")[1];
    const jsonString = atob(base64Json);
    const jsonData = JSON.parse(jsonString);
    const imageWithPrefix = jsonData?.image;
    if (!imageWithPrefix) {
      console.error("Invalid image property:", imageWithPrefix);
      return null;
    }
    const base64Image = imageWithPrefix.split(",")[1];
    const decodedImage = atob(base64Image);
    return decodedImage;
  };

  const svgString = decodeImageData(domainUrisList[selected]);

  const formatExpirationDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) * 1000);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getFullYear()}`;
    return formattedDate;
  };

  const expirationDate = formatExpirationDate(domainList[selected]?.expirationDate);

  const checkPrimary = (tokenId: number) => {
    if (tokenId === Number((userDomains as { primaryDomain: bigint })?.primaryDomain)) {
      return true;
    }
  };

  const isPrimary = checkPrimary(Number(allOwnedDomains?.[selected]));

  return (
    <div>
      <Flex direction="flex-col" className="space-y-3">
        {!isFetching ? (
          domainList.map((item: any, index: number) => (
            <ListItem
              {...item}
              src={decodeImageData(domainUrisList[index])}
              name={item.domainName}
              isprimary={checkPrimary(Number(allOwnedDomains[index]))}
              tokenId={Number(allOwnedDomains[index])}
              registrant={item.owner ? `${item.owner.slice(0, 4)}...${item.owner.slice(-5)}` : ""}
              expiration={formatExpirationDate(item.expirationDate)}
              key={`follower-item-${index}`}
              index={index + 1}
              setShowModal={setShowModal}
              setSelected={setSelected}
            />
          ))
        ) : (
          <div className="flex justify-center">
            <TransactionLoading size={60} />
          </div>
        )}
      </Flex>
      <ViewDomainModal
        showModal={showModal}
        setShowModal={setShowModal}
        domainSvg={svgString}
        domainName={domainList[selected]?.domainName}
        tokenId={Number(allOwnedDomains?.[selected])}
        registrant={domainList[selected]?.owner}
        expirationDate={expirationDate}
        isPrimary={isPrimary}
      />
    </div>
  );
};

export default SortbyName;
