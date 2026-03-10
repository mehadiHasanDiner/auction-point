import { useEffect, useState } from "react";
import "./App.css";
import Auctions from "./components/Auctions/Auctions";
import Banner from "./components/Banner/Banner";
import Favorites from "./components/Favorites/Favorites";
import Navbar from "./components/Navbar/Navbar";
import { toast } from "react-toastify";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [myFavorites, setMyFavorites] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);

  const handleAddToFavorite = (id) => {
    const getFavorites = productsData.find((product) => product.id === id);
    setMyFavorites([...myFavorites, getFavorites]);

    toast("🛒 Product Successfully added 👌");
    console.log(myFavorites);
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
            productsData={productsData}
            handleAddToFavorite={handleAddToFavorite}
            myFavorites={myFavorites}
          />

          <Favorites myFavorites={myFavorites} />
        </div>
      </div>
    </>
  );
}

export default App;
