import React from "react";
import "../src/styles/Cards.css";
import { useState } from "react";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
export const url = `https://api.github.com/users`;
function Cards() {
  const [data, setData] = useState([]);

  const getProfiles = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div>
      {data.map((data) => {
        return (
          <div key={data.id} className="p-2 card-container">
            <img src={data.avatar_url} alt={data.login} className="img"></img>
            <h4 className="text-center m-2">{data.login}</h4>
            <a href={data.html_url} className="mx-4  btn btn-primary btn-sm">
              View Profile
            </a>
          </div>
        );
      })}

      {/* <Stack spacing={2} className="d-flex">
        <Pagination
          color="primary"
          page={page}
          size="large"
          count={count}
          shape="rounded"
          onChange={handleChange}
        /> */}
      {/* {pageData.currentData().map((data) => {
          return (
            <div className="p-2 card-container">
              <img src={data.avatar_url} alt={data.login} className="img"></img>
              <h4 className="text-center m-2">{data.login}</h4>
              <a href={data.html_url} className="mx-4  btn btn-primary btn-sm">
                View Profile
              </a>
            </div>
          );
        })} */}
      {/* </Stack> */}
    </div>
  );
}

export default Cards;
