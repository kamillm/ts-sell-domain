import React, { useState } from "react";
import { Flex, GradientText } from "@/components";
import { FAVORITE_ITEMS } from "@/utils/constants";
import { AddCartModal } from "@/components/Modal";
import { FollowerItem } from "@/components/Item/FollowerItem";
import clsx from "clsx";

const FavoriteView: React.FC<{ type?: boolean }> = ({ type = false }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3">
        <GradientText>favorites</GradientText>
      </div>

      <Flex direction="flex-col" className={clsx("pt-5 space-y-4 laptop:w-full", type ? "w-full" : "w-[800px]")}>
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
      <AddCartModal showModal={showModal} setShowModal={setShowModal} domain={selected} />
    </div>
  );
};

export default FavoriteView;
