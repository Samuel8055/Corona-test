import React from "react";
import { Link } from "react-router-dom";

const warningColor = (result) => {
  let baseClass = "result ";

  if (result === "High") {
    baseClass = baseClass + " red";
  } else if (result === "Medium") {
    baseClass = baseClass + " yellow";
  } else {
    baseClass = baseClass + " green";
  }

  return baseClass;
};

const Result = ({ result, warning }) => {
  return (
    <div className='text-center'>
      <h3 className={warningColor(result)}>
        Your risk of having COVID-19 is {result}
      </h3>
      <h5 className='mt-3 mb-3 message'>{warning}</h5>
      <h5 className='message'>
        For further enquiries, please write to us at{" "}
        <a href='mailto:somone@example.com'>ouremail@gmail.com</a>
      </h5>

      <Link to='/'>
        <button className='btn btn-info mt-5'>Take another test</button>
      </Link>
    </div>
  );
};

export default Result;
