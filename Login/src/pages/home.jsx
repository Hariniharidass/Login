import React from "react";
import Booking from "./booking";
const home = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <h1 className="text-5xl my-20 mx-4">Welcome!</h1>
      <Booking />
    </div>
  );
};

export default home;
