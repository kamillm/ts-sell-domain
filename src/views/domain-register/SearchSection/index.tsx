import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Flex } from "@/components";
import { FollowerItem } from "@/components/Item/FollowerItem";
// import { FAVORITE_ITEMS } from "@/utils/constants";
import { AddCartModal } from "@/components/Modal";
import { fetchDomainDetails } from "@/utils/web3/lookup";

const SearchSection: React.FC<{ search: string }> = ({ search }) => {
  const router = useRouter();

  const [domainStatus, setDomainStatus] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const domainData = await fetchDomainDetails(search || "");
      if (domainData?.domainName === "") {
        setDomainStatus(true);
      } else {
        setDomainStatus(false);
      }
    };
    fetchData();
  }, [search]);

  return (
    <div className="w-full">
      {search != "" && search != null ? (
        <p className="text-[20px] font-400">
          {`Search Results For`}
          <span className="text-primary">{` ${search}`}</span>
        </p>
      ) : (
        ""
      )}

      <Flex className="space-x-[30px] pt-[30px] laptop:flex-col laptop:space-x-0 laptop:space-y-[30px]">
        <Flex direction="flex-col" className="flex-1 space-y-[24px]">
          {search != "" && search != null ? (
            <FollowerItem
              src="/img/profile/1.png"
              name={search}
              isfollow={false}
              count={23}
              minted={!domainStatus}
              price={"10 MATIC"}
              index={1}
              setShowModal={setShowModal}
              setSelected={setSelected}
            />
          ) : (
            <p className="inline-flex items-center justify-center uppercase rounded-xl text-main-300 text-[45px] small:text-[30px] border border-main-300 h-full p-5">
              No Input
            </p>
          )}
        </Flex>
        <div className="w-[333px] laptop:w-full">
          <Flex direction="flex-col" className="space-y-3 border border-main-300  rounded-xl px-[28px] py-[30px]">
            <p className="text-[24px] font-600">
              Your <span className="text-primary">Cart : 1</span>
            </p>
            <p className="text-[16px] font-400">
              {"The ultimate price will be computed at checkout, factoring in potential discounts and credits."}
            </p>
            <div className="pt-[10px]">
              <button
                onClick={() => router.push("/cart")}
                className="bg-primary text-[14px] text-black px-[33px] py-3 rounded-3xl font-500"
              >
                {"Continue To Cart"}
              </button>
            </div>
          </Flex>
        </div>
      </Flex>
      <AddCartModal showModal={showModal} setShowModal={setShowModal} domain={selected} />
    </div>
  );
};

export default SearchSection;
