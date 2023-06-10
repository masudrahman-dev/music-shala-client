import axios from "axios";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";
const FormCRUD = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // const baseUrl = import.meta.env.VITE_BASE_URL;
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/add-class`, data)
      .then((response) => {
        // console.log("Success:", response.data);
        // Process the response data

        toast.success("Successfully toasted!");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" flex justify-center">
        <div className=" p-4 w-full max-w-2xl h-full">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 rounded-lg shadow  bg-white  dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Class
              </h3>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="hidden">
                  <label
                    htmlFor="product_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status
                  </label>
                  <input
                    defaultValue="pending"
                    {...register("status", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="default status is pending"
                  />
                </div>
                <div>
                  <label
                    htmlFor="className"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Class Name *
                  </label>
                  <input
                    defaultValue="Guitar"
                    {...register("class_name", {
                      required: "This field is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="class name"
                  />
                  {errors.class_name && (
                    <p className="text-rose-500 mt-1">
                      {errors.class_name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="product_url"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Class image url *
                  </label>
                  <input
                    defaultValue="https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp"
                    type="url"
                    {...register("class_image", {
                      required: "This field is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="class image url"
                  />
                  {errors.class_image && (
                    <p className="text-rose-500 mt-1">
                      {errors.class_image.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="seller_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Instructor Name *
                  </label>
                  <input
                    defaultValue="HIMANSHU DELWAR"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="instructor name"
                    {...register("instructor_name", {
                      required: " This field is required",
                    })}
                  />

                  {errors.instructor_name && (
                    <p className="text-rose-500 mt-1">
                      {errors.instructor_name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="seller_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Instructor Email *
                  </label>
                  <input
                    defaultValue="example@gmail.com"
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="instructor email"
                    {...register("instructor_email", {
                      required: "This field is required",
                    })}
                  />
                  {errors.instructor_email && (
                    <p className="text-rose-500 mt-1">
                      {errors.instructor_email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    defaultValue="230"
                    type="number"
                    {...register("price", {
                      required: " This field is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                  />

                  {errors.price && (
                    <p className="text-rose-500 mt-1">{errors.price.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Available Seats
                  </label>
                  <input
                    type="number"
                    defaultValue="7"
                    {...register("seats", {
                      required: "This field is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="12"
                  />

                  {errors.seats && (
                    <p className="text-rose-500 mt-1">{errors.seats.message}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800  focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 btn-primary"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add new Class
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCRUD;
