import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetClasses = (email = "", status = "") => {
  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(
        `${
          import.meta.env.VITE_BASE_URL
        }/classes/?email=${email}&status=${status}`
      );

      return data?.data;
    },
    queryKey: ["classes"],
  });

  return { data, isLoading, refetch, error };
};

export default useGetClasses;
