import React, {useContext, useEffect} from "react";
import "./fetch.css";
import axios from "axios";
import {DataContext} from "../App";

function Fetch(props) {
  const {songName, searchResult, setSearchResult} = useContext(DataContext);

  const options = {
    method: "GET",
    url: process.env.REACT_APP_DEEZER_API,
    params: {q: songName},
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    },
  };

  useEffect(() => {
    try {
      if (songName != "") {
        axios.request(options).then((response) => {
          console.log(response.data);
          setSearchResult(response.data);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [songName]);

  return <div></div>;
}

export default Fetch;
