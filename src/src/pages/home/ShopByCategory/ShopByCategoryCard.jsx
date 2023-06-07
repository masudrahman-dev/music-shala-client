import { Link } from "react-router-dom";

import "../Gallery/GalleryCard.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ShopByCategoryCard = ({ product }) => {
  return (
    <div className=" flex flex-col justify-between  bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="m-5  h-64 bg-white  rounded-lg overflow-hidden ">

          <img src={product?.product_url} alt="" />
      </div>

      <div className="px-5 pb-5 ">
        <h5 className="text-xl my-3 font-semibold tracking-tight text-gray-900 dark:text-white">
          {product?.product_name}
        </h5>

        <div className="flex gap-2">
          <Rating style={{ maxWidth: 100 }} value={product?.rating} readOnly />
          <span className="ml-1 text-gray-500 dark:text-gray-400">
            {product?.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product?.price}
          </span>
          <button
            onClick={() => {
              // Swal.fire(
              //   "The Internet?",
              //   "That thing is still around?",
              //   "question"
              // );
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          <Link to={`products/${product?._id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategoryCard;
