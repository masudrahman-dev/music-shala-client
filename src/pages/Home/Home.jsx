import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import ClassesSection from "./ClassesSection/ClassesSection";
import InstructorsSection from "./InstructorsSection/InstructorsSection";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import CustomarReview from '../ExtraPages/CustomarReview'
import ServiceTeam from "../ExtraPages/ServiceTeam";
import { useQuery } from "@tanstack/react-query";
const Home = () => {

  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(`${import.meta.env.VITE_BASE_URL}/classes/six-item`);

      return data?.data;
    },
    queryKey: ["home-classes"],
  });



  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Banner />
      <ClassesSection data={data} />
      <InstructorsSection data={data} />
      <CustomarReview></CustomarReview>
      <ServiceTeam></ServiceTeam>
    </>
  );
};

export default Home;
