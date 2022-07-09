import React from "react";
import "../src/styles/Cards.css";
import { useState } from "react";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Loading from "./Loading";
import { default as useApi } from "../src/Api";
import usePaginate from "./Pagination";
import "bootstrap/dist/css/bootstrap.css";
export const url = `https://api.github.com/users`;

function Cards() {
  const [data, setData] = useState([]);
  const { profileData } = useApi();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const profilePerPage = 10;
  const count = Math.ceil(profileData.length / profilePerPage);
  console.log(profileData);
  const pageData = usePaginate(profileData, profilePerPage);

  const handleChange = (e, val) => {
    setPage(val);
    pageData.jump(val);
  };

  const getProfiles = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    getProfiles();
    setLoading(true);
  }, []);

  return (
    <>
      {!loading ? (
        <h3 className="text-center">Loading please wait...</h3>
      ) : (
        // <Loading />
        <div className="mx-5">
          <Stack spacing={2}>
            <Pagination
              color="primary"
              page={page}
              size="large"
              count={count}
              shape="rounded"
              onChange={handleChange}
            />
            {
              <div className="row">
                {pageData.currentData().map((data) => {
                  return (
                    <div key={data.id} className="p-2 col-4 card-container">
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
              </div>
            }
          </Stack>
        </div>
      )}
    </>
  );
}

export default Cards;
