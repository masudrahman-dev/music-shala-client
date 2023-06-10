import InstructorSectionCard from "./InstructorSectionCard";

const InstructorsSection = ({ data }) => {
  console.log("data :>> ", data);
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
        <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
          Instructors
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7">
        {data?.map((item) => (
          <InstructorSectionCard
            key={item._id}
            image={item?.instructor_image}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructorsSection;
