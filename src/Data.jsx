import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import FirebaseHandler from "./Components/FirebaseHandler";

function Data(props) {
  const {
    addPlaylist,
    findPlaylist,
    updateListPlaylist,
    deletePlaylist,
    allPlaylistData,
  } = FirebaseHandler();

  const [songName, setSongName] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [currentSong, setCurrentSong] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);

  const navigate = useNavigate();

  return {
    songName,
    setSongName,
    searchResult,
    setSearchResult,

    navigate,
    currentSong,
    setCurrentSong,

    addPlaylist,
    updateListPlaylist,
    deletePlaylist,
    allPlaylistData,
    currentPlaylist,
    setCurrentPlaylist,
    findPlaylist,
  };
}

export default Data;
