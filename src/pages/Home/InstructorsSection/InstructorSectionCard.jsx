import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './lazy.css'
import LazyLoad from "react-lazy-load";
const InstructorSectionCard = ({ image, name }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div className="relative ">
        <LazyLoad threshold={0.95}>
          <img className="shadow-xl rounded-xl w-full   " src={image} alt="" />
        </LazyLoad>
        <Link to={"/instructors"} className="absolute top-8 right-8 ">
          <p className="badge badge-primary uppercase p-4 hover:bg-fuchsia-500 hover:border-none ">
            {name}
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default InstructorSectionCard;
