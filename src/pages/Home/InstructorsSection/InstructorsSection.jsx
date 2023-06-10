

const InstructorsSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
        <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
          Instructors
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7">
        <classesCard
          image={"https://bridgemusic.in/wp-content/uploads/2022/07/sagar.jpeg"}
          name={"Students: 1232"}
        ></classesCard>
     
      </div>
    </div>
  );
};

export default InstructorsSection;
