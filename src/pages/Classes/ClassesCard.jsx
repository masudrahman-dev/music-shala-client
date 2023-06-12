import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";

const ClassesCard = ({
  class_name,
  instructor_email,
  instructor_name,
  class_image,
  price,
  seats,
  _id,
}) => {
  let role;
  // let role = "admin";

  // const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  // const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    // console.log(item);
    if (user && user.email) {
      const cartItem = {
        classId: _id,
        class_name,
        instructor_email,
        instructor_name,
        class_image,
        price,
        seats,
        userEmail: user?.email,
      };
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/carts`, cartItem, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const data = response.data;
          if (data.insertedId) {
            // refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "class added successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while adding the food to the cart.",
            icon: "error",
          });
        });
    } else {
      Swal.fire({
        title: "Please login before select",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div
        className={`card ${
          seats == 0 ? "bg-rose-600" : "bg-base-100"
        }  dark:text-white shadow-xl`}
      >
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
            {role === "admin" || role == "instructor" ? (
              <button disabled className="btn btn-primary">
                Select
              </button>
            ) : (
              <button onClick={handleAddToCart} className="btn btn-primary">
                Select
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
