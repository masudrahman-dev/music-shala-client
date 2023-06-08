import React from "react";
import InstructorCard from "./InstructorCard";
import Card from "../../../components/Card/Card";

const Instructors = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
        <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
          Instructors
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7">
        <Card
          image={"https://bridgemusic.in/wp-content/uploads/2022/07/sagar.jpeg"}
          name={"Students: 1232"}
        ></Card>
        <Card
          image={
            "https://bridgemusic.in/wp-content/uploads/2022/07/FB_IMG_1590746443116.jpg"
          }
          name={"Students: 1232"}
        ></Card>
      </div>
    </div>
  );
};

export default Instructors;
/**
 * https://bridgemusic.in/wp-content/uploads/2022/07/sagar.jpeg Piano | SAGAR GUSAIN
 * https://bridgemusic.in/wp-content/uploads/2022/07/FB_IMG_1590746443116.jpg Guiter | HIMANSHU DELWAR
 * https://bridgemusic.in/wp-content/uploads/2022/07/Pawan-New.jpg drums | PAWAN MUNDEPHI
 * https://bridgemusic.in/wp-content/uploads/2022/07/IMG-20190911-WA0004.jpg singer | SHELLY
 * https://bridgemusic.in/wp-content/uploads/2022/07/Adithya.jpg keyboards | ADITHYA SREERAAM
 * https://bridgemusic.in/wp-content/uploads/2022/07/1509808_416176091860995_639110860_n.jpg Violin | SANDIP DEY
 *
 *
 */
