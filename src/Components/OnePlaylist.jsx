import React, { useContext } from "react";
import { DataContext } from "../App";
import { clickParent } from "./GlobalFunctions";
import PlaylistPicture from "./PlaylistPicture";
import TrashIconButton from "./TrashIconButton";

function OnePlaylist({ item, playlistIndex, setTempSelectedPlaylistIndex }) {
  const {
    allPlaylists,
    setAllPlaylists,
    setCurrentPlaylistIndex,
    setCurrentSongIndex,
    currentPlaylistIndex,
    pauseAndReset,
    getCurrentPlaylist,
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

    if (getCurrentPlaylist()?.id == allPlaylists[playlistIndex]?.id)
      pauseAndReset();
    setAllPlaylists(newAllPlaylists);
  };

  return (
    <div className="flex sm:flex-col justify-between items-center sm:w-[250px] sm:h-[300px] w-[90%] h-[110px] bg-[rgba(255,255,255,0.25)] rounded-lg backdrop-blur-sm m-5 cursor-pointer overflow-hidden">
      <button
        data-value="parent"
        onClick={(e) => {
          if (clickParent(e)) setTempSelectedPlaylistIndex(playlistIndex);
        }}
        className="absolute w-full h-full z-20 left-0 top-0"
      />

      <section className="sm:w-[100%] sm:h-[55%] sm:max-w-[100%] max-w-[30%] h-[100%] aspect-square ">
        <PlaylistPicture playlist={allPlaylists[playlistIndex]} />
      </section>
      <section className="flex flex-col justify-around h-[100%] sm:h-[30%]">
        <h1
          data-value="parent"
          className="text-white text-center flex justify-center items-center"
        >
          name: {item.name}
        </h1>
        <p
          data-value="parent"
          className="text-white  text-center flex justify-center items-center"
        >
          number of items: {item.data?.length ? item.data?.length : 0}
        </p>
      </section>
      <div className="sm:h-[15%] h-[60%] aspect-square flex justify-center items-center">
        <TrashIconButton onClick={() => deletePlaylist(playlistIndex)} />
      </div>
    </div>
  );
}
export default OnePlaylist;
