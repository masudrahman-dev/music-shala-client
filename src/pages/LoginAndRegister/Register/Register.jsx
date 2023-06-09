import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/Images/guitar-fill.svg";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const [confirmPass, setConfirmPass] = useState(null);
  const { createUser, updateUser, GoogleSignIn, user } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);
  // console.log("location :>> ", location);
  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        // setUser(loggedInUser);
        // console.log('loggedInUser :>> ', loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const handleRegister = (data) => {
    // Handle form submission
    console.log("data :>> ", data);
    const { name, email, photo, password, confirmPassword } = data;
    console.log("name :>> ", name);
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // console.log("user :>> ", user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
    updateUser(name, photo);
  };
  // console.log("errors :>> ", errors);
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
          Music Shala
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name *
                </label>
                <input
                  defaultValue="sss"
                  type="name"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-rose-500 mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email *
                </label>
                <input
                  defaultValue="sss@gmail.com"
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-rose-500 mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="url"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Photo url *
                </label>
                <input
                  defaultValue="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/01/product-3.jpg"
                  type="url"
                  id="url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="photo url"
                  {...register("photo", { required: "photo url is required" })}
                />
              </div>
              {errors.email && (
                <p className="text-rose-500 mt-1">{errors.email.message}</p>
              )}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password *
                </label>
                <input
                  defaultValue="sssPass&123"
                  type="text"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("password", {
                    required: "write password",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
                      message:
                        "Password must be 6 characters long with at least 1 capital letter and 1 special character",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-rose-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => {
                      const isBool = value === password.value;
                      setConfirmPass(isBool);
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-rose-500 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
                {/* { confirmPass ? (
                  <p className="text-rose-500 mt-1">Passwords do not match</p>
                ) : (
                  ""
                )} */}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              {confirmPass ? (
                <button type="submit" className="w-full btn btn-primary ">
                  Create an account
                </button>
              ) : (
                <button type="submit" className="w-full btn btn-primary ">
                  Create an account
                </button>
              )}
              <div className="divider">OR</div>
              <div className="text-center">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-primary"
                >
                  Google
                </button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
