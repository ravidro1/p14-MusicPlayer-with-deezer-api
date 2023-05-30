import React, { useContext } from "react";
import { Trash } from "./IconExport";
import { DataContext } from "../App";
import { clickParent } from "./GlobalFunctions";
import PlaylistPicture from "./PlaylistPicture";

function OnePlaylist({ item, playlistIndex, setTempSelectedPlaylistIndex }) {
  const {
    allPlaylists,
    setAllPlaylists,
    setCurrentPlaylistIndex,
    setCurrentSongIndex,
    currentPlaylistIndex,
    pauseAndReset,
  } = useContext(DataContext);

  const deletePlaylist = (playlistIndex) => {
    const resetIndexValues = () => {
      setCurrentPlaylistIndex(null);
      setCurrentSongIndex(null);
    };

    const newAllPlaylists = allPlaylists.filter(
      (item, index) => index != playlistIndex
    );

    let newPlaylistIndex = playlistIndex;

    if (playlistIndex == currentPlaylistIndex) {
      if (newAllPlaylists.length > 0) {
        if (newPlaylistIndex > 0) newPlaylistIndex--;
        else newPlaylistIndex = 0;

        if (newAllPlaylists[newPlaylistIndex]?.data?.length > 0) {
          setCurrentPlaylistIndex(newPlaylistIndex);
          setCurrentSongIndex(0);
        } else resetIndexValues();
      } else if (newAllPlaylists.length <= 0) resetIndexValues();
    }
    setAllPlaylists(newAllPlaylists);
    pauseAndReset();
  };

  return (
    <div
      data-value="parent"
      onClick={(e) => {
        if (clickParent(e)) setTempSelectedPlaylistIndex(playlistIndex);
      }}
      className="flex flex-col justify-between items-center w-[250px] h-[300px] bg-[rgba(255,255,255,0.25)] rounded-lg backdrop-blur-sm m-5 cursor-pointer overflow-hidden"
    >
      <div className="w-[100%] h-[60%] ">
        <PlaylistPicture playlist={allPlaylists[playlistIndex]} />
      </div>
      <h1
        data-value="parent"
        className="text-white w-[100%] h-[15%]  text-center"
      >
        name: {item.name}
      </h1>
      <p
        data-value="parent"
        className="text-white w-[100%] h-[15%] text-center"
      >
        number of items: {item.data?.length}
      </p>
      <button
        onClick={() => deletePlaylist(playlistIndex)}
        className="h-[10%] aspect-square"
      >
        <Trash />
      </button>
    </div>
  );
}

export default OnePlaylist;
