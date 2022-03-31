import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Welcome.css";

const Welcome = () => {
  
  let navigate = useNavigate();
  
    return (
      <div className="designWelcome">
          <div className="link" onClick={()=>navigate("/login")}>Login</div>
          <div className="link" onClick={()=>navigate("/register")}>Register</div>
          <div className="link" onClick={()=>navigate("/home")}>Home</div>  
      </div>
    );
};

export default Welcome;