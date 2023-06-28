import React from "react";
import "./SplashScreen.scss";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  

  return (
    <div className="splash">
      <Link to="/Slides">
        <figure className="splash__figure">
          <img src="https://res.cloudinary.com/dgdogxycl/image/upload/v1687843557/Logo_lloydg.svg" alt="Logo" />
        </figure>
      </Link>
    </div>
};

export default SplashScreen;
