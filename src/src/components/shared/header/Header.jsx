import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Logo from "../../../assets/images/logo.svg";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    // setIsUserOpen(!isUserOpen);
    logOut()
      .then(() => {
        // Sign-out successful.
        // console.log("log out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="  container mx-auto py-5">
      <div className="bg-white border-gray-200 dark:bg-gray-900 rounded-lg">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="btn btn-outline btn-ghost">
            <img src={Logo} alt="logo" />
            <Link to="/" className=" ml-3 text-2xl font-semibold text-rose-600">
              TOY BARI
            </Link>
          </div>
          <div className="flex items-center md:order-2">
            {/* user menu */}

            <div>
              {user ? (
                <div className="flex">
                  <div className=" mx-3">
                    <label
                      onMouseEnter={() => setIsShow(!isShow)}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </label>
                    {isShow && <p className="absolute ">{user?.displayName}</p>}
                  </div>
                  <button onClick={handleLogOut} className="btn btn-ghost">
                    Log out
                  </button>
                </div>
              ) : (
                <NavLink className="btn btn-ghost" to="/login">
                  Log in
                </NavLink>
              )}
            </div>
            {/* main menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* hidden */}
          <div
            className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/">
                  {({ isActive }) => (
                    <span className={isActive ? "text-rose-600 font-bold" : ""}>
                      Home
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs">
                  {({ isActive }) => (
                    <span className={isActive ? "text-rose-600 font-bold" : ""}>
                      Blogs
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/all_toys">
                  {({ isActive }) => (
                    <span className={isActive ? "text-rose-600 font-bold" : ""}>
                      All Toys
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                {user && (
                  <div className="md:flex gap-7">
                    <div>
                      <NavLink to="/my_toys">
                        {({ isActive }) => (
                          <span
                            className={
                              isActive ? "text-rose-600 font-bold" : ""
                            }
                          >
                            My Toys
                          </span>
                        )}
                      </NavLink>{" "}
                    </div>

                    <div>
                      <NavLink to="/add_toys">
                        {({ isActive }) => (
                          <span
                            className={
                              isActive ? "text-rose-600 font-bold block" : ""
                            }
                          >
                            Add Toys
                          </span>
                        )}
                      </NavLink>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
