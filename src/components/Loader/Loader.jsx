import React from "react";
import Style from "./Loader.module.css";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className={`flex ${Style.loader}`}></div>
    </div>
  );
}

export default Loader;
