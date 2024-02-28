import React, { useState } from "react";
import { Container, Flex, GradientText, Image } from "@/components";
import { QRCode } from "react-qrcode-logo";
// assets
import { USER_SOCIAL_LINKS } from "@/utils/constants";
// icons
import { BsCopy } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import { GoThumbsup } from "react-icons/go";
import { MdOutlineAccessTime, MdOutlineLocationOn, MdOutlineWidgets, MdOutlineEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const HeroView: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Flex
        direction="flex-col"
        justifyContent="justify-center"
        align="items-center"
        className="space-y-[30px] pb-[60px]"
      >
        <div className="relative max-w-[1440px] h-[288px] tablet:h-[200px] mt-[99px]">
          <Image
            src={"/img/profile/banner.png"}
            width={1440}
            height={288}
            className="w-full h-full object-cover"
            alt="profile banner"
          />
          <Flex align="items-center" justifyContent="justify-center">
            <div className="absolute group -bottom-1/3 tablet:-bottom-[70px] w-[200px] h-[200px] tablet:w-[140px] tablet:h-[140px] rounded-full bg-main-200 flex justify-center items-center">
              <div className="relative">
                <Image
                  src={"/img/home/badges/con2.png"}
                  width={185}
                  height={185}
                  className="object-cover rounded-full tablet:w-[130px] tablet:h-[130px]"
                  alt="profile avatar"
                />

                <Image
                  src={"/img/home/badges/con2.png"}
                  alt={"profile avatar"}
                  fill
                  className="tablet:w-[130px] tablet:h-[130px] shrink-0 rounded-full"
                />
                <Image
                  src={"/img/verify.png"}
                  width={34}
                  height={34}
                  className="absolute top-2 right-1 w-10 h-10 tablet:w-8 tablet:h-8 tablet:right-0"
                  alt="profile_verify_avatar"
                />
              </div>
              <label
                onClick={() => setShowModal(true)}
                className="absolute cursor-pointer bg-black/40 w-full h-full rounded-full  justify-center items-center inline-flex opacity-0 group-hover:opacity-100 duration-200 "
              >
                <MdOutlineEdit className="text-main-400 w-7 h-7" />
              </label>
            </div>
          </Flex>
          <Flex className="absolute space-x-[10px] right-4 top-4">
            <label className="p-2 bg-black/40 rounded-xl text-main-400 cursor-pointer" htmlFor="banner-file">
              <MdOutlineEdit className="w-5 h-5" />
            </label>
            <label className="p-2 bg-black/40 rounded-xl text-main-400 cursor-pointer">
              <LuLink className="w-5 h-5" />
            </label>
            <input id="banner-file" type="file" className="hidden" />
          </Flex>
        </div>
        <Container>
          <Flex direction="flex-col" align="items-center" justifyContent="justify-center" className="tablet:pt-[50px]">
            <Flex
              justifyContent="justify-between"
              className="w-9/12 desktop:w-11/12 laptop:w-full tablet:flex-col tablet:items-center tablet:space-y-2"
            >
              <Flex
                align="items-center"
                justifyContent="justify-between"
                className="w-1/3 tablet:w-10/12 mobile:w-full  tablet:items-start"
              >
                <Flex direction="flex-col" className="space-y-1 tablet:w-[120px]" align="items-center">
                  <p className="text-[18px] laptop:text-[16px] font-600">2.5K</p>
                  <p className="text-[12px] laptop:text-[10px] font-400 text-main-400">FOLLOWERS</p>
                </Flex>
                <Flex direction="flex-col" className="space-y-1 tablet:w-[120px]" align="items-center">
                  <p className="text-[18px] laptop:text-[16px] font-600">1.5K</p>
                  <p className="text-[12px] laptop:text-[10px] font-400 text-main-400">FOLLOWING</p>
                </Flex>
                <Flex direction="flex-col" className="space-y-1 tablet:w-[120px]" align="items-center">
                  <p className="text-[18px] laptop:text-[16px] font-600">2345</p>
                  <p className="text-[12px] laptop:text-[10px] font-400 text-main-400">ZNS ID</p>
                </Flex>
              </Flex>
              <div className="w-1/3 tablet:w-10/12  mobile:w-full tablet:border-main-300 tablet:border"></div>
              <Flex
                align="items-center"
                justifyContent="justify-between"
                className="w-1/3 tablet:w-10/12  mobile:w-full  tablet:items-start"
              >
                <Flex direction="flex-col" className="space-y-1  tablet:w-[120px]" align="items-center">
                  <MdOutlineAccessTime className="w-[18px] h-[18px]" />
                  <p className="text-[12px] laptop:text-[10px] font-400 text-main-400">April, 2024</p>
                </Flex>
                <Flex direction="flex-col" className="space-y-1  tablet:w-[120px]" align="items-center">
                  <MdOutlineLocationOn className="w-[18px] h-[18px]" />
                  <p className="text-[12px] laptop:text-[10px] font-400 text-main-400">Paris, France</p>
                </Flex>
                <Flex direction="flex-col" className="space-y-1  tablet:w-[120px]" align="items-center">
                  <MdOutlineWidgets className="w-[18px] h-[18px]" />
                  <p className="text-[12px] laptop:text-[10px] font-400 text-main-400">Blockchain Enthusist</p>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="flex-col" align="items-center" className="space-y-4 max-w-[400px] pt-10">
              <div className="text-[40px] font-500 tablet:text-[34px]">
                <GradientText>Super Man</GradientText>
              </div>
              <p className="text-[22px] font-400 tablet:text-[20px]">zupergirl.zeta</p>
              <p className="font-space_grotesk text-[12px] tablet:text-[10px] font-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <Flex align="items-center" className="space-x-5">
                {USER_SOCIAL_LINKS.map((item, index) => (
                  <div className="relative" key={`user-profile-link-${index}`}>
                    <item.icon
                      className={`w-10 h-10 tablet:w-8 tablet:h-8 cursor-pointer hover:text-verified/70 ${item.isVerify && "text-verified"}`}
                    />
                    {item.isVerify && (
                      <Image
                        src={"/img/verify_blue.png"}
                        width={20}
                        height={20}
                        className="absolute w-6 h-6 -bottom-1 right-0  tablet:w-5 tablet:h-5"
                        alt="profile_verify_avatar"
                      />
                    )}
                  </div>
                ))}
              </Flex>

              <Flex
                align="items-center"
                justifyContent="justify-between"
                className="p-5 space-x-4 w-full small:flex-col small:space-x-0 small:space-y-4 relative"
              >
                <button className="bg-primary text-black rounded-3xl w-full inline-flex items-center justify-center p-3">
                  <Flex align="items-center" className="space-x-[10px]">
                    <GoThumbsup className="w-5 h-5" />
                    <span className="text-[12px]">Follow</span>
                  </Flex>
                </button>
                <button className="bg-primary text-black rounded-3xl w-full inline-flex items-center justify-center p-3">
                  <Flex align="items-center" className="space-x-[10px]">
                    <BsCopy className="w-5 h-5" />
                    <span className="text-[12px]">0xc0E3...B79C</span>
                  </Flex>
                </button>
                <div className="absolute -right-[100px]  tablet:right-[155px] tablet:top-[100px] small:hidden">
                  <QRCode
                    size={80}
                    bgColor="transparent"
                    fgColor="white"
                    value={""}
                    logoImage={"/img/zns-logo.png"}
                    logoWidth={30}
                    logoHeight={30}
                  />
                </div>
                <div className="absolute small:top-[150px] small:block hidden">
                  <QRCode
                    size={80}
                    bgColor="transparent"
                    fgColor="white"
                    value={""}
                    logoImage={"/img/zns-logo.png"}
                    logoWidth={30}
                    logoHeight={30}
                  />
                </div>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <div
        className={`fixed h-full w-full transition-all duration-300 z-[500] left-0 top-0 bg-black/60 flex justify-center items-center ${showModal ? "visible opacity-100 backdrop-blur-2xl" : "invisible opacity-0"}`}
      >
        <div className="absolute bg-main-100 p-8 rounded-xl small:p-3">
          <IoMdCloseCircle
            className="absolute w-[30px] h-[30px] -right-7 -top-7 final:hidden cursor-pointer"
            onClick={() => setShowModal(false)}
          />

          <Flex direction="flex-col" justifyContent="justify-between" className="space-y-10">
            <div className="text-[24px] font-500">
              <GradientText>Update your Avatar</GradientText>
            </div>
            <Flex align="items-start" justifyContent="justify-between" className="space-x-[37px] small:space-x-5">
              <Flex direction="flex-col" align="items-center" className="space-y-4">
                <label className="relative items-center justify-center flex cursor-pointer" htmlFor="avatar-file">
                  <div className="w-[132px] h-[132px] rounded-full border border-main-300 small:w-[110px] small:h-[110px]"></div>
                  <FaPlus className="absolute w-[24px] h-[24px] text-verified/45" />
                </label>
                <p className="text-[12px] font-700 font-space_grotesk">upload from your pc</p>
                <input className="hidden" id="avatar-file" type="file" />
              </Flex>
              <Flex direction="flex-col" align="items-center" className="space-y-4">
                <label>
                  <Image
                    src={"/img/domain_preview.png"}
                    width={132}
                    height={132}
                    alt="domain_preview"
                    className="rounded-full cursor-pointer small:w-[110px] small:h-[110px]"
                  />
                </label>
                <p className="text-[12px] font-700 font-space_grotesk">Use your Domain Name</p>
              </Flex>
            </Flex>
            <Flex
              align="items-center"
              justifyContent="justify-end"
              className="space-x-3 small:flex-col small:space-x-0 small:space-y-3 small:items-stretch"
            >
              <button
                onClick={() => setShowModal(false)}
                className="text-[12px] font-300 text-main-400 bg-main-300 p-4 px-8 rounded-3xl"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="text-[12px] font-300 text-main-100 bg-primary py-4 px-8 rounded-3xl"
              >
                Confirm
              </button>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default HeroView;
