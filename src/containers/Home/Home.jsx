import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  
  let navigate = useNavigate();
  //Primero comprobamos en el hook si tenemos el token (estamos logeados)
  
    return (
      <div className="designHome">
        Soy Home
      </div>
    );
};

export default Home;
