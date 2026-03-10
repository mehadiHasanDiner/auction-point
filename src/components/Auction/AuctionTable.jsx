import React, { use } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const AuctionTable = ({ product, handleAddToFavorite, myFavorites }) => {
  const isFavorite = myFavorites.find((item) => item.id === product.id);
  return (
    <tr key={product.id}>
      <td className="border-gray-300">
        <img className="w-15 inline " src={product.image} alt="" />
        <span className="ml-5">{product.title}</span>
      </td>
      <td className="border-gray-300">$ {product.currentBidPrice}</td>
      <td className="border-gray-300">{product.timeLeft}</td>
      <td className="border-gray-300 text-center">
        <button
          onClick={() => handleAddToFavorite(product.id)}
          disabled={isFavorite}
        >
          {/*  */}
          {isFavorite ? (
            <FaHeart color="red" className="" />
          ) : (
            <FaRegHeart className="hover:text-xl" />
          )}
        </button>
      </td>
    </tr>
  );
};

export default AuctionTable;
