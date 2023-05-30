import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// {
//   data: null,
//   name: null,
//   next: null,
// }

function Data() {
  const navigate = useNavigate();

  const audioRef = useRef();
  const animationRef = useRef();

  const [searchResult, setSearchResult] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(null);
  const [allPlaylists, setAllPlaylists] = useState([
    { data: null, name: "1", next: null },
    { data: null, name: "2", next: null },
    { data: null, name: "3", next: null },
  ]);
  const [isPlaySong, setIsPlaySong] = useState(false);
  const [progress, setProgress] = useState(0);

  const fetchNext25 = async (nextUrl) => {
    return new Promise((resolve, reject) => {
      try {
        if (!nextUrl) return reject("reject1");
        const paramsObj = { q: null, redirect_uri: null, index: null };

        String(searchResult["next"])
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
            setSearchResult({
              ...res.data,
              name: "Search",
              data: [...searchResult.data, ...res.data["data"]],
            });
            return resolve("resolve");
          });
      } catch (error) {
        console.log(error);
        return reject("reject2");
      }
    });
  };

  const whilePlaying = () => {
    setProgress(Math.floor(audioRef.current.currentTime));
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const playSong = () => {
    audioRef.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
    setIsPlaySong(true);
  };

  const pauseSong = () => {
    audioRef.current.pause();
    cancelAnimationFrame(animationRef.current);
    setIsPlaySong(false);
  };

  const playAndReset = () => {
    setProgress(0);
    cancelAnimationFrame(animationRef.current);
    audioRef.current.currentTime = 0;
    playSong();
  };

  const pauseAndReset = () => {
    setProgress(0);
    audioRef.current.currentTime = 0;
    pauseSong();
  };

  useEffect(() => {
    if (isPlaySong) playSong();
    else pauseSong();
  }, [isPlaySong]);

  const changeCurrentSongIndex = (changeValue) => {
    if (currentSongIndex + changeValue < 0) setCurrentSongIndex(0);
    else if (currentSongIndex + changeValue > searchResult.data.length - 1)
      setCurrentSongIndex(searchResult.data.length - 1);
    else setCurrentSongIndex(currentSongIndex + changeValue);

    if (
      currentSongIndex >=
      allPlaylists[currentPlaylistIndex]?.data?.length - 3
    ) {
      fetchNext25(allPlaylists[currentPlaylistIndex].next);
    }
  };

  useEffect(() => {
    if (
      progress >= Math.floor(audioRef?.current?.duration) &&
      Math.floor(audioRef?.current?.duration) > 0
    ) {
      if (getCurrentPlaylist()?.data?.length - 1 > currentSongIndex) {
        changeCurrentSongIndex(1);
      } else {
        pauseAndReset();
      }
    }
  }, [progress]);

  const getCurrentPlaylist = () => {
    if (currentPlaylistIndex == null && !searchResult) return null;
    else if (currentPlaylistIndex < 0 || currentPlaylistIndex == null)
      return searchResult;
    return allPlaylists[currentPlaylistIndex];
  };

  const getCurrentSongDetails = () => {
    return getCurrentPlaylist()?.data[currentSongIndex];
  };

  useEffect(() => {
    if (currentSongIndex == null) pauseAndReset();
    else if (isPlaySong) playAndReset();
  }, [currentSongIndex, currentPlaylistIndex, getCurrentPlaylist()]);

  return {
    navigate,
    fetchNext25,

    searchResult,
    setSearchResult,

    currentSongIndex,
    setCurrentSongIndex,

    allPlaylists,
    setAllPlaylists,

    audioRef,
    progress,
    setProgress,
    isPlaySong,
    setIsPlaySong,
    changeCurrentSongIndex,

    getCurrentSongDetails,
    currentPlaylistIndex,
    setCurrentPlaylistIndex,
    getCurrentPlaylist,
    playAndReset,
    pauseAndReset,
  };
}

export default Data;
