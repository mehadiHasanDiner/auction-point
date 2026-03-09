import { Suspense, use, useState } from "react";
import "./App.css";
import Auctions from "./components/Auctions/Auctions";
import Banner from "./components/Banner/Banner";
import Favorites from "./components/Favorites/Favorites";
import Navbar from "./components/Navbar/Navbar";
import { toast } from "react-toastify";

const dataPromise = fetch("data.json").then((res) => res.json());

function App() {
  const [addToFavorite, setAddToFavorite] = useState([]);

  const productsData = use(dataPromise);

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
          <Suspense
            fallback={
              <p className="font-bold text-center">Product data is loading</p>
            }
          >
            <Auctions
              productsData={productsData}
              handleAddToFavorite={handleAddToFavorite}
            />
          </Suspense>
          <Favorites />
        </div>
      </div>
    </>
  );
}

export default App;
