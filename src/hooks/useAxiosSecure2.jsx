import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});
// axios instance
const useAxiosSecure2 = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // Add a request interceptor
    axiosSecure.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        const token = localStorage.getItem("access-token");
        // console.log(token);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      function (error) {
        // Do something with request error

        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axiosSecure.interceptors.response.use(
      (response) => {
        // Do something with response data
        // console.log(response);
        return response;
      },
      (error) => {
        // Do something with response error
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return { axiosSecure };
};

export default useAxiosSecure2;
