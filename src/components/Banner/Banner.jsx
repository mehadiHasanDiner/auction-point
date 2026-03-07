import React from "react";
import biddingImage from "./../../assets/bidding.jpg";

const Banner = () => {
  return (
    <div className="relative ">
      <img className="w-full h-96 object-cover" src={biddingImage} alt="" />

      <div className="absolute top-4/12 text-white">
        <div className="w-9/12">
          <h2 className="text-3xl font-bold">
            Bid on Unique Items from Around the World
          </h2>
          <p>
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
