import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Flex, GradientText, Image } from "@/components";
// assets
import { useContextFollower } from "@/contexts";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
// import { useRouter } from "next/router";
import { useGetDomainTLD } from "@/utils/web3/useGetDomainTLD";

const FollowerItem = ({
  index,
  src,
  name,
  parentDomain,
  follower
}: {
  index: number;
  src: string;
  name: string;
  follower: any;
  parentDomain: any;
}) => {
  const TLD = useGetDomainTLD();
  const [isFollow, setIsFollow] = useState<boolean>(parentDomain.followingIds.includes(follower.id));

  const onFollow = async (parentID: string, followerID: string) => {
    try {
      if (isFollow) {
        try {
          const toastId = toast.loading("Unfollowing...");
          const followerRequestBody = {
            followerId: parentID,
            followingId: followerID
          };
          await fetch("/api/domain/followers/delete/deleteFollower", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(followerRequestBody)
          });
          toast.dismiss(toastId);
          setIsFollow(!isFollow);
          toast.success("Unfollowed successfully");
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const toastId = toast.loading("Following...");
          const followerRequestBody = {
            followerId: parentID,
            followingId: followerID
          };
          await fetch("/api/domain/followers/add/addFollower", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(followerRequestBody)
          });
          toast.dismiss(toastId);
          setIsFollow(!isFollow);
          toast.success("Followed successfully");
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  // const updatedFollowers = follower.map((follower) => {
  // if (follower.name === name) {
  //   return { ...follower, isfollow: !follower.isfollow };
  // }
  // return follower;
  // });

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
      {!isFollow ? (
        <button
          onClick={() => onFollow(parentDomain.id, follower.id)}
          className={clsx("rounded-3xl inline-flex items-center justify-center p-3", "w-[113px] bg-primary")}
        >
          <span className="text-[12px] text-black">{"Follow"}</span>
        </button>
      ) : (
        <button
          onClick={() => onFollow(parentDomain.id, follower.id)}
          className={clsx("rounded-3xl inline-flex items-center justify-center p-3", "w-[113px] border border-primary")}
        >
          <span className="text-[12px] text-primary">{"Unfollow"}</span>
        </button>
      )}
    </Flex>
  );
};

const FollowerView: React.FC<{ domain?: any }> = ({ domain }) => {
  // const router = useRouter();
  domain = domain.domain;
  // const [domain, setDomain] = useState<string | string[] | undefined>(router.query.slug);
  const [followers, setFollowers] = useState<any[]>([]);
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
          const followerIds = domainData.followerIds;
          const followerDetails = await Promise.all(
            followerIds.map(async (followerId: number) => {
              const domainRequestBody = {
                domainId: followerId
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
                  return data.data.domain; // Assuming data contains necessary follower information
                } else {
                  throw new Error("Failed to fetch follower details");
                }
              } catch (error) {
                console.error("Error fetching follower details:", error);
                return null; // Handle error gracefully
              }
            })
          );
          console.log("followerDetails", followerDetails);

          domain.followingIds.includes(domain.id);

          setFollowers(followerDetails.filter((follower: any) => follower !== null));
          setLoading(false); // Update loading state when followers are fetched
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading state is updated on error
      }
    };

    fetchData();
  }, [domain, walletAddress, chain]);

  const { follower, setFollower } = useContextFollower();

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
        {loading ? ( // Render loading indicator while loading
          <div>Loading followers...</div>
        ) : (
          followers.map((follower, index) => (
            <FollowerItem
              follower={follower}
              parentDomain={domain}
              // follower={domain.followingIds.includes(follower.id)}
              key={`follower-item-${index}`}
              index={index + 1}
              src={follower.mainImgUrl}
              name={follower.domainName}
              // onFollow={onFollow}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FollowerView;
