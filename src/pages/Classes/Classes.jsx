import React from "react";
import InstructorCard from "../Instructors/InstructorCard";

const Classes = () => {
  return (
    <div className="mt-32">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
            Classes
          </h1>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7">
          <InstructorCard
            image={
              "https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp"
            }
            name={"Guitar"}
            email={"example@gamil.com"}
            instructorName={"Sudhan Devnath"}
            seats={"32"}
            price={"4234"}
          ></InstructorCard>
          <InstructorCard
            image={
              "https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp"
            }
            name={"SAGAR GUSAIN"}
            email={"example@gamil.com"}
            Instrument={"Piano"}
          ></InstructorCard>
          <InstructorCard
            image={
              "https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp"
            }
            name={"SAGAR GUSAIN"}
            email={"example@gamil.com"}
            Instrument={"Piano"}
          ></InstructorCard>
        </div>
      </div>
    </div>
  );
};

export default Classes;
