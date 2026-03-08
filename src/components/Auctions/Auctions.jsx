import React, { Suspense } from "react";
import Auction from "../Auction/Auction";

const dataPromise = fetch("data.json").then((res) => res.json());
const Auctions = ({ handleAddToFavorite }) => {
  return (
    <div className="col-span-2 space-y-3">
      <h2 className="text-2xl">Active Auctions</h2>
      <p className="text-sm">Discover and bid on extraordinary items</p>
      <Suspense
        fallback={
          <p className="font-bold text-center">Product data is loading</p>
        }
      >
        <Auction
          dataPromise={dataPromise}
          handleAddToFavorite={handleAddToFavorite}
        ></Auction>
      </Suspense>
      <div></div>
    </div>
  );
};

export default Auctions;
