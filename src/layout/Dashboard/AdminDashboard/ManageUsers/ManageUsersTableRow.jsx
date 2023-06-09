import React from "react";

const ManageUsersTableRow = () => {
  return (
    <>
      <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="w-4 px-4 py-3">
          {/* <div className="flex items-center">{index + 1}</div> */}
        </td>
        <th
          scope="row"
          className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            // src={product_url}
            src="https://source.unsplash.com/user/c_v_r/100x100"
            alt="iMac Front Image"
            className="w-auto h-8 mr-3"
          />
          {/* {product_name} */}
          Akash Barma
        </th>
        <td className="px-4 py-2">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
            Student
          </span>
        </td>

        <td className="px-4  py-2 font-medium text-gray-900 whitespace-nowrap ">
          <button className="btn btn-info"> Instructor</button>
        </td>
        <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-warning">
          <button className="btn btn-primary"> Admin</button>
        </td>
      </tr>
    </>
  );
};

export default ManageUsersTableRow;
