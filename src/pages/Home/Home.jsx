import Banner from "./Banner/Banner";
import Classes from "./Classes/Classes";
import CustomarReview from "../ExtraPages/CustomarReview";
import ServiceTeam from "../ExtraPages/ServiceTeam";
import Spinner from "../../components/Spinner/Spinner";
import { useEffect, useState } from "react";
import useGetClasses from "../../hooks/useGetClasses";
import axios from "axios";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // const { data, isLoading, refetch, error } = useGetClasses(
  //   "",
  //   "approved",
  //   currentTab
  // );

  const handleTabs = (tab) => {
    // console.log("tab :>> ", tab);
    setCurrentTab(tab);
    // refetch();
    // console.log("currentTab :>> ", currentTab);
  };

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BASE_URL
        }/classes/?email=${""}&status=${"approved"}&currentTab=${currentTab}`
      )
      .then((res) => {
        // console.log(res.data); // You can access the response data here
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error retrieving classes:", error);
        setIsLoading(false);
      });
  }, [currentTab]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {/* <Banner /> */}
      <Classes data={data} handleTabs={handleTabs} currentTab={currentTab} />
      <CustomarReview></CustomarReview>
      <ServiceTeam></ServiceTeam>
    </>
  );
};

export default Home;
