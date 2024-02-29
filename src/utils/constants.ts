import {
  MdOutlineFavoriteBorder as FavoriteBorder,
  MdOutlineSettings as Settings,
  MdOutlineShoppingCart as Cart,
  MdLockOutline as Lock
} from "react-icons/md";
import { BsCopy as Copy } from "react-icons/bs";
import { TbShare as Share } from "react-icons/tb";
// import { IoExitOutline as Exit } from "react-icons/io5";
import { FaInstagram as Instagram } from "react-icons/fa";
import { RiGlobalLine as Global } from "react-icons/ri";
import { TfiTwitter as Twitter } from "react-icons/tfi";
import { LiaDiscord as Discord, LiaTelegram as Telegram } from "react-icons/lia";
import { FaMedium as Medium, FaCircleUser as Profile, FaLink as Domain } from "react-icons/fa6";
import { PiYoutubeLogoLight as YouTube } from "react-icons/pi";
import { CiLinkedin as Linkedin } from "react-icons/ci";
import { GoCreditCard } from "react-icons/go";

import { CardProps, DomainCardProps, GeneralCardProps } from "@/types/card";

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
    name: "boss.poly",
    tld: "zeta",
    src: "/img/home/hero/clubman.png",
    hoverScale: true,
    heroEmbed: true,
    borderColor: "border-primary"
  },
  {
    name: "bitcoin.bera",
    tld: "zeta",
    src: "/img/home/hero/zkme.png",
    hoverScale: true,
    heroEmbed: true,
    borderColor: "border-warning"
  },
  {
    name: "money.x1",
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
    name: "clubman.zeta",
    type: "card_1",
    src: "/img/home/badges/NFT.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/con2.png",
    borderColor: "border-primary",
    tld: "8001"
  },
  {
    name: "moon.x1",
    type: "card_1",
    src: "/img/home/badges/june.zero.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/con3.png",
    borderColor: "border-warning",
    tld: "5691"
  },
  {
    name: "polychain.bera",
    type: "card_1",
    src: "/img/home/badges/crypto.zero.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/con1.png",
    borderColor: "border-main-900",
    tld: "6208"
  }
];

export const GENERAL_CARD_LIST_2: GeneralCardProps[] = [
  {
    name: "1000 followers",
    type: "card_2",
    src: "/img/home/badges/crypto.zero.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/june.zero.png",
    borderColor: "border-primary",
    tld: "Connected with 1000 followers"
  },
  {
    name: "365 days",
    type: "card_2",
    src: "/img/home/badges/june.zero.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/life.zeta.png",
    borderColor: "border-warning",
    tld: "Minted domain 365 days ago"
  },
  {
    name: "5 domains",
    type: "card_2",
    src: "/img/home/badges/NFT.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/smart.zero.png",
    borderColor: "border-main-900",
    tld: "Own 5 domains on ZNS"
  },
  {
    name: "100 days",
    type: "card_2",
    src: "/img/home/badges/life.zeta.png",
    hoverScale: true,
    heroEmbed: true,
    avatar: "/img/home/badges/crypto.zero.png",
    borderColor: "border-main-900",
    tld: "Own 5 domains on ZNS"
  }
];

export const HAMBUGER_MENU = [
  { icon: Profile, label: "My Profile", link: "/profile", type: false },
  { icon: Domain, label: "My Domains", link: "", type: false },
  { icon: Copy, label: "Copy Address", link: "", type: false },
  { icon: Share, label: "Change Network", link: "", type: false },
  // { icon: Exit, label: "Disconnect Wallet", link: "", type: true }
];

export const TAB_ITEMS = [
  { index: 1, label: "Gallery", count: 302 },
  { index: 2, label: "Badges", count: 67 },
  { index: 3, label: "Followers", count: 4 }
];

