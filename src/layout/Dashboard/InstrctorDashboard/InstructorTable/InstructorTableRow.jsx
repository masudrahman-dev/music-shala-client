import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const InstructorTableRow = ({
  index,
  instructor_name,
  class_image,
  class_name,
  status,
  seats,
  _id,
  price,
}) => {
  const deleteClass = async (classId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/classes/${classId}`
      );
      console.log(response.data); // Optional: Handle the response as needed
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
          <div className="flex items-center">
            <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
            {seats}
          </div>
        </td>
        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          $ {price}
        </td>

        <td className="px-4 text-center  py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          34
        </td>
        <td className="px-4  py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {status}
        </td>
        <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Read
        </td>
        <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-info">
          <Link to={`/dashboard/instructor/update-class/${_id}`}> update</Link>
        </td>
        <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-warning">
          <button onClick={() => deleteClass(_id)} className="btn btn-warning">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default InstructorTableRow;
