import React from "react";
import { useRouter } from "next/router";
import { Container } from "@/components";
import { GeneralCard } from "@/components/Card";
import { Flex, GradientText } from "@/components";
import { GENERAL_CARD_LIST_1 } from "@/utils/constants";

import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function IdentifyView() {
  const router = useRouter();
  return (
    <Container>
      <Flex
        align="items-center"
        justifyContent="justify-center"
        className="space-x-12 laptop:flex-col laptop:space-x-0 laptop:space-y-20"
      >
        <div className="w-1/2 laptop:w-full overflow-x-clip">
          <Swiper
            effect="cards"
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            cardsEffect={{
              slideShadows: false,
              // rotate: true
              // perSlideOffset: 20,
              perSlideRotate: 20
            }}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false
            // }}
            modules={[EffectCards]}
            width={250}
            breakpoints={{
              769: {
                width: 300
              }
            }}
            className="badge_effect_swiper"
          >
            {GENERAL_CARD_LIST_1.map((item, index) => (
              <SwiperSlide key={`domain_card_${index}`}>
                <GeneralCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-1/2 laptop:w-full">
          <Flex direction="flex-col" className="space-y-[35px] font-space_grotesk laptop:items-center">
            <div className="font-space_grotesk font-700 text-[48px] uppercase desktop:text-[30px] mobile:text-[24px] laptop:text-center">
              How to create <GradientText>identity ?</GradientText>
            </div>

            <Flex
              direction="flex-col"
              className="text-main-400 text-[16px] font-400 desktop:text-[14px] mobile:text-[12px]"
            >
              <p>
                {
                  "Creating your digital identity on ZNS is a simple and straightforward process. Follow these steps to get started:"
                }
              </p>
              <br />
              <ul className="list-decimal pl-5">
                <li>{"Visit ZNS Connect: Go to ZNS Connect and connect your wallet."}</li>
                <li>{"Mint Your Domain: Choose and mint your unique domain name."}</li>
                <li>{"Add Information: Customize your identity with social links, name, location, and bio."}</li>
                <li>{"Save and Verify: Save changes and verify your identity on the blockchain."}</li>
                <li>{"Explore and Interact: Start exploring the decentralized web and interacting with dApps."}</li>
              </ul>
            </Flex>

            <button
              onClick={() => router.push("/search")}
              className="max-w-[528px] h-[80px] flex-shrink-0 rounded-[53px] border border-solid border-main-300 bg-primary_gradient_button  desktop:h-[60px]  mobile:h-[60px] laptop:px-20 tablet:px-4"
            >
              <span className="uppercase text-primary text-[28px] font-space_grotesk font-700 desktop:text-[24px] mobile:text-[20px]">
                Create identity
              </span>
            </button>
          </Flex>
        </div>
      </Flex>
    </Container>
  );
}

export default IdentifyView;
