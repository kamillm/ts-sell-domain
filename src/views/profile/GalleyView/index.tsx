import GalleryCard from "@/components/Card/GalleryCard";
// import { GALLERY_ITEMS } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { Network, Alchemy } from "alchemy-sdk";

interface NFTDetails {
  src: string;
  name: string;
  collection?: string | undefined;
}

const config = {
  apiKey: "ED2WVoiXxo0ieRFZVwQrHYJfbuU0eUak", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET // Replace with your network.
};

const alchemy = new Alchemy(config);

const GalleryView = () => {
  const [userNfts, setUserNfts] = useState<NFTDetails[]>([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const ownerAddr = "0x2d8dE1F9C47f0CDe92bBb15DC1Dfd8dCB8d5D8B5";
      console.log("fetching NFTs for address:", ownerAddr);
      console.log("...");

      const nfts = await alchemy.nft.getNftsForOwner(ownerAddr);

      const nftInfo = nfts.ownedNfts.map((nft) => ({
        src: nft.image.cachedUrl ?? "",
        name: nft.name ?? "",
        collection: nft.collection?.name
      }));

      setUserNfts(nftInfo);
      console.log(userNfts);
    };

    fetchNFTs();
  }, []);

  return (
    <div className="grid grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 small:grid-cols-1 gap-4 w-full place-items-center ">
      {userNfts.map((item, index) => (
        <GalleryCard src={item.src} name={item.name} key={`profile-gallery-${index}`} count={item.collection ?? ""} />
      ))}
    </div>
  );
};

export default GalleryView;
