import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import H from "../components/shared/header/H";
const Main = () => {
  return (
    <>
      
      <Header></Header>
      <Outlet />
    </>
  );
};

export default Main;
