import React from "react";
import { ErrorImg } from "../../assets";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src={ErrorImg} alt="not found" className="w-96" />
    </div>
  );
};

export default ErrorPage;
