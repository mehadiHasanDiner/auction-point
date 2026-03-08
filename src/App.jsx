import { useState } from "react";
import "./App.css";
import Auctions from "./components/Auctions/Auctions";
import Banner from "./components/Banner/Banner";
import Favorites from "./components/Favorites/Favorites";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [addToFavorite, setAddToFavorite] = useState([]);

  const handleAddToFavorite = (productData) => {
    const newAddToFavorite = [...addToFavorite, productData];
    setAddToFavorite(newAddToFavorite);
    console.log(newAddToFavorite);
  };
  return (
    <>
      <div className="bg-gray-200 ">
        <div className="bg-white">
          <Navbar />
        </div>
        <div className="mb-20">
          <Banner />
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-3 gap-5">
          <Auctions handleAddToFavorite={handleAddToFavorite} />
          <Favorites />
        </div>
      </div>
    </>
  );
}

export default App;
