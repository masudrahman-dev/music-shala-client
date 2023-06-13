
import "../../assets/css/LazyLload.css";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import LazyLoad from "react-lazy-load";

const Instructors = () => {
  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(`${import.meta.env.VITE_BASE_URL}/classes`);

      return data?.data;
    },
    queryKey: ["instructor-classes"],
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-32">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
            Our Instructors
          </h1>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7">
    
          {data?.map((item) => (
            <div key={item?._id} className={` bg-base-100" dark:text-white shadow-xl`}>
              <figure>
                <LazyLoad>
                  <img className="w-full" src={item?.instructor_image} alt="Shoes" />
                </LazyLoad>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item?.class_name}</h2>

                <p>Instructor Name : {item?.instructor_name}</p>
                <p>Email : {item?.instructor_email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
/**
 *
 *
 * https://bridgemusic.in/wp-content/uploads/2022/07/sagar.jpeg   Piano | SAGAR GUSAIN
 * https://bridgemusic.in/wp-content/uploads/2022/07/FB_IMG_1590746443116.jpg Guiter | HIMANSHU DELWAR
 * https://bridgemusic.in/wp-content/uploads/2022/07/Pawan-New.jpg drums | PAWAN MUNDEPHI
 * https://bridgemusic.in/wp-content/uploads/2022/07/IMG-20190911-WA0004.jpg singer | SHELLY
 * https://bridgemusic.in/wp-content/uploads/2022/07/Adithya.jpg keyboards | ADITHYA SREERAAM
 * https://bridgemusic.in/wp-content/uploads/2022/07/1509808_416176091860995_639110860_n.jpg Violin | SANDIP DEY
 *
 *
 */
