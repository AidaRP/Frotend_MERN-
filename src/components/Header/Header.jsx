import React, {  useState } from "react";
import { LOGOUT } from "../../redux/types";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Input,notification } from "antd";
import logo from "../../img/title.jpg";

import "./Header.css";

const Header = (props) => {
  let navigate = useNavigate();

  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/" + text);
    }
  };

  const surf = (lugar) => {
    navigate(lugar);
  };

  const logOut = () => {
    props.dispatch({ type: LOGOUT });
      notification.success({
        message:
          "Successfully logged out, see you soon, bye bye, !!!",
  
    })
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  if (!props.token) {
    return (
      <div className="designHeader">
        <img src={logo} alt="" onClick={() => surf("/home")}/>
        <div className="input-container">
         
        </div>
        <div className="linksDesign">
          <div
            type="primary"
            className="link-header"
            onClick={() => surf("/login")}
          >
            Login
          </div>
          <div
            type="primary"
            className="link-header"
            onClick={() => surf("/register")}
          >
            Register
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="designHeader">
        <img src={logo} alt="" onClick={() => surf("/home")}/>
        <div className="input-container">
          <Input onKeyUp={handleChange} placeholder="Search User" />
        </div>
        <div className="linksDesign">
          <div className="link-header" onClick={() => surf("/home")}>
            Home
          </div>
          <div className="link-header" onClick={() => surf("/profile")}>
            {props.user?.nickname}
          </div>
          <div className="link-header" onClick={() => logOut()}>
            Logout
          </div>
          <div
            type="primary"
            className="link-header"
            onClick={() => surf("/users")}
          >
            Users
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  user: state.credentials.user,
  token: state.credentials.token,
});
export default connect(mapStateToProps)(Header);
