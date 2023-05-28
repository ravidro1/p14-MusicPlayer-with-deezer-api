import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Data() {
  const [searchResult, setSearchResult] = useState("");

  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  // {
  //   data: null,
  //   name: null,
  //   next: null,
  // }

  const [allPlaylists, setAllPlaylists] = useState([]);

  useEffect(() => {
    const updatePlaylist = allPlaylists.find(
      (item) => item?.name == currentPlaylist?.name
    );
    if (updatePlaylist) setCurrentPlaylist(updatePlaylist);
  }, [allPlaylists]);

  const navigate = useNavigate();

  const fetchNext25 = async (nextUrl) => {
    return new Promise((resolve, reject) => {
      try {
        if (!nextUrl) return reject("reject1");
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
            return resolve("resolve");
          });
      } catch (error) {
        console.log(error);
        return reject("reject2");
      }
    });
  };

  const resetCurrent = () => {
    setCurrentPlaylist(null);
    setCurrentSongIndex(null);
  };
  return {
    navigate,
    fetchNext25,

    searchResult,
    setSearchResult,

    currentSongIndex,
    setCurrentSongIndex,

    currentPlaylist,
    setCurrentPlaylist,

    allPlaylists,
    setAllPlaylists,

    resetCurrent,
  };
}

export default Data;
