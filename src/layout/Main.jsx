import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return <div className="text-5xl text-center">main
  
  <Outlet/>
  </div>;
};

export default Main;
