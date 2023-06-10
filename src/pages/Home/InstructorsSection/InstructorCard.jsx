import React from "react";

const InstructorCard = ({
  image,
  name,
  email,
  instrument,
  instructorName,
  price,
  seats,
  status,
}) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>Instructor Name : {instructorName}</p>
          <p>Email : {email}</p>
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

export default InstructorCard;
