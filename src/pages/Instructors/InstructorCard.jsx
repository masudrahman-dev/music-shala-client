import React from "react";
import LazyLoad from "react-lazy-load";
import "../../assets/css/LazyLload.css";
const InstructorCard = ({
  class_name,
  instructor_email,
  instructor_name,
  instructor_image,
}) => {
  return (
    <div>
      <div className={` bg-base-100" dark:text-white shadow-xl`}>
        <figure>
          <LazyLoad >
            <img className="w-full" src={instructor_image} alt="Shoes" />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{class_name}</h2>

          <p>Instructor Name : {instructor_name}</p>
          <p>Email : {instructor_email}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
