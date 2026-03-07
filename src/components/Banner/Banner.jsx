import React from "react";
import biddingImage from "./../../assets/bidding.jpg";

const Banner = () => {
  return (
    <div className="relative ">
      <img className="w-full h-96 object-cover" src={biddingImage} alt="" />

      <div className="bg-linear-to-r from-black to-80% opacity-80 h-96 absolute top-0 ">
        <div className="w-8/12 mx-auto  text-white ">
          <div className="mt-20 space-y-5">
            <h2 className="text-3xl font-bold">
              Bid on Unique Items from Around the World
            </h2>
            <p>
              Discover rare collectibles, luxury goods, and vintage treasures in
              our curated auctions
            </p>
            <button className="btn btn-info bg-white">Explore Auctions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
