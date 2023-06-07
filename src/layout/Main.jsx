import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import H from "../components/shared/header/H";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <H></H>
      <Outlet />
    </div>
  );
};

export default Main;
