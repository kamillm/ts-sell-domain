import React from "react";
import { Flex, Image } from "@/components";
import { Container } from "@/components";

const PersonalizedView: React.FC = () => {
  return (
    <Container>
      <Flex
        align="items-center"
        justifyContent="justify-evenly"
        className="space-x-10 tablet:flex-col tablet:space-x-0 tablet:items-center tablet:space-y-[53px]"
      >
        <Flex className="flex-none" justifyContent="justify-center">
          <Image
            src="/img/home/iphone.png"
            alt="create identity"
            width={375}
            height={772}
            className="desktop:w-[300px]"
          />
        </Flex>
        <Flex direction="flex-col" className="space-y-[35px] font-space_grotesk tablet:items-center">
          <p className="font-space_grotesk font-700 text-[48px] uppercase desktop:text-[30px] mobile:text-[24px] small:text-center">
            Get your personalized <span className="text-primary">page</span>
          </p>

          <Flex
            direction="flex-col"
            className="max-w-[614px] w-full text-main-400 text-[16px] font-400 desktop:text-[14px] mobile:text-[12px]"
          >
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
              previewing layouts and visual mockups.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </Flex>
          <button className="max-w-[528px] h-[80px] flex-shrink-0 rounded-[53px] border border-solid border-main-300 bg-primary_gradient_button  desktop:h-[60px]  mobile:h-[60px] laptop:px-6">
            <span className="text-primary text-[28px] font-space_grotesk font-700 desktop:text-[24px] mobile:text-[20px] uppercase">
              Create web3 identity
            </span>
          </button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default PersonalizedView;
