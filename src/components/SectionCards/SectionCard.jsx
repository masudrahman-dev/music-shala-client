import React from "react";

const SectionCard = ({ image, name }) => {
  // console.log('image,name :>> ', image,name);
  return (
    <div className="">
      <div className="relative ">
        <img className="shadow-xl rounded-xl w-full   " src={image} alt="" />
        {/* "https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp" */}
        <div className="absolute top-8 right-8 ">
          <p class="badge badge-primary uppercase p-4">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
