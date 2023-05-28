import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Data() {
  const [searchResult, setSearchResult] = useState("");

  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  const [currentPlaylist, setCurrentPlaylist] = useState({
    data: null,
    name: null,
    next: null,
  });

  const [allPlaylists, setAllPlaylists] = useState([]);

  const navigate = useNavigate();

  const options = (songName) => {
    return {
      method: "GET",
      url: process.env.REACT_APP_DEEZER_API,
      params: { q: songName },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
      },
    };
  };

  const fetch = (songName) => {
    try {
      if (songName != "") {
        axios.request(options(songName)).then((res) => {
          // console.log(res.data);
          setCurrentPlaylist({ ...res.data, name: "Search" });
          setSearchResult(res.data);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNext25 = async (nextUrl) => {
    return new Promise((resolve, reject) => {
      try {
        if (!nextUrl) reject();
        const paramsObj = { q: null, redirect_uri: null, index: null };
        String(currentPlaylist["next"])
          .split("?")[1]
          .split("&")
          .forEach((item) => {
            if (item.includes("q=")) paramsObj.q = item.replace("q=", "");
            else if (item.includes("redirect_uri="))
              paramsObj.redirect_uri = item.replace("redirect_uri=", "");
            else if (item.includes("index="))
              paramsObj.index = item.replace("index=", "");
          });
        axios
          .request({
            method: "GET",
            url: process.env.REACT_APP_DEEZER_API,
            params: paramsObj,

            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
              "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
            },
          })
          .then((res) => {
            setCurrentPlaylist({
              ...res.data,
              name: "Search",
              data: [...currentPlaylist.data, ...res.data["data"]],
            });
            resolve();
          });
      } catch (error) {
        console.log(error);
        reject();
      }
    });
  };

  return {
    navigate,
    fetch,
    fetchNext25,

    searchResult,
    setSearchResult,

    currentSongIndex,
    setCurrentSongIndex,

    currentPlaylist,
    setCurrentPlaylist,

    allPlaylists,
  };
}

export default Data;
