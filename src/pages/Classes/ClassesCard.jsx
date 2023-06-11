import React from "react";

const ClassesCard = ({
  class_name,
  instructor_email,
  instructor_name,
  class_image,
  price,
  seats,
}) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={class_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{class_name}</h2>

          <p>Instructor Name : {instructor_name}</p>
          <p>Email : {instructor_email}</p>
          <p>Available seats : {seats}</p>
          <p>Price : $ {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
