import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetSingleUser = (email) => {
  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(
        `${import.meta.env.VITE_BASE_URL}/users/user/?email=${email}`
      );

      return data?.data;
    },
    queryKey: ["useGetSingleUser"],
  });

  return { data, isLoading, refetch };
};

export default useGetSingleUser;
