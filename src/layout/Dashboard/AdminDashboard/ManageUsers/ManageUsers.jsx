import axios from "axios";
import Spinner from "../../../../components/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";

const ManageUsers = () => {
  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(`${import.meta.env.VITE_BASE_URL}/users`);

      return data?.data;
    },
    queryKey: ["manage-users"],
  });
  console.log("data :>> ", data);
  const handleRole = (id, newRole, email) => {
    axios
      .patch(
        `${
          import.meta.env.VITE_BASE_URL
        }/users/update-role/?userId=${id}&newRole=${newRole}`
      )
      .then((response) => {
        console.log(response.data);
        // Do something with the response

        toast.success("Successfully Updated!");
        refetch();
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });

    axios
      .patch(
        `${
          import.meta.env.VITE_BASE_URL
        }/classes/user-role/?email=${email}&newRole=${newRole}`
      )
      .then((response) => {
        console.log(response.data);
        // Do something with the response
        // toast.success("Successfully Updated!");
        refetch();
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };
  if (isLoading) {
    return <Spinner />;
  }
  // TODO: delete user btn
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          {/*  */}
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            {/* table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      #
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Role
                    </th>

                    <th scope="col" className="px-4 py-3">
                      Make Instructor
                    </th>

                    <th scope="col" className="px-4 py-3">
                      Make Admin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row */}
                  {data?.map((item, index) => (
                    <tr
                      key={item?._id}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="w-4 px-4 py-3">
                        <div className="flex items-center">{index + 1}</div>
                      </td>
                      <th
                        scope="row"
                        className="flex items-center  px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          src={item?.photoURL || item?.userPhoto}
                          alt="iMac Front Image"
                          className="w-auto h-8 mr-3"
                        />
                        {item?.displayName || item?.userName || item?.name}
                      </th>
                      <td className="px-4 py-2">
                        <span className="bg-primary-100 dark:text-white text-primary-800  font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                          {item?.role}
                        </span>
                      </td>

                      <td className="px-4  py-2 font-medium text-gray-900 whitespace-nowrap ">
                        {item?.role === "instructor" ? (
                          <button disabled className="btn btn-info">
                            Instructor
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              handleRole(item?._id, "instructor", item?.email);
                            }}
                            className="btn btn-info"
                          >
                            Instructor
                          </button>
                        )}
                      </td>
                      <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-warning">
                        {item?.role === "admin" ? (
                          <button disabled className="btn btn-primary">
                            Admin
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleRole(item?._id, "admin", item?.email)
                            }
                            className="btn btn-primary"
                          >
                            Admin
                          </button>
                        )}
                      </td>
                      <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-warning">
                        {item?.role === "user" ? (
                          <button disabled className="btn btn-accent">
                            User
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleRole(item?._id, "user", item?.email)
                            }
                            className="btn btn-accent"
                          >
                            User
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageUsers;
