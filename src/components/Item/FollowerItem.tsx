import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Flex, Image } from "..";

import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDomainDetails } from "@/utils/web3/useDomainDetails";
import { usePriceToRegister } from "@/utils/web3/usePriceToRegister";
import { useContextLocalStorage } from "@/contexts";

export const FollowerItem = ({
  src,
  name,
  count,
  price,
  minted,
  isfollow,
  setSelected,
  setShowModal
}: {
  src: string;
  name: string;
  index: number;
  price: string;
  count: number;
  minted: boolean;
  isfollow: boolean;
  setSelected: any;
  setShowModal: any;
}) => {
  const router = useRouter();
  const { setLocalStorage, localstorage } = useContextLocalStorage();
  const [domainStatus, setDomainStatus] = useState<boolean>(false);
  const { priceInEther } = usePriceToRegister(name.length);
  const { domainData } = useDomainDetails(name || "");

  useEffect(() => {
    // const domainData = await fetchDomainDetails(name || "");
    if ((domainData as { domainName: string })?.domainName === "") {
      setDomainStatus(true);
    } else {
      setDomainStatus(false);
    }
  }, [name]);

  const onHandleClick = () => {
    setSelected(name);
    setShowModal(true);
  };

  const onCheckFromStroage = () => {
    let saveItems = JSON.parse(localstorage);
    const itemsWithName = saveItems.filter((item: any) => item.name === name);
    if (itemsWithName.length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  const onAddToCart = () => {
    if (domainStatus) {
      let saveItems = JSON.parse(localstorage);
      let newItem = { name: name, year: 1, price: priceInEther };
      saveItems.push(newItem);
      setLocalStorage(JSON.stringify(saveItems));
      localStorage.setItem("domains", JSON.stringify(saveItems));
    } else {
      router.push({
        pathname: "profile",
        query: { domain: name, mode: false } // mode(false) : manage
      });
    }
  };

  const onDeleteCart = (name: string) => {
    let savedItems = JSON.parse(localstorage);
    let filterItem = savedItems.filter((item: any) => item.name !== name);
    setLocalStorage(JSON.stringify(filterItem));
    localStorage.setItem("domains", JSON.stringify(filterItem));
  };

  return (
    <>
      <Flex
        align="items-center"
        justifyContent="justify-between"
        className="space-x-4 px-5 py-2 h-[84px] bg-black/40 rounded-2xl small:py-4 hover:bg-main-100 small:px-4 border border-main-300"
      >
        <Flex align="items-center" className="space-x-4 w-full truncate">
          <Image src={src} alt={name} fill className="w-[62px] h-[62px] small:w-14 small:h-14 shrink-0 rounded-full" />
          <div className="[contain:inline-size]">
            <p className="text-[20px] small:text-[16px] mobile:text-[14px] font-500">{name}.zeta</p>
            <p className="text-success text-[16px] mobile:text-[14px] font-700">{count}</p>
          </div>
        </Flex>
        <Flex align="items-center" justifyContent="justify-end" className="space-x-5 tablet:justify-end">
          <p className="w-[100px] text-primary text-[16px] font-500 mobile:hidden">{price}</p>
          {onCheckFromStroage() ? (
            <>
              <button
                onClick={() => onDeleteCart(name)}
                className={clsx(
                  "inline-flex justify-center items-center w-[132px] h-[35px] rounded-md p-1",
                  "small:hidden bg-success"
                )}
              >
                <span className="small:hidden">{"Added"}</span>
              </button>
              <button
                onClick={() => onDeleteCart(name)}
                className={clsx("hidden small:block small:w-4 small:h-4 small:rounded-full bg-success")}
              ></button>
            </>
          ) : (
            <>
              <button
                onClick={onAddToCart}
                className={clsx(
                  "inline-flex justify-center items-center w-[132px] h-[35px] rounded-md p-1",
                  "small:hidden",
                  minted ? "bg-error" : "bg-verified"
                )}
              >
                <span className="small:hidden">{minted ? "Profile" : "Add to cart"}</span>
              </button>
              <button
                onClick={onHandleClick}
                className={clsx(
                  "hidden small:block small:w-4 small:h-4 small:rounded-full",
                  minted ? "bg-error" : "bg-verified"
                )}
              />
            </>
          )}

          <button>
            {isfollow ? (
              <MdOutlineFavorite className="w-5 h-5 text-favorite" />
            ) : (
              <MdFavoriteBorder className="w-5 h-5 text-favorite" />
            )}
          </button>
        </Flex>
      </Flex>
    </>
  );
};
