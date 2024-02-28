import React, { useState } from "react";
import clsx from "clsx";
import { Flex, GradientText, Image } from "@/components";
import { FAVORITE_ITEMS } from "@/utils/constants";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { AddCartModal } from "@/components/Modal";

const FollowerItem = ({
  src,
  name,
  index,
  count,
  minted,
  isfollow,
  setSelected,
  setShowModal
}: {
  src: string;
  name: string;
  index: number;
  count: number;
  minted: boolean;
  isfollow: boolean;
  setSelected: any;
  setShowModal: any;
}) => {
  const onHandleClick = () => {
    setSelected(index - 1);
    setShowModal(true);
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
            <p className="text-[20px] small:text-[16px] mobile:text-[14px] font-500">{name}</p>
            <p className="text-success text-[16px] mobile:text-[14px] font-700">{count}</p>
          </div>
        </Flex>
        <Flex align="items-center" justifyContent="justify-end" className="space-x-5 tablet:justify-end">
          <button
            onClick={onHandleClick}
            className={clsx(
              "inline-flex justify-center items-center w-[132px] h-[35px] rounded-md p-1",
              "small:w-4 small:h-4 small:rounded-full",
              minted ? "bg-error" : "bg-verified"
            )}
          >
            <span className="small:hidden">{minted ? "Profile" : "Add to cart"}</span>
          </button>
          <button>
            {isfollow ? (
              <MdFavoriteBorder className="w-5 h-5 text-favorite" />
            ) : (
              <MdOutlineFavorite className="w-5 h-5 text-favorite" />
            )}
          </button>
        </Flex>
      </Flex>
    </>
  );
};

const FavoriteView: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(1);

  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3">
        <GradientText>favorites</GradientText>
      </div>

      <Flex direction="flex-col" className="pt-5 space-y-4">
        {FAVORITE_ITEMS.map((item, index) => (
          <FollowerItem
            {...item}
            index={index + 1}
            key={`follower-item-${index}`}
            setShowModal={setShowModal}
            setSelected={setSelected}
          />
        ))}
      </Flex>
      <AddCartModal showModal={showModal} setShowModal={setShowModal} setSelected={setSelected} selected={selected} />
    </div>
  );
};

export default FavoriteView;
