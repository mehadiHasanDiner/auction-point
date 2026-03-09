import React, { use } from "react";
import { FaRegHeart } from "react-icons/fa";

const AuctionTable = ({ product, handleAddToFavorite }) => {
  return (
    <tr key={product.id}>
      <td className="border-gray-300">
        <img className="w-15 inline " src={product.image} alt="" />
        <span className="ml-5">{product.title}</span>
      </td>
      <td className="border-gray-300">$ {product.currentBidPrice}</td>
      <td className="border-gray-300">{product.timeLeft}</td>
      <td className="border-gray-300 text-center">
        <button onClick={() => handleAddToFavorite(product)}>
          <FaRegHeart className="hover:text-xl" />
        </button>
      </td>
    </tr>
  );
};

export default AuctionTable;
