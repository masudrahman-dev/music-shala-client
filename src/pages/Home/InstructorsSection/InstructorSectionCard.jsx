
const InstructorSectionCard = ({image,students_enrolled}) => {
  return (
    <>
      <div className="relative ">
        <img className="shadow-xl rounded-xl w-full   " src={image} alt="" />
        {/* "https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp" */}
        <div className="absolute top-8 right-8 ">
          <p className="badge badge-primary uppercase p-4">{students_enrolled}</p>
        </div>
      </div>
    </>
  );
};

export default InstructorSectionCard;
