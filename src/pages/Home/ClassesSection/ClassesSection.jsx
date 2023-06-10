import ClassesCard from "./ClassesCard";

const ClassesSection = ({ data }) => {

  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
        <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
          Classes
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7">
        {data?.map((item) => (
          <ClassesCard image={item?.class_image} name={item?.class_name} />
        ))}
      </div>
    </div>
  );
};

export default ClassesSection;
/**
 * https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/vocal-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/piano-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/drum-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/electronic-keyboards.webp
 * https://bridgemusic.in/wp-content/uploads/2022/06/Himanshu-C-New.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/11/5-ways-learning-a-musica-instrument-improves-mental-health.webp
 * https://bridgemusic.in/wp-content/uploads/2022/10/5-Common-Mistakes-to-Avoid-when-Learning-to-Play-the-Guitar.webp
 *
 *
 */
