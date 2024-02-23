import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import { Container, Flex, GradientText } from "@/components";
import { GeneralCard } from "@/components/Card";
import { GENERAL_CARD_LIST_2 } from "@/utils/constants";

function BadgesView() {
  return (
    <Container>
      <Flex align="items-center" className="space-x-12 laptop:flex-col-reverse laptop:space-x-0">
        <div className="w-1/2 laptop:w-full laptop:pt-20">
          <Flex direction="flex-col" className="space-y-[35px] font-space_grotesk laptop:items-center">
            <div className="font-space_grotesk font-700 text-[48px] uppercase desktop:text-[30px] mobile:text-[24px] laptop:text-center">
              How to get <GradientText>badges ?</GradientText>
            </div>

            <Flex
              direction="flex-col"
              className="text-main-400 text-[16px] font-400 desktop:text-[14px] mobile:text-[12px]"
            >
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                previewing layouts and visual mockups.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </Flex>

            <button className="max-w-[528px] h-[80px] flex-shrink-0 rounded-[53px] border border-solid border-main-300 bg-primary_gradient_button  desktop:h-[60px] mobile:h-[60px] laptop:px-20 tablet:px-4">
              <span className="uppercase text-primary text-[26px] font-space_grotesk font-700 desktop:text-[24px] mobile:text-[20px]">
                Mint Badges
              </span>
            </button>
          </Flex>
        </div>
        <div className="w-1/2 laptop:w-full overflow-x-clip">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="overflow_effect_swiper"
          >
            {GENERAL_CARD_LIST_2.map((item, index) => (
              <SwiperSlide key={`domain_card_${index}`}>
                <GeneralCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Flex>
    </Container>
  );
}

export default BadgesView;
