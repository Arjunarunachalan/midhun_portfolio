import { useState } from "react";
import "./App.css";
import Back from "./assets/Images/Back";
import Behance from "./assets/Images/Behance.png";
import Dribble from "./assets/Images/Dribble.png";
import Experience from "./assets/Images/Experience";
import Head from "./assets/Images/Haed";
import Insta from "./assets/Images/Insta.png";
import MobileApp from "./assets/Images/MOBILE APPLICATION.png";
import Name from "./assets/Images/Midhun.png";
import Profile from "./assets/Images/Prof.png";
import Responsive from "./assets/Images/RESPONSIVE DESIGN.png";
import WebDesign from "./assets/Images/WEB DESIGN.png";
import Hero from "./assets/Images/Hero.png";
import Hello from "./assets/Images/HELLO.png";
import Ui from "./assets/Images/UX DESIGNER.png";
import Marquee from "./assets/Images/Marquee.png";
import Two from "./assets/Images/Two.png";

function App() {
  return (
    <div className="w-100% max-w-[100vw]">
      {/* Hero Section  starts*/}

      <div className="hero custom-container  ">
        <div className="flex justify-center items-center flex-col gap-10 pt-[200px]">
          <img src={Hello} alt="Hello Text" className="w-[200px] z-20" />
          <img src={Name} alt="Name" className="w-[700px] z-20" />
          <img src={Ui} alt="Ui designer" className="w-[200px] z-20" />
        </div>
        <div className="flex justify-center items-center gap-5 mt-[100px]">
          <img src={Insta} alt="" className="w-[70px]" />
          <img src={Behance} alt="" className="w-[70px]" />
          <img src={Dribble} alt="" className="w-[70px]" />
        </div>
      </div>
      {/* Hero section ends */}

      {/* next section starts */}
      <div className="custom-container bg-secondary_bg h-[90vh] ">
        <div className="marquee pt-[70px]">
          <div className="content">
            <div className="flex gap-3">
              <img src={Marquee} alt="marquee text" className="w-[1500px]" />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center flex-col gap-8 text-white ps-[100px] pt-[100px]">
          <img src={WebDesign} alt="" className="w-[350px]" />
          <img src={MobileApp} alt="" className="w-[560px]" />
          <img src={Responsive} alt="" className="w-[560px]" />
        </div>
      </div>

      <div className="custom-container bg-black h-[90vh] relative">
        <div className="flex ">
          <div>
            <img
              src={Profile}
              alt="profile image"
              className="h-[547px] w-[420px]"
            />
          </div>
          <div className="text-white p-[70px]">
            <div className="w-[100%] max-w-[500px]  text-white font-poppins font-thin">
              A passionate UI/UX designer with a keen eye for creating visually
              appealing and user-friendly digital experiences. With a background
              in 2 Years , I bring a blend of creativity and technical expertise
              to my design projects.
            </div>
          </div>
          <div className="absolute left-[320px] top-[230px]">
            <img src={Two} alt="two" className="w-[190px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
