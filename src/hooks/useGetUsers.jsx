import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetUsers = (email) => {
  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(
        `${import.meta.env.VITE_BASE_URL}/users/?email=${email}`
      );

      return data?.data;
    },
    queryKey: ["users"],
  });

  return { data, isLoading, refetch };
};

export default useGetUsers;
