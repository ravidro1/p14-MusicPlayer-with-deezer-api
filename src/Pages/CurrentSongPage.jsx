import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../App";
import NavBar from "../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

import AddToPlaylistWindow from "../Components/AddToPlaylistWindow";
import CurrentSongComponentsHub from "../Components/CurrentSongPage/CurrentSongComponentsHub";

function CurrentSongPage(props) {
  const {
    currentSongIndex,
    setCurrentSongIndex,
    searchResult,
    fetchNext25,
    currentPlaylist,
  } = useContext(DataContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (currentPlaylist == null || currentSongIndex == null) navigate("/");
  }, [currentPlaylist, currentSongIndex]);

  const [currentSongDetails, setCurrentSongDetails] = useState();

  useEffect(() => {
    setCurrentSongDetails(currentPlaylist.data[currentSongIndex]);

    if (currentSongIndex >= currentPlaylist.data.length - 3) {
      const waitFunc = async () => {
        await fetchNext25(currentPlaylist.next);
      };
      waitFunc();
    }
  }, [currentSongIndex]);

  const [isPlaylistWindowOpen, setIsPlaylistWindowOpen] = useState(false);

  const changeCurrentSongIndex = (changeValue) => {
    if (currentSongIndex + changeValue < 0) setCurrentSongIndex(0);
    if (currentSongIndex + changeValue > searchResult.data.length - 1)
      setCurrentSongIndex(searchResult.data.length - 1);
    setCurrentSongIndex(0);
    setCurrentSongIndex(currentSongIndex + changeValue);
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center-center text-white">
      <NavBar />
      <CurrentSongComponentsHub
        currentSongDetails={currentSongDetails}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        setIsPlaylistWindowOpen={setIsPlaylistWindowOpen}
        changeCurrentSongIndex={changeCurrentSongIndex}
        playlist={currentPlaylist}
      />
      {isPlaylistWindowOpen && (
        <AddToPlaylistWindow
          isPlaylistWindowOpen={isPlaylistWindowOpen}
          setIsPlaylistWindowOpen={setIsPlaylistWindowOpen}
        />
      )}
    </div>
  );
}

export default CurrentSongPage;
