import {
  MdOutlineFavoriteBorder as FavoriteBorder,
  // MdOutlineFavorite as FavoriteFilled,
  MdOutlineSettings as Settings,
  MdOutlineShoppingCart as Cart
} from "react-icons/md";

import { RiGlobalLine as Global } from "react-icons/ri";
import { TfiTwitter as Twitter } from "react-icons/tfi";
import { LiaDiscord as Discord, LiaTelegram as Telegram } from "react-icons/lia";
import { FaMedium as Medium } from "react-icons/fa6";
import { PiYoutubeLogoLight as YouTube } from "react-icons/pi";
import { DomainCardProps, GeneralCardProps } from "@/types/card";

export const MENU_LIST = [
  { name: "Home", link: "/" },
  { name: "Register domain", link: "/register-domain" },
  // { name: "My domains", link: "/my-domains" },
  // { name: "My profile", link: "/my-profile" },
  { name: "Affiliate", link: "/affiliate" },
  { name: "Badges", link: "/badges" },
  { name: "Documentation", link: "https://docs.znsconnect.io/" }
];

export const MENU_ICON_LIST = [
  { icon: FavoriteBorder, link: "/favorite" },
  { icon: Settings, link: "/settings" },
  { icon: Cart, link: "/cart" }
];

export const MEDIA_LIST = [
  { name: "About ZNS", link: "https://znsconnect.io/" },
  { name: "GitHub ZNS", link: "https://github.com/ZNS-Connect" },
  { name: "Galxe campaign", link: "https://galxe.com/znsconnect" },
  { name: "Blog", link: "https://znsconnect.medium.com/" },
  { name: "Contact us", link: "mailto:info.znsconnect.io" }
];

export const CHAIN_LIST = [
  { name: "doge", link: "" },
  { name: "doge", link: "" },
  { name: "doge", link: "" },
  { name: "doge", link: "" },
  { name: "doge", link: "" },
  { name: "doge", link: "" }
];

// footer assets
export const SOCIAL_LIST = [
  { icon: Global, link: "https://znsconnect.io/" },
  { icon: Twitter, link: "https://twitter.com/ZNSConnect" },
  { icon: Discord, link: "https://discord.com/invite/skbA5Ucmmc" },
  { icon: Telegram, link: "https://t.me/znsconnect" },
  { icon: Medium, link: "https://znsconnect.medium.com/" },
  { icon: YouTube, link: "https://www.youtube.com/@znsconnect" }
];

// Home Page

export const DOMAIN_CARD_LIST: DomainCardProps[] = [
  {
    name: "clubman",
    tld: "zeta",
    src: "/img/home/hero/clubman.png",
    hoverScale: true,
    heroEmbed: true,
    borderColor: "border-primary"
  },
  {
    name: "zkme",
    tld: "zeta",
    src: "/img/home/hero/zkme.png",
    hoverScale: true,
    heroEmbed: true,
    borderColor: "border-warning"
  },
  {
    name: "monkey",
    tld: "zeta",
    src: "/img/home/hero/monkey.png",
    hoverScale: true,
    heroEmbed: true,
    borderColor: "border-main-900"
  }
];

export const NETWORK_LIST = [
  { src: "/img/home/networks/Chain1.png" },
  { src: "/img/home/networks/Chain2.png" },
  { src: "/img/home/networks/Chain3.png" },
  { src: "/img/home/networks/Chain4.png" },
  { src: "/img/home/networks/Chain5.png" },
  { src: "/img/home/networks/Chain6.png" },
  { src: "/img/home/networks/Chain7.png" }
];

export const BADGE_TYPES = [
  {
    index: 1,
    title: "REGISTER YOUR DOMAIN",
    description: "Choose and mint your personal domain on your favourite chain.",
    src: "/img/home/badges/register.png"
  },
  {
    index: 2,
    title: "CREATE PERSONAL PROFILE",
    description: "Access the Web3 page to unlock a variety of applications for testing and exploration.",
    src: "/img/home/badges/create.png"
  },
  {
    index: 3,
    title: "INTRODUCE YOURSELF",
    description: "unlock your Web3 potential share your ZNS Web3 page and providing your digital power.",
    src: "/img/home/badges/introduce.png"
  }
];

