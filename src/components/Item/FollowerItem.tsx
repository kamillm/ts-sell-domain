import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Flex, Image } from "..";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useContextLocalStorage } from "@/contexts";
import { useContextFavorite } from "@/contexts/FavoriteProvider";
import { useDomainDetails } from "@/utils/web3/useDomainDetails";
import toast, { Toaster } from "react-hot-toast";
import { usePriceToRegister } from "@/utils/web3/usePriceToRegister";

export const FollowerItem = ({
  src = "/img/profile/1.png",
  name,
  count = 214,
  price = 10
}: {
  src?: string;
  name: string;
  index: number;
  price?: number | string;
  count?: number;
}) => {
  const router = useRouter();
  const [domainStatus, setDomainStatus] = useState<boolean>(false);
  const { priceInEther } = usePriceToRegister(name.length);
  const { favorite, setFavorite } = useContextFavorite();
  const [isfollow, setIsFollow] = useState<boolean>(false);
  const { localstorage, setLocalStorage } = useContextLocalStorage();
  const { domainData } = useDomainDetails(name || "");

  useEffect(() => {
    let favoriteItems = JSON.parse(favorite);
    const isInclude = favoriteItems.includes(name);
    setIsFollow(isInclude);
  }, [favorite]);

  useEffect(() => {
    if ((domainData as { domainName: string })?.domainName === "") {
      setDomainStatus(true);
    } else {
      setDomainStatus(false);
    }
  }, [name]);

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
      toast.success("Added to cart");
      let saveItems = JSON.parse(localstorage);
      let newItem = { name: name, year: 1, price: priceInEther };
      saveItems.push(newItem);
      setLocalStorage(JSON.stringify(saveItems));
      localStorage.setItem("domains", JSON.stringify(saveItems));
    } else {
      router.push({
        pathname: `/profile/[domain]`,
        query: { domain: name, editmode: false, owner: false }
      });
    }
  };

  const onDeleteCart = (name: string) => {
    toast.success("Removed from cart");
    let savedItems = JSON.parse(localstorage);
    let filterItem = savedItems.filter((item: any) => item.name !== name);
    setLocalStorage(JSON.stringify(filterItem));
    localStorage.setItem("domains", JSON.stringify(filterItem));
  };

  const onHandleFavorite = () => {
    let favoriteItems = JSON.parse(favorite);
    let newArray;
    if (isfollow) {
      toast.success("Removed from Favorites");
      newArray = favoriteItems.filter((item: string) => item !== name);
    } else {
      toast.success("Added to Favorites");
      newArray = [...favoriteItems, name];
    }
    localStorage.setItem("favorite", JSON.stringify(newArray));
    setFavorite(JSON.stringify(newArray));
  };

  return (
    <div className="relative px-5 py-3 rounded-2xl bg-black/40 hover:bg-main-100 border border-main-300">
      <Flex
        align="items-center"
        justifyContent="justify-between"
        className={clsx(
          "h-full space-x-4 pr-[30px]",
          "desktop:flex-col desktop:space-y-2 desktop:space-x-0 desktop:pr-0 desktop:py-2"
        )}
      >
        <Flex
          align="items-center"
          className="h-full space-x-4 w-full desktop:flex-col desktop:space-y-2 desktop:space-x-0 desktop:justify-start"
        >
          <Image
            src={src}
            alt={name}
            fill
            className={clsx("w-[62px] h-[62px] shrink-0 rounded-full", "desktop:w-[100px] desktop:h-[100px]")}
          />
          <div className="desktop:text-center desktop:h-full">
            <p className="text-[20px] font-500 break-all">{name}.zeta</p>
            <p className={clsx("text-success text-[16px] font-700", "mobile:text-[14px]")}>{count}</p>
          </div>
        </Flex>
        <Flex
          align="items-center"
          justifyContent="justify-end"
          className={clsx("space-x-5", "desktop:flex-col desktop:space-x-0 desktop:space-y-2")}
        >
          <p className="w-[100px] text-primary text-[16px] font-500 desktop:text-center">
            {Number(price).toFixed(2).toLocaleString()}
          </p>
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
                  !domainStatus ? "bg-error" : "bg-verified"
                )}
              >
                <span>{!domainStatus ? "Profile" : "Add to cart"}</span>
              </button>
            </>
          )}
          <button onClick={onHandleFavorite} className="absolute right-3 desktop:top-3">
            {isfollow ? (
              <MdOutlineFavorite className="w-5 h-5 text-favorite" />
            ) : (
              <MdFavoriteBorder className="w-5 h-5 text-favorite" />
            )}
          </button>
        </Flex>
      </Flex>
      <Toaster />
    </div>
  );
};
