import React from "react";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePaginate from "./Pagination";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "./Cards";
import { default as useApi } from "../src/Api";
import "../src/styles/Profiles.css";

function Profiles() {
  const { profileData } = useApi();
  const [page, setPage] = useState(1);

  const profilePerPage = 10;
  const count = Math.ceil(profileData.length / profilePerPage);
  console.log(profileData);
  const pageData = usePaginate(profileData, profilePerPage);

  const handleChange = (e, val) => {
    setPage(val);
    pageData.jump(val);
  };

  return (
    <div className="bg-#c7cfed">
      <h2 className="text-center ">Welcome to Github profiles</h2>
      <div className="grid">
        <Cards />
      </div>
      {/* <Stack spacing={2}>
        <Pagination
          color="primary"
          page={page}
          size="large"
          count={count}
          shape="rounded"
          onChange={handleChange}
        />
        {pageData.currentData().map((data) => {
          return (
            <div className="p-2 card-container">
              <img src={data.avatar_url} alt={data.login} className="img"></img>
              <h4 className="text-center m-2">{data.login}</h4>
              <a href={data.html_url} className="mx-4  btn btn-primary btn-sm">
                View Profile
              </a>
            </div>
          );
        })}
      </Stack> */}

      <footer>
        <Stack spacing={2}>
          <Pagination
            color="primary"
            page={page}
            size="large"
            count={count}
            shape="rounded"
            onChange={handleChange}
          />
          {pageData.currentData().map((data) => {
            return (
              <div className="p-2 card-container">
                <img
                  src={data.avatar_url}
                  alt={data.login}
                  className="img"
                ></img>
                <h4 className="text-center m-2">{data.login}</h4>
                <a
                  href={data.html_url}
                  className="mx-4  btn btn-primary btn-sm"
                >
                  View Profile
                </a>
              </div>
            );
          })}
        </Stack>
      </footer>
    </div>
  );
}

export default Profiles;
