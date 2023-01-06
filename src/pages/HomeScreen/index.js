import React from "react";
import HsHook from "./components/HsHook";
import HsShapes from "./components/HsShapes";
import HsTrain from "./components/HsTrain";
import HsTwoColumns from "./components/HsTwoColumns";
import "./HomeScreen.css";
const HomeScreen = ({ navSelected, setNavSelected }) => {
  return (
    <div className="hs-container">
      <HsShapes></HsShapes>
      <HsHook></HsHook>
      <HsTwoColumns></HsTwoColumns>
      <HsTrain
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      ></HsTrain>
    </div>
  );
};

export default HomeScreen;
