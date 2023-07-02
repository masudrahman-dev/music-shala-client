import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../../components/Card/Card";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
const Classes = ({ data, refetch }) => {
  const [isDisable, setIsDisable] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const handleAddToCart = (item) => {
    setIsDisable(true);
    if (user) {
      const {
        class_image,
        class_name,
        instructor_email,
        instructor_name,
        price,
        role,
        user_email,
        _id,
      } = item;
      const customer_email = user?.email;

      const savedCarts = {
        customer_email,
        class_image,
        class_name,
        instructor_email,
        instructor_name,
        price,
        role,
        user_email,
        classId: _id,
      };

      axios
        .post(`${import.meta.env.VITE_BASE_URL}/carts`, savedCarts)
        .then((response) => {
          const data = response.data;
          if (data) {
 
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "class added successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            setIsDisable(false);
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while adding the item to the cart.",
            icon: "error",
          });

          setIsDisable(false);
        });

      // axios
      //   .patch(`${import.meta.env.VITE_BASE_URL}/classes/${item?._id}`)
      //   .then((response) => {
      //     const data = response.data;
      //     if (data) {
      //       refetch();
      //     }
      //   })
      //   .catch((error) => {
      //     console.error("Error adding item to cart:", error);
      //   });
    } else {
      Swal.fire({
        title: "Please login before adding to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          refetch();
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
        <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
          Classes
        </h1>
      </div>
      <div>
        <ul className="flex justify-around">
          <li>
            <button onClick={() => {}} className="underline font-bold">
              All
            </button>
          </li>
          <li>
            <button onClick={() => {}} className="underline font-bold">
              Guitar
            </button>
          </li>
          <li>
            <button onClick={() => {}} className="underline font-bold">
              Tabla
            </button>
          </li>
          <li>
            <button onClick={() => {}} className="underline font-bold">
              Vocalist
            </button>
          </li>
          <li>
            <button onClick={() => {}} className="underline font-bold">
              Singer
            </button>
          </li>
          <li>
            <button onClick={() => {}} className="underline font-bold">
              Harmony
            </button>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2  lg:grid-cols-3 gap-7">
        {data?.map((item) => (
          <Card
            key={item?._id}
            item={item}
            handleAddToCart={handleAddToCart}
            isDisable={isDisable}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;

/**
 * https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/vocal-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/piano-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/drum-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/electronic-keyboards.webp
 * https://bridgemusic.in/wp-content/uploads/2022/06/Himanshu-C-New.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/11/5-ways-learning-a-musica-instrument-improves-mental-health.webp
 * https://bridgemusic.in/wp-content/uploads/2022/10/5-Common-Mistakes-to-Avoid-when-Learning-to-Play-the-Guitar.webp
 *
 *
 */
