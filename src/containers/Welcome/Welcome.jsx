import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

import "./Welcome.css";

const Welcome = () => {
  
  let navigate = useNavigate();
  
    return (
      <div className="designWelcome">
          <Button type="primary"  onClick={()=>navigate("/login")}>Login</Button>  
          <Button type="primary"  onClick={()=>navigate("/register")}>Register</Button>  
          <Button type="primary"  onClick={()=>navigate("/home")}>Home</Button>    
      </div>
    );
};

export default Welcome;