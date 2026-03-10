import React from "react";

const Footer = () => {
  return (
    <div className=" mt-20 bg-base-100 ">
      <div className=" justify-center items-center flex py-15 ">
        <div>
          <div className="flex items-center justify-center">
            <a className="text-2xl text-blue-700">
              Auction
              <span className="text-yellow-400 font-bold text-2xl">Point</span>
            </a>
          </div>
          <div className="space-y-5">
            <div className="text-center">
              <p>Bid. Win. Own.</p>
              <ul className="flex space-x-5 mt-2">
                <li>Home</li>
                <li>Auctions</li>
                <li>Categories</li>
                <li>How to works</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-2">
            © 2025 AuctionHub. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
