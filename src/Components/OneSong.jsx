import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import PlusIconButton from "./PlusIconButton";
import AddToPlaylistWindow from "./AddToPlaylistWindow";
import { clickParent } from "./GlobalFunctions";
import { Trash } from "./IconExport";

function OneSong({ song, index, isInPlaylist, playlist }) {
  const {
    navigate,
    setCurrentSongIndex,
    currentPlaylist,
    setCurrentPlaylist,
    allPlaylists,
    setAllPlaylists,
  } = useContext(DataContext);

  function onSongPick(thisSong) {
    setCurrentSongIndex(thisSong);
    setCurrentPlaylist(playlist);
    navigate("/CurrentSong");
  }

  const [isPlaylistWindowOpen, setIsPlaylistWindowOpen] = useState(false);

  const deleteFromPlaylist = () => {
    const copyAllPlaylists = [...allPlaylists];
    const playlistIndex = copyAllPlaylists.findIndex(
      (item) => playlist.name == item.name
    );
    copyAllPlaylists[playlistIndex] = {
      ...copyAllPlaylists[playlistIndex],
      data: copyAllPlaylists[playlistIndex].data.filter(
        (item) => item?.id != song?.id
      ),
    };
    setAllPlaylists(copyAllPlaylists);
    setCurrentSongIndex(null);
  };

  return (
    <>
      {isPlaylistWindowOpen && (
        <AddToPlaylistWindow
          isPlaylistWindowOpen={isPlaylistWindowOpen}
          setIsPlaylistWindowOpen={setIsPlaylistWindowOpen}
          item={song}
        />
      )}
      <div className="w-[250px] h-[400px]  bg-[#000000] rounded-xl overflow-hidden m-5 songHoverAnimation cursor-pointer relative">
        <div
          data-value="parent"
          onClick={(e) => {
            if (clickParent(e)) onSongPick(index);
          }}
          className="absolute w-full h-full z-20 left-0 top-0"
        />
        <img
          src={song.album.cover_medium}
          alt={`(${song.title}) - pic not found`}
          className="w-[250px] aspect-square"
        />

        <div className="flex flex-col items-center justify-between p-2 h-[150px]">
          <div className="text-white text-center text-xl h-[60%] overflow-ellipsis overflow-hidden w-[250px]">
            {song.title}
          </div>
          <div className="text-white text-center h-[20%] overflow-ellipsis overflow-hidden w-[250px]">
            {" "}
            {song.artist.name}{" "}
          </div>

          {isInPlaylist && playlist?.name != "Search" ? (
            <button
              onClick={() => deleteFromPlaylist()}
              className="h-[10%] aspect-square z-50"
            >
              <Trash />
            </button>
          ) : (
            <PlusIconButton setIsPlaylistWindowOpen={setIsPlaylistWindowOpen} />
          )}
        </div>
      </div>{" "}
    </>
  );
}

export default OneSong;