export const DOMAIN_CARD_TYPES = [
  {
    card: {
      src: "/img/home/NFT.png",
      name: "Clubman",
      count: "Own 3 domains of ZNS"
    },
    information: {
      title: "domain utility",
      subtitle: "Transform Numeric to Alphabetic",
      list: [
        "Seamlessly convert numeric addresses into easy-to-remember alphanumeric domain names.",
        "Enhance accessibility and user-friendliness in the decentralized space.",
        "Make blockchain interactions more intuitive and memorable for users."
      ]
    }
  },
  {
    card: {
      src: "/img/home/Image.png",
      name: "ZKme",
      count: "Own 9 domains of ZNS"
    },
    information: {
      title: "Web3 Page Access",
      subtitle: "Unlock Your Web3 Experience",
      list: [
        "Gain access to your personalized Web3 page, offering a gateway to the decentralized world.",
        "Seamlessly navigate through various decentralized applications (dApps) and services.",
        "Explore the full potential of blockchain technology and DeFi with ease."
      ]
    }
  },
  {
    card: {
      src: "/img/home/Screen.png",
      name: "Money",
      count: "Own 21 domains of ZNS"
    },
    information: {
      title: "dapps Integration",
      subtitle: "Integration with  Platforms and dApps",
      list: [
        "Integrate seamlessly with popular social platforms and decentralized applications.",
        "Extend your online presence beyond traditional domains to the decentralized web.",
        "Enable smoother interactions and transactions across different platforms and ecosystems."
      ]
    }
  }
];

export const GENERAL_CARD_LIST_1: GeneralCardProps[] = [
  {
    name: "Boss.zeta",
    type: "card_1",
    src: "/img/home/badges/NFT.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/con2.png",
    borderColor: "border-primary"
  },
  {
    name: "Boss.zeta",
    type: "card_1",
    src: "/img/home/badges/june.zero.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/con3.png",
    borderColor: "border-warning"
  },
  {
    name: "Boss.zeta",
    type: "card_1",
    src: "/img/home/badges/crypto.zero.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/con1.png",
    borderColor: "border-main-900"
  }
  // {
  //   name: "Boss.zeta",
  //   type: "card_1",
  //   src: "/img/home/badges/NFT.png",
  //   hoverScale: true,
  //   heroEmbed: true,
  //   avatar: "/img/home/badges/con2.png",
  //   borderColor: "border-primary"
  // },
  // {
  //   name: "Boss.zeta",
  //   type: "card_1",
  //   src: "/img/home/badges/june.zero.png",
  //   hoverScale: true,
  //   heroEmbed: true,
  //   avatar: "/img/home/badges/con3.png",
  //   borderColor: "border-warning"
  // },
  // {
  //   name: "Boss.zeta",
  //   type: "card_1",
  //   src: "/img/home/badges/crypto.zero.png",
  //   hoverScale: true,
  //   heroEmbed: true,
  //   avatar: "/img/home/badges/con1.png",
  //   borderColor: "border-main-900"
  // },
  // {
  //   name: "Boss.zeta",
  //   type: "card_1",
  //   src: "/img/home/badges/crypto.zero.png",
  //   hoverScale: true,
  //   heroEmbed: true,
  //   avatar: "/img/home/badges/con1.png",
  //   borderColor: "border-main-900"
  // }
];

export const GENERAL_CARD_LIST_2: GeneralCardProps[] = [
  {
    name: "3 domains",
    type: "card_2",
    src: "/img/home/badges/crypto.zero.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/june.zero.png",
    borderColor: "border-primary"
  },
  {
    name: "3 domains",
    type: "card_2",
    src: "/img/home/badges/june.zero.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/life.zeta.png",
    borderColor: "border-warning"
  },
  {
    name: "3 domains",
    type: "card_2",
    src: "/img/home/badges/NFT.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/smart.zero.png",
    borderColor: "border-main-900"
  },
  {
    name: "3 domains",
    type: "card_2",
    src: "/img/home/badges/crypto.zero.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/june.zero.png",
    borderColor: "border-primary"
  },
  {
    name: "3 domains",
    type: "card_2",
    src: "/img/home/badges/june.zero.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/life.zeta.png",
    borderColor: "border-warning"
  },
  {
    name: "3 domains",
    type: "card_2",
    src: "/img/home/badges/NFT.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/smart.zero.png",
    borderColor: "border-main-900"
  }
];
