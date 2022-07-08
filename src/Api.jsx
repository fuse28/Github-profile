import React from "react";
import { useState, useEffect } from "react";
import { url } from "./Cards";

function useApi() {
  const [profileData, setProfileData] = useState([]);

  const getProfiles = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProfileData(data);
  };
  useEffect(() => {
    getProfiles();
  }, []);

  return { profileData };
}

export default useApi;
