import React from "react";

const InstructorCard = ({
  class_name,
  instructor_email,
  instructor_name,
  instructor_image,
}) => {
  return (
    <div>
      <div
        className={` bg-base-100" dark:text-white shadow-xl`}
      >
        <figure>
          <img className="w-full" src={instructor_image} alt="Shoes" />
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
