import axios from "axios";
import { Link } from "react-router-dom";

const ManageClassesTableRow = ({ item, index }) => {
  const {
    class_image,
    class_name,
    price,
    seats,
    status,
    _id,
    instructor_name,
  } = item;

  const handleStatus = (id, newStatus) => {
    // console.log(id, newStatus);
    axios
      .patch(
        `${
          import.meta.env.VITE_BASE_URL
        }/classes/?classId=${id}&newStatus=${newStatus}`
      )
      .then((response) => {
        console.log(response.data);
        // Do something with the response
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
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
        <td className="px-4 py-2 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
          <p className="text-center">{seats}</p>
        </td>
        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          $ {price}
        </td>

        <td className="px-4  py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {status}
        </td>
        <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {status === "denied" ? (
            <Link
              to={`/dashboard/admin/manage-classes/feedback/${_id}`}
              className="btn  btn-info"
            >
              Feedback
            </Link>
          ) : (
            <Link
              disabled
              to={`/dashboard/admin/manage-classes/feedback/${_id}`}
              className="btn  btn-info"
            >
              Feedback
            </Link>
          )}
        </td>
        <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-info">
          {status === "approved" || status === "denied" ? (
            <button
              disabled
              onClick={() => handleStatus(_id, "approved")}
              className="btn btn-success"
            >
              Approve
            </button>
          ) : (
            <button
              onClick={() => handleStatus(_id, "approved")}
              className="btn btn-success"
            >
              Approve
            </button>
          )}
        </td>
        <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-warning">
          {status === "approved" || status === "denied" ? (
            <button
              disabled
              onClick={() => handleStatus(_id, "denied")}
              className="btn btn-warning "
            >
              deny
            </button>
          ) : (
            <button
              onClick={() => handleStatus(_id, "denied")}
              className="btn btn-warning "
            >
              deny
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default ManageClassesTableRow;
