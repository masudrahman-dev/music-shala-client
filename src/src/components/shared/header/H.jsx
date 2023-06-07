import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Logo from "../../../assets/images/logo.svg";
const H = () => {
  const [isShow, setIsShow] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    // setIsUserOpen(!isUserOpen);
    logOut()
      .then(() => {
        // Sign-out successful.
        // console.log("log out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      
    </div>
  );
};

export default H;
