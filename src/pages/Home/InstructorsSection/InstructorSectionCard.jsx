import { Link } from "react-router-dom";

const InstructorSectionCard = ({ image, students_enrolled }) => {
  return (
    <>
      <div className="relative ">
        <img className="shadow-xl rounded-xl w-full   " src={image} alt="" />
        {/* "https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp" */}
        <Link to={"/instructors"} className="absolute top-8 right-8 ">
          <p className="badge badge-primary uppercase p-4 hover:bg-fuchsia-500 hover:border-none ">
            {students_enrolled}
          </p>
        </Link>
      </div>
    </>
  );
};

export default InstructorSectionCard;
