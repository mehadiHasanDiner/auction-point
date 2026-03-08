import { useState } from "react";
import "./App.css";
import Auctions from "./components/Auctions/Auctions";
import Banner from "./components/Banner/Banner";
import Favorites from "./components/Favorites/Favorites";
import Navbar from "./components/Navbar/Navbar";
import { toast } from "react-toastify";

function App() {
  const [addToFavorite, setAddToFavorite] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToFavorite = (productData) => {
    const newAddToFavorite = [...addToFavorite, productData];
    setAddToFavorite(newAddToFavorite);
    toast("🛒 Product added to Favorite 👌");
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
          <Auctions
            handleAddToFavorite={handleAddToFavorite}
            isClicked={isClicked}
          />
          <Favorites />
        </div>
      </div>
    </>
  );
}

export default App;
