import axios from "axios";
import React from "react";

const StudentSelectedTableRow = ({
  class_image,
  class_name,
  seats,
  price,
  instructor_name,
  id,
  index,
}) => {


  // delete item
  const deleteClass = async (classId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/classes/${classId}`
      );
      // console.log(response.data); 
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Delete class one",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error deleting class:", error);
    }
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
          Delete
        </td>
      </tr>
    </>
  );
};

export default StudentSelectedTableRow;
