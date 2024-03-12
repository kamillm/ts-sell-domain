import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Flex, GradientText, Image } from "@/components";
import { Follower, useContextFollower } from "@/contexts";
// assets

// import { FOLLOWER_ITEMS } from "@/utils/constants";
import { useRouter } from "next/router";
import { useGetDomainTLD } from "@/utils/web3/useGetDomainTLD";
import TransactionLoading from "@/components/Loaders/TransactionLoading";

const FollowingItem = ({
  index,
  src,
  name,
  isfollow,
  onUnFollow
}: {
  index: number;
  src: string;
  name: string;
  isfollow: boolean;
  onUnFollow: (name: string) => void;
}) => {
  const TLD = useGetDomainTLD();
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
          <img
            src={src}
            alt={name}
            // fill
            className={clsx(
              "w-[62px] h-[62px] shrink-0 rounded-full",
              "tablet:rounded-none tablet:w-full tablet:h-[200px] object-cover"
            )}
          />
          <p className={clsx("text-[22px] small:text-[16px] font-500 break-all", "tablet:text-center tablet:px-10")}>
            {name}.{TLD}
          </p>
        </Flex>
      </Flex>
      <button
        onClick={() => onUnFollow(name)}
        className={clsx("rounded-3xl inline-flex items-center justify-center p-3", "w-[113px] border border-primary")}
      >
        <span className="text-[12px] text-primary">{"Unfollow"}</span>
      </button>
    </Flex>
  );
};

const FollowingView: React.FC<{ domain: any }> = ({ domain }) => {
  // const router = useRouter();

  domain = domain.domain;
  console.log(domain);
  const [following, setfollowing] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  let walletAddress = "dummy_wallet";
  let chain = "ZETA";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch domain details
        const domainData = domain;
        console.log("domainData", domainData);

        // Fetch follower details based on domain details
        if (domainData.followerIds && loading) {
          const followingIds = domainData.followingIds;
          const followingDetails = await Promise.all(
            followingIds.map(async (followingId: number) => {
              const domainRequestBody = {
                domainId: followingId
              };

              try {
                const response = await fetch("/api/domain/fetch/fetchDomainById", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(domainRequestBody)
                });

                if (response.ok) {
                  const data = await response.json();
                  return data.data.domain; // Assuming data contains necessary following information
                } else {
                  throw new Error("Failed to fetch following details");
                }
              } catch (error) {
                console.error("Error fetching following details:", error);
                return null; // Handle error gracefully
              }
            })
          );
          console.log("followingDetails", followingDetails);

          setfollowing(followingDetails.filter((following: any) => following !== null));
          setLoading(false); // Update loading state when following are fetched
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading state is updated on error
      }
    };

    fetchData();
  }, [domain, walletAddress, chain]);

  const { follower, setFollower } = useContextFollower();
  const [items, setItems] = useState<Follower[]>([]);

  useEffect(() => {
    setItems(follower.filter((item: Follower) => item.isfollow));
  }, [follower]);

  const onUnFollow = (name: string) => {
    const updatedFollowers = follower.map((follower) => {
      if (follower.name === name) {
        return { ...follower, isfollow: false };
      }
      return follower;
    });

    console.log("updateFollowers", updatedFollowers);

    setFollower(updatedFollowers);
  };

  return (
    <div className="w-full">
      <div
        className={clsx(
          "flex-col space-y-3",
          "tablet:grid tablet:grid-cols-2 tablet:space-y-0 tablet:gap-4",
          "mobile:grid-cols-1 mobile:place-items-center"
        )}
      >
        {loading ? ( // Render loading indicator while loading
          <div className="flex items-center justify-center">
            <TransactionLoading size={60} />
          </div>
        ) : following.length !== 0 ? (
          following.map((following, index) => (
            <FollowingItem
              key={`follower-item-${index}`}
              isfollow={false}
              index={index + 1}
              src={
                "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
              name={following.domainName}
              onUnFollow={onUnFollow}
            />
          ))
        ) : (
          <p className="border border-main-200 rounded-lg inline-flex justify-center items-center w-full py-[100px] text-[30px] text-main-200 font-700 text-center desktop:text-[22px] font-space_grotesk">
            {"You don't have any following"}
          </p>
        )}
      </div>
    </div>
  );
};

export default FollowingView;
