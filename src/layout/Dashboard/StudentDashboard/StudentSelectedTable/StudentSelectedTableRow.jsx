import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const StudentSelectedTableRow = ({
  class_image,
  class_name,
  seats,
  price,
  instructor_name,
  id,
  index,
}) => {
  // // delete item
  // const deleteClass = async (classId) => {
  //   try {
  //     const response = await axios.delete(
  //       `${import.meta.env.VITE_BASE_URL}/classes/${classId}`
  //     );
  //     // console.log(response.data);
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Delete class one",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   } catch (error) {
  //     console.error("Error deleting class:", error);
  //   }
  // };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BASE_URL}/carts/${item._id}`)
          .then((response) => {
            const data = response.data;
            if (data.deletedCount > 0) {
              // refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the file.",
              "error"
            );
          });
      }
    });
  };

  return (
    <>
      <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="w-4 px-4 py-3">
          <div className="flex items-center">{index + 1}</div>
        </td>
        <th
          scope="row"
          className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            src={class_image}
            alt="iMac Front Image"
            className="w-auto h-8 mr-3"
          />
          {class_name}
        </th>
        <td className="px-4 py-2">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
            {instructor_name}
          </span>
        </td>
        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p className="flex items-center text-center">{seats}</p>
        </td>
        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          $ {price}
        </td>

        <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-warning">
          <button onClick={handleDelete} className="btn btn-warning">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default StudentSelectedTableRow;
