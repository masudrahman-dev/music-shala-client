import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ShopByCategoryCard from "./ShopByCategoryCard";
import Loading from "../../../components/Loading/Loading";

const ShopByCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tabData, setTabData] = useState([]);
  const [select, setSelect] = useState("sports_car");

  useEffect(() => {
    axios
      .get(`https://toy-marketplace-server-rose.vercel.app/category/${select}`)
      .then((response) => {
        setTabData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, [select]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
        Shop by Category
      </h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => setSelect("sports_car")}>Sports Car</Tab>
          <Tab onClick={() => setSelect("stylish_car")}>Stylish Car</Tab>
          <Tab onClick={() => setSelect("motorcycle")}>Motorcycle Car</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-7">
            {tabData?.map((product) => (
              <ShopByCategoryCard key={product?._id} product={product} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-7">
            {tabData?.map((product) => (
              <ShopByCategoryCard key={product?._id} product={product} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-7">
            {tabData?.map((product) => (
              <ShopByCategoryCard key={product?._id} product={product} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
