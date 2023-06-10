import { Link } from "react-router-dom";

const ClassesSectionCard = ({ image, name }) => {
  return (
    <div className="">
      <div className="relative ">
        <img className="shadow-xl rounded-xl w-full" src={image} alt="" />
        <Link to={"/classes"} className="absolute top-8 right-8 ">
          <p className="badge badge-primary hover:bg-fuchsia-500 hover:border-none  uppercase p-4">{name}</p>
        </Link>
      </div>
    </div>
  );
};

export default ClassesSectionCard;
