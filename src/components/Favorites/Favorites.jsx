import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const Favorites = ({ myFavorites, handleRemoveFromFav }) => {
  console.log(myFavorites);

  const totalPrice = myFavorites.reduce((total, product) => {
    return total + product.currentBidPrice;
  }, 0);
  console.log(totalPrice);
  return (
    <div className="bg-white mt-18 p-5 rounded-xl h-fit">
      <ToastContainer />
      <div className="flex justify-center items-center border-b pb-5 border-gray-300">
        <FaRegHeart size={20} />
        <p className="font-bold text-xl pl-2"> Favorite Items</p>
      </div>

      <div className="">
        {myFavorites.length === 0 && (
          <div className="mt-1 border-b py-8 border-gray-300">
            <p className="text-center text-lg text-gray-500 font-bold">
              No Favorites Yet
            </p>
            <p className="text-center text-sm px-5 py-2 text-gray-400">
              Click the heart icon on any item to add it to your favorites
            </p>
          </div>
        )}
        {myFavorites.map((fav) => (
          <div
            key={fav.id}
            className="flex border-b py-3 border-gray-300 items-start justify-between"
          >
            <div className="flex">
              <div>
                <img className="w-18 pr-2" src={fav.image} alt="" />
              </div>
              <div className="text-left">
                <p>{fav.title}</p>
                <div className="flex">
                  <p className="pr-5">${fav.currentBidPrice}</p>
                  <p>Bids: {fav.bidsCount}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button
                onClick={() => handleRemoveFromFav(fav.id)}
                className=" btn hover:text-red-700 "
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xl font-bold pt-2">
        <p>Total bids Amount</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default Favorites;
