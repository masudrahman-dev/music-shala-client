import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import ClassesSection from "./ClassesSection/ClassesSection";
import InstructorsSection from "./InstructorsSection/InstructorsSection";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import CustomarReview from '../ExtraPages/CustomarReview'
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/classes/six`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Banner />
      <ClassesSection data={data} />
      <InstructorsSection data={data} />
      <CustomarReview></CustomarReview>
    </>
  );
};

export default Home;
