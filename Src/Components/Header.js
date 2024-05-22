import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Header = () => {
  let [btn, setBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo-loading" />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>
            onlineStatus :
            {onlineStatus ? <BeenhereIcon /> : <DoNotDisturbIcon />}
          </li>
          <li>
            <Link to={"/"} className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="links">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="links">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btn == "Login" ? setBtn("Logout") : setBtn("Login"); // condtional rendering
              }}
            >
              {btn}
            </button>
          </li>
          <li> user : {loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
