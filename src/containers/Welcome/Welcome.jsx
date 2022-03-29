import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  
  let navigate = useNavigate();
  
    return (
      <div className="designWelcome">
        Hello Welcome
      </div>
    );
};

export default Welcome;