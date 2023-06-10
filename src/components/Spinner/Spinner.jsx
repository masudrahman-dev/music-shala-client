import { Hourglass } from "react-spinners-css";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Hourglass size={36} color="#d946ef" />
    </div>
  );
};

export default Spinner;
