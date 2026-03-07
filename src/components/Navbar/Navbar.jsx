import React from "react";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="navbar bg-base-100 justify-between">
        <div className="flex">
          <a className="text-2xl text-blue-700">
            Auction
            <span className="text-yellow-400 font-bold text-2xl">Point</span>
          </a>
        </div>

        <div>
          <ul tabIndex="-1" className="p-2 flex space-x-3 ">
            <li>
              <a className="btn btn-ghost">Home</a>
            </li>
            <li>
              <a className="btn btn-ghost">Auctions</a>
            </li>
            <li>
              <a className="btn btn-ghost">Categories</a>
            </li>
            <li>
              <a className="btn btn-ghost">How to works</a>
            </li>
          </ul>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <FaRegBell size={24} />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
