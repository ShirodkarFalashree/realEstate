import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BillionDollar from "./Components/BillionDollar";
import Carousel from "./Components/Carousel";
import Marquee from "./Components/Marquee";
import Video from "./Components/Video";
import ExclusiveListing from "./Components/ExclusiveListing";
import Contact from "./Components/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Hero/>
        <BillionDollar/>
        <Carousel/>
        <Marquee/>
        <Video/>
        <ExclusiveListing/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
