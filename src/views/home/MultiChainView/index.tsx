import React from "react";
import { Flex, Image } from "@/components";
import { NETWORK_LIST } from "@/utils/constants";
import { Container } from "@/components";
import Marquee from "react-fast-marquee";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const MultiChainView: React.FC = () => {
  return (
    <Flex
      direction="flex-col"
      justifyContent="justify-center"
      className="space-y-[50px] py-[70px] bg-primary_gradient_mask"
    >
      <div className="absolute"></div>
      <div>
        <p className="uppercase text-[56px] font-700 font-space_grotesk text-center desktop:text-[30px]  mobile:text-[24px]">
          We are multichain
        </p>
        <p className="text-[20px] font-400 text-center desktop:text-[14px] mobile:text-[12px] ">
          Explore all chains and choose your favorite
        </p>
      </div>
      <Container>
        <Marquee>
          {NETWORK_LIST.map((item, index: number) => (
            <div key={`network_$${index}`} className="px-12 tablet:px-8">
              <Image
                src={item.src}
                width={100}
                height={100}
                alt={`chain-${index}`}
                className="desktop:w-[90px] desktop:h-[100px] laptop:w-[70px] laptop:h-[70px]"
              />
            </div>
          ))}
        </Marquee>
        {/* <Swiper
            loop={true}
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              768: {
                slidesPerView: 6
              },
              1280: {
                slidesPerView: 7
              }
            }}
            className="bage_type_slider"
          >
            {NETWORK_LIST.map((item, index: number) => (
              <SwiperSlide key={`network_$${index}`}>
                <Image
                  src={item.src}
                  width={100}
                  height={100}
                  alt={`chain-${index}`}
                  key={`chain-${index}`}
                  className="desktop:w-[90px] laptop:w-[70px]"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
      </Container>
    </Flex>
  );
};

export default MultiChainView;
