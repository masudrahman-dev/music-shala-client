import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetCarts = (email) => {
  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(
        `${import.meta.env.VITE_BASE_URL}/carts/?email=${email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );

      return data?.data;
    },
    queryKey: ["carts"],
  });

  return { data, isLoading, refetch };
};

export default useGetCarts;
