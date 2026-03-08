import React, { use } from "react";
import { FaRegHeart } from "react-icons/fa";

const Auction = ({ dataPromise, handleAddToFavorite }) => {
  const productsData = use(dataPromise);
  //   console.log(productsData);
  return (
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
              <tr key={product.id}>
                <td className="border-gray-300">
                  <img className="w-15 inline " src={product.image} alt="" />
                  <span className="ml-5">{product.title}</span>
                </td>
                <td className="border-gray-300">$ {product.currentBidPrice}</td>
                <td className="border-gray-300">{product.timeLeft}</td>
                <td className="border-gray-300 text-center">
                  <button onClick={(e) => handleAddToFavorite(product)}>
                    <FaRegHeart className="hover:text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Auction;
