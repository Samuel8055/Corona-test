import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <Link to='/'>
          <h3 className='header'>COVID-19 TEST</h3>
        </Link>
      </div>
      <h5 className='marquee'>
        <span>
          Wash your hands thoroughly with soap atleast for every 2 hours | Cough
          into your elbow | Don't touch your face | Maintain social distance |
          Stay Home | Stay Safe
        </span>
      </h5>
    </>
  );
};

export default NavBar;
