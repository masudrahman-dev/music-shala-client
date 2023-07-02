import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Classes from "./Classes/Classes";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import CustomarReview from "../ExtraPages/CustomarReview";
import ServiceTeam from "../ExtraPages/ServiceTeam";

import useGetClasses from "../../hooks/useGetClasses";

const Home = () => {
  const { data, isLoading, refetch, error } =useGetClasses("","approved")


  
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Banner />
      <Classes data={data} refetch={refetch} />

      <CustomarReview></CustomarReview>
      <ServiceTeam></ServiceTeam>
    </>
  );
};

export default Home;
