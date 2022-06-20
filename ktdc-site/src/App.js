import "./App.css";
import Header from "./components/Header";
import Properties from "./components/Properties";
import Slick from "./components/Slick";
import { cardItems, budgetHotels } from "../src/constants";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [state, setState] = useState();
  return (
    <div>
      <Header />
      <Slick />
      <div className="p-[15px] h-[70px]">
        <div className="max-w-[1360px] mx-auto my-[10px] px-[15px] w-full text-[#007bff] text-xl">
          <marquee
            behavior="scroll"
            direction="left"
            onmouseover="this.stop();"
            onmouseout="this.start();"
          >
            Go on... STOP ME!
          </marquee>
        </div>
      </div>
      <Properties text="Premium Properties" cardItems={cardItems} />
      <Properties text="Budget Hotels" cardItems={budgetHotels} />
      <Properties text="Tamarind" cardItems={budgetHotels} />
      <Footer />
    </div>
  );
}

export default App;
