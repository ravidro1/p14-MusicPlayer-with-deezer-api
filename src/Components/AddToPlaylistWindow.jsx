import React, { useContext } from "react";
import { clickParent } from "./GlobalFunctions";
import { DataContext } from "../App";

export default function AddToPlaylistWindow({
  isPlaylistWindowOpen,
  setIsPlaylistWindowOpen,
  item,
}) {
  const { setAllPlaylists, allPlaylists } = useContext(DataContext);

  const addToPlaylist = (playlistIndex) => {
    const copyAllPlaylists = [...allPlaylists];
    copyAllPlaylists[playlistIndex] = {
      ...copyAllPlaylists[playlistIndex],
      data: [...copyAllPlaylists[playlistIndex].data, item],
    };
    setAllPlaylists(copyAllPlaylists);
    setIsPlaylistWindowOpen(false);
  };
  return (
    <div
      data-value="parent"
      onClick={(e) => {
        if (clickParent(e)) setIsPlaylistWindowOpen(false);
      }}
      className="w-[100vw] h-[100vh] bg-[#00000063] backdrop-blur-md fixed flex justify-center items-center z-50 left-0 top-0"
    >
      <div className="w-[55%] h-[55%] text-black rounded-lg overflow-hidden">
        <h1 className="w-[100%] h-[10%] bg-black text-white flex justify-center items-center text-2xl border-b">
          Playlists:{" "}
        </h1>
        <div className="w-[100%] h-[90%] bg-black text-white flex justify-center items-center">
          {allPlaylists?.length > 0 ? (
            <div className="w-[100%] h-[100%] overflow-auto">
              {allPlaylists?.map((onePlaylist, index) => {
                const isSongAlreadyInPlaylist = onePlaylist.data.some(
                  (element) => element.id == item.id
                );
                return (
                  <button
                    disabled={isSongAlreadyInPlaylist}
                    onClick={() => addToPlaylist(index)}
                    className="border w-[100%] h-[15%] flex items-center justify-between hover:bg-red-600"
                    key={index}
                  >
                    <img src={onePlaylist.picture} alt="picture" />
                    {isSongAlreadyInPlaylist && (
                      <p className="text-sm"> This Song Already In Playlist</p>
                    )}
                    <p>Songs: {onePlaylist?.data?.length}</p>
                  </button>
                );
              })}
            </div>
          ) : (
            <h1> No </h1>
          )}
        </div>
      </div>
    </div>
  );
}
