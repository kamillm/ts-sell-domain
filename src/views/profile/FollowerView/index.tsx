import React from "react";
import clsx from "clsx";
import { Flex, GradientText, Image } from "@/components";
// assets
import { useContextFollower } from "@/contexts";

const FollowerItem = ({
  index,
  src,
  name,
  isfollow,
  onFollow
}: {
  index: number;
  src: string;
  name: string;
  isfollow: boolean;
  onFollow: (name: string) => void;
}) => {
  return (
    <Flex
      align="items-center"
      justifyContent="justify-between"
      className={clsx(
        "px-5 py-2 space-x-2 bg-black/40 rounded-2xl cursor-pointer hover:bg-main-100",
        "tablet:flex-col tablet:space-y-3 tablet:space-x-0 tablet:p-0 tablet:pb-5 tablet:overflow-clip",
        "mobile:w-[80%]"
      )}
    >
      <Flex align="items-center" className={clsx("w-[80%] space-x-5 tablet:space-x-0 tablet:w-full")}>
        <Flex justifyContent="justify-center" align="items-center" className="tablet:hidden">
          <div className="w-5 h-5 rounded-full bg-main-200 text-main-900 text-[16px] inline-flex items-center justify-center">
            {index}
          </div>
        </Flex>
        <Flex
          align="items-center"
          className={clsx("space-x-4", "tablet:flex-col tablet:space-x-0 tablet:w-full tablet:space-y-3")}
        >
          <Image
            src={src}
            alt={name}
            fill
            className={clsx(
              "w-[62px] h-[62px] shrink-0 rounded-full",
              "tablet:rounded-none tablet:w-full tablet:h-[200px] object-cover"
            )}
          />
          <p className={clsx("text-[22px] small:text-[16px] font-500 break-all", "tablet:text-center tablet:px-10")}>
            {name}.zeta
          </p>
        </Flex>
      </Flex>
      {!isfollow ? (
        <button
          onClick={() => onFollow(name)}
          className={clsx("rounded-3xl inline-flex items-center justify-center p-3", "w-[113px] bg-primary")}
        >
          <span className="text-[12px] text-black">{"Follow"}</span>
        </button>
      ) : (
        <button
          onClick={() => onFollow(name)}
          className={clsx("rounded-3xl inline-flex items-center justify-center p-3", "w-[113px] border border-primary")}
        >
          <span className="text-[12px] text-primary">{"Unfollow"}</span>
        </button>
      )}
    </Flex>
  );
};

const FollowerView: React.FC = () => {
  const { follower, setFollower } = useContextFollower();

  const onFollow = (name: string) => {
    const updatedFollowers = follower.map((follower) => {
      if (follower.name === name) {
        return { ...follower, isfollow: !follower.isfollow };
      }
      return follower;
    });

    setFollower(updatedFollowers);
  };

  return (
    <div className="w-full">
      <div className="text-[32px] font-500 font-space_grotesk mobile:text-[28px] mobile:text-center pb-2">
        <GradientText>Followers</GradientText>
      </div>

      <div
        className={clsx(
          "flex-col space-y-3",
          "tablet:grid tablet:grid-cols-2 tablet:space-y-0 tablet:gap-4",
          "mobile:grid-cols-1 mobile:place-items-center"
        )}
      >
        {follower.length !== 0 &&
          follower.map((item, index) => (
            <FollowerItem key={`follower-item-${index}`} index={index + 1} {...item} onFollow={onFollow} />
          ))}
      </div>
    </div>
  );
};

export default FollowerView;
