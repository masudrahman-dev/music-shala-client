import React from "react";

const InstructorCard = () => {
  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
