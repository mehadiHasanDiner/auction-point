import React, { use } from "react";
import AuctionTable from "../Auction/AuctionTable";

const Auctions = ({ handleAddToFavorite, productsData, myFavorites }) => {
  return (
    <div className="col-span-2 space-y-3">
      <h2 className="text-2xl font-bold">Active Auctions</h2>
      <p className="text-sm text-gray-500">
        Discover and bid on extraordinary items
      </p>
      <div>
        <div className="overflow-x-auto rounded-box border border-gray-300 bg-base-100">
          <table className="table rounded-6xl">
            {/* head */}
            <thead>
              <tr>
                <th className="border-gray-300">Items</th>
                <th className="border-gray-300">Current Bid </th>
                <th className="border-gray-300">Time Left </th>
                <th className="border-gray-300">Bid Now </th>
              </tr>
            </thead>

            <tbody>
              {productsData.map((product) => (
                <AuctionTable
                  key={product.id}
                  product={product}
                  handleAddToFavorite={handleAddToFavorite}
                  myFavorites={myFavorites}
                ></AuctionTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
