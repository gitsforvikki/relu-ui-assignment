import React, { useState } from "react";
import MainContent from "../modules/MainContent";
import Photographer from "../modules/Photographer";
import Navbar from "../layout/Navbar";

let MainLayout = () => {
  let [flag , setFlag] = useState("hidden");


  return (
    <React.Fragment>
      <div className="container bg-gray-100">
        <div className="lg:flex">
      
          <div className={` `}>
            <Navbar />
          </div>

          <MainContent />
          <Photographer />
        </div>
      </div>
    </React.Fragment>
  );
};
export default MainLayout;
