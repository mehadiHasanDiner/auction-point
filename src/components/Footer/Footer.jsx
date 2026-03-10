import React from "react";

const Footer = () => {
  return (
    <div className=" mt-20">
      <div className=" justify-center items-center flex flex-col bg-base-100 py-15">
        <div className="flex">
          <a className="text-2xl text-blue-700">
            Auction
            <span className="text-yellow-400 font-bold text-2xl">Point</span>
          </a>
        </div>
        <div className="space-y-5">
          <p>Bid. Win. Own.</p>
          <div className="text-center">
            <p>Home </p>
            <p> Auctions </p>
            <p> Categories </p>
            <p> How to works</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
