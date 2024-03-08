import React, { useCallback, useEffect, useRef, useState } from "react";
import { Flex, Image } from "@/components";
import { ViewDomainModal } from "@/components/Modal";
// assets
import { HiDotsVertical } from "react-icons/hi";
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

  // const { domainInfo } = useDomainLookup(Number(tokenId));

  // console.log(Number(userDomains?.primaryDomain));

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

              {/* {
                <svg
                  width="160"
                  height="160"
                  viewBox="0 0 1000 1000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[62px] h-[62px] small:w-14 small:h-14 shrink-0 rounded-full"
                >
                  <g clip-path="url(#a)">
                    <path fill="#000" d="M0 0h1000v1000H0z" />
                    <path d="M1000 885c-178.771 139.55-551.222 50.439-1000 0v115h1000z" fill="#CAFC01" />
                    <text x="60" y="800" font-size="50" fill="#FFF" font-family="arial">
                      Future of decentralised
                    </text>
                    <text x="580" y="800" font-size="50" fill="#CAFC01" font-family="arial">
                      naming
                    </text>
                    <text x="200" y="135" font-size="50" fill="#FFF" font-family="arial">
                      Connect
                    </text>
                    <circle cx="120" cy="120" r="70" fill="#CAFC01" />
                    <text x="60" y="140" font-size="60" fill="#000" font-weight="bold" font-family="arial">
                      ZNS
                    </text>
                    <text x="65" y="655" font-size="100" fill="#CAFC01" font-weight="bold" font-family="arial">
                      .zeta
                    </text>
                    <path d="m61 739.319 683.316-1.259" stroke="#CAFC01" stroke-width="4" />
                  </g>
                  <text x="5%" y="50%" font-size="250" fill="#CAFC01" font-weight="bold" font-family="arial">
                    goku
                  </text>
                </svg>
              } */}
              {src}

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
  const { userDomains, allOwnedDomains, domainList, domainUrisList } = useDomainLookup();

  const formatExpirationDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) * 1000);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(date);
    return formattedDate.replace(/\//g, "-");
  };

  const checkPrimary = (tokenId: number) => {
    if (tokenId === Number((userDomains as { primaryDomain: bigint })?.primaryDomain)) {
      return true;
    }
  };
  const decodeImageData = (dataUri: string) => {
    const base64Json = dataUri?.split(",")[1];
    const jsonString = atob(base64Json);
    const jsonData = JSON.parse(jsonString);
    const image = jsonData?.image;
    const base64svg = image.split(",")[1];
    const svgString = atob(base64svg);
    return svgString;
  };

  // const svg = decodeImageData(domainUrisList[0]);
  // console.log(typeof domainUrisList[0]);
  // console.log("Decoded Image:", typeof svg);

  return (
    <div>
      <Flex direction="flex-col" className="space-y-3">
        {domainList ? (
          domainList.map((item: any, index: number) => (
            <ListItem
              {...item}
              // src={decodeImageData(domainUrisList[0])}
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
          <TransactionLoading />
        )}
      </Flex>
      <ViewDomainModal showModal={showModal} setShowModal={setShowModal} selected={selected} />
    </div>
  );
};

export default EndTab;