export const GALLERY_ITEMS: CardProps[] = [
  { src: "/img/profile/1.png", name: "BIT HARMONY", count: "Positive Vibes" },
  { src: "/img/profile/2.png", name: "BIT HARMONY", count: "Positive Vibes" },
  { src: "/img/profile/3.png", name: "BIT HARMONY", count: "Positive Vibes" },
  { src: "/img/profile/4.png", name: "BIT HARMONY", count: "Positive Vibes" },
  { src: "/img/profile/5.png", name: "BIT HARMONY", count: "Positive Vibes" },
  { src: "/img/profile/6.png", name: "BIT HARMONY", count: "Positive Vibes" },
  { src: "/img/profile/7.png", name: "BIT HARMONY", count: "Positive Vibes" },
  { src: "/img/profile/8.png", name: "BIT HARMONY", count: "Positive Vibes" },
  { src: "/img/profile/9.png", name: "BIT HARMONY", count: "Positive Vibes" },
  { src: "/img/profile/10.png", name: "BIT HARMONY", count: "Positive Vibes" },
  { src: "/img/profile/11.png", name: "BIT HARMONY", count: "Positive Vibes" }
];

export const MINT_ITEMS: CardProps[] = [
  { src: "/img/profile/1.png", name: "100", count: "57", type: 1 },
  { src: "/img/profile/2.png", name: "100", count: "57", type: 2 },
  { src: "/img/profile/3.png", name: "100", count: "57", type: 3 },
  { src: "/img/profile/4.png", name: "100", count: "57", type: 1 },
  { src: "/img/profile/5.png", name: "100", count: "57", type: 1 },
  { src: "/img/profile/6.png", name: "100", count: "57", type: 1 },
  { src: "/img/profile/7.png", name: "100", count: "57", type: 1 },
  { src: "/img/profile/8.png", name: "100", count: "57", type: 1 },
  { src: "/img/profile/9.png", name: "100", count: "57", type: 1 },
  { src: "/img/profile/10.png", name: "100", count: "57", type: 1 },
  { src: "/img/profile/11.png", name: "100", count: "57", type: 1 }
];

export const FOLLOWER_ITEMS = [
  {
    src: "/img/profile/1.png",
    name: "znsconnect.zeta",
    isfollow: true
  },
  {
    src: "/img/profile/2.png",
    name: "dyor.zeta",
    isfollow: false
  },
  { src: "/img/profile/3.png", name: "LiviaRosser.zeta", isfollow: true },
  { src: "/img/profile/4.png", name: "@supergirl", isfollow: true },
  { src: "/img/profile/5.png", name: "Kianna.zeta", isfollow: true }
];

export const USER_SOCIAL_LINKS = [
  { icon: Instagram, link: "", isVerify: false },
  { icon: Twitter, link: "", isVerify: true },
  { icon: Discord, link: "", isVerify: false },
  { icon: Linkedin, link: "", isVerify: false },
  { icon: Telegram, link: "", isVerify: false }
];

// profile settings
export const PROFILE_SETTINGS = [
  { icon: Profile, label: "profile" },
  { icon: Settings, label: "account" },
  { icon: Lock, label: "security" },
  { icon: Global, label: "domains" }
];

export const CREDIT_SETTINGS = [
  { icon: GoCreditCard, label: "credit" },
  { icon: FavoriteBorder, label: "favorite" }
];

// categroy list
export const CATEGORY_LIST = [
  { id: 1, label: "Digital creator" },
  { id: 2, label: "Blockchain enthusiast" },
  { id: 3, label: "Social creator" },
  { id: 4, label: "Financial wizard" },
  { id: 5, label: "Tech innovator" },
  { id: 6, label: "Gamer" }
];

export const FAVORITE_ITEMS = [
  {
    src: "/img/profile/1.png",
    name: "znsconnect.zeta",
    isfollow: true,
    count: 2,
    minted: true,
    price: "10 USDT"
  },
  { src: "/img/profile/2.png", name: "dyor.zeta", isfollow: false, count: 456, minted: false, price: "10 USDT" },
  {
    src: "/img/profile/3.png",
    name: "LiviaRosser.zeta",
    isfollow: false,
    count: 2344,
    minted: false,
    price: "10 USDT"
  },
  { src: "/img/profile/4.png", name: "@supergirl", isfollow: true, count: 23432, minted: true, price: "10 USDT" },
  { src: "/img/profile/5.png", name: "Kianna.zeta", isfollow: true, count: 80, minted: true, price: "10 USDT" }
];
