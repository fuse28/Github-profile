import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Cards from "./Cards";

import "../src/styles/Profiles.css";

function Profiles() {
  return (
    <div className="bg-light vh-100">
      <h2 className="text-center ">Welcome to Github profiles</h2>
      <Cards />
    </div>
  );
}

export default Profiles;
