import React, { useContext } from "react";
import { clickParent } from "./GlobalFunctions";
import { DataContext } from "../App";
import PlaylistPicture from "./PlaylistPicture";

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
      <div className="lg:w-[65%] lg:h-[65%] sm:w-[80%] sm:h-[70%] w-[95%] h-[95%] text-black rounded-lg overflow-hidden">
        <section className="h-[10%] w-[100%] bg-black border-b relative flex items-center">
          <button
            onClick={() => setIsPlaylistWindowOpen(false)}
            className=" text-white flex justify-center items-center text-2xl absolute w-[5%] aspect-square m-5 hover:bg-[#ffffff91] hover:text-black rounded-md "
          >
            X
          </button>
          <h1 className=" text-white flex justify-center items-center text-2xl absolute left-[50%] translate-x-[-50%]">
            Playlists:{" "}
          </h1>
        </section>
        <section className="w-[100%] h-[90%] bg-black text-white flex justify-center items-center">
          {allPlaylists?.length > 0 ? (
            <div className="w-[100%] h-[100%] overflow-auto">
              {allPlaylists?.map((onePlaylist, index) => {
                const isSongAlreadyInPlaylist = onePlaylist?.data?.some(
                  (element) => element?.id == item?.id
                );
                return (
                  <button
                    disabled={isSongAlreadyInPlaylist}
                    onClick={() => addToPlaylist(index)}
                    className="border-b w-[100%] lg:h-[25%] sm:h-[20%] h-[15%] flex items-center justify-between relative "
                    key={index}
                  >
                    <div className="h-[100%] absolute addToPlaylistHoverAnimation left-[0%] z-[1]"></div>

                    <div className="h-[100%] aspect-square z-[1]">
                      <PlaylistPicture playlist={onePlaylist} />
                    </div>
                    {isSongAlreadyInPlaylist && (
                      <p className="text-sm z-[1]">
                        {" "}
                        This Song Already In Playlist
                      </p>
                    )}
                    <p className="z-[1]">
                      Songs:{" "}
                      {onePlaylist?.data?.length
                        ? onePlaylist?.data?.length
                        : 0}
                    </p>
                  </button>
                );
              })}
            </div>
          ) : (
            <h1> There Are No Playlists Listed </h1>
          )}
        </section>
      </div>
    </div>
  );
}
