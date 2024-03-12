import React from "react";
import Style from "./Loader.module.css";

function Loader() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0">
      <div className={`fixed top-[40%] left-[45%] ${Style.loader}`}></div>
    </div>
  );
}

export default Loader;
