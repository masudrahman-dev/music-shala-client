import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
import useAxiosSecure2 from "./useAxiosSecure2";

const useGetCarts = (email) => {
  // const { data, isLoading, refetch, error } = useQuery({
  //   queryFn: async () => {
  //     const data = await axios.get(
  //       `${import.meta.env.VITE_BASE_URL}/carts/?email=${email}`,
  //       {
  //         headers: {
  //           authorization: `Bearer ${localStorage.getItem("access-token")}`,
  //         },
  //       }
  //     );

  //     return data?.data;
  //   },
  //   queryKey: ["carts"],
  // });
  // return { data, isLoading, refetch, error };

  const { loading } = useAuth();
  const { axiosSecure } = useAxiosSecure2();
  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ["carts", email],
    enabled: !loading,
    queryFn: async () => {
      const data = await axiosSecure.get(`/carts/?email=${email}`);
      return data?.data;
    },
  });

  return { data, isLoading, refetch, error };
};
export default useGetCarts;
