import React, { useState } from "react";
import { Flex, Image } from "@/components";
import { ViewDomainModal } from "@/components/Modal";
// assets
import clsx from "clsx";

const TabItem: React.FC<{ affilate_items: any }> = ({ affilate_items }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selected] = useState<number>(1);
  return (
    <div>
      <Flex direction="flex-col" className="space-y-3">
        <div className="overflow-x-auto">
          <table className="w-full tablet:w-[800px] divide-y divide-main-200">
            <thead>
              <tr>
                <td className="sticky left-0 z-10 pl-5 tablet:pl-2 w-[800px] tablet:w-[400px] small:w-[200px]  final:w-[50px] bg-black small:text-[14px] mobile:text-[12px]">
                  <Flex className="space-x-8">
                    <p>#</p>
                    <p>MyPosition</p>
                  </Flex>
                </td>
                <td className="py-3 text-start bg-black w-[200px] tablet:w-[150px]  small:text-[14px] mobile:text-[12px]">
                  My Refferals
                </td>
                <td className="py-3 text-end bg-black w-[200px] tablet:w-[150px] small:w-[200px] small:text-[14px] mobile:text-[12px] pr-5 tablet:pr-2">
                  Total Earning
                </td>
              </tr>
            </thead>
            <tbody className="divide-y divide-main-200">
              {affilate_items.length !== 0 &&
                affilate_items.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className="sticky left-0 z-10  px-5 tablet:px-2 py-5 bg-black">
                      <Flex
                        align="items-center"
                        justifyContent="justify-start"
                        className="w-full space-x-5 tablet:space-x-2"
                      >
                        <div className="text-center">
                          <p
                            className={clsx(
                              "p-4 tablet:p-3 w-[20px] h-[20px] rounded-full inline-flex justify-center items-center text-[12px] small:text-[10px] small:p-2",
                              item.isYou
                                ? item.ranking < 6
                                  ? "bg-success"
                                  : "bg-main-300"
                                : index + 1 < 6
                                  ? "bg-success"
                                  : "bg-main-300"
                            )}
                          >
                            {item.isYou ? item.ranking : index + 1}
                          </p>
                        </div>
                        <Flex
                          align="items-center"
                          justifyContent="justify-start"
                          className="space-x-4 mobile:space-x-2"
                        >
                          <Image
                            src={item.src}
                            alt={item.domain}
                            fill
                            className="w-[62px] h-[62px] small:w-12 small:h-12 shrink-0 rounded-full"
                          />
                          <Flex direction="flex-col" className="relative space-y-1">
                            <p className="text-[18px] font-500 break-all tablet:text-[16px] small:text-[14px] mobile:text-[12px]">
                              {item.domain}.zeta
                            </p>
                            {item.isPrimary && (
                              <p className="absolute -top-5 text-[10px] border border-verified rounded-full inline-flex items-center justify-center px-2">
                                {"Primary"}
                              </p>
                            )}
                          </Flex>
                        </Flex>
                      </Flex>
                    </td>
                    <td className="bg-black">
                      <p className="text-start text-success small:text-[14px] mobile:text-[12px]">{item.refferals}</p>
                    </td>
                    <td className="bg-black">
                      <p className="text-end small:text-[14px] mobile:text-[12px] pr-5 tablet:pr-2">
                        {item.earning} USDT
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Flex>

      {/* <ViewDomainModal showModal={showModal} setShowModal={setShowModal} selected={selected} /> */}
    </div>
  );
};

export default TabItem;
