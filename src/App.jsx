import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <div className="bg-white">
          <Navbar />
        </div>
        <Banner />
      </div>
    </>
  );
}

export default App;
