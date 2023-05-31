import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import { DataContext } from "../App";
import NewPlaylistWindowOpen from "../Components/NewPlaylistWindowOpen";
import SongsListShow from "../Components/SongsListShow";
import OnePlaylist from "../Components/OnePlaylist";

export default function PlaylistsPage() {
  const { allPlaylists, setAllPlaylists } = useContext(DataContext);

  const [isNewPlaylistWindowOpen, setIsNewPlaylistWindowOpen] = useState(false);

  const [tempSelectedPlaylistIndex, setTempSelectedPlaylistIndex] =
    useState(null);

  return (
    <>
      {isNewPlaylistWindowOpen && (
        <NewPlaylistWindowOpen
          setIsNewPlaylistWindowOpen={setIsNewPlaylistWindowOpen}
        />
      )}

      <div className="w-full h-full ">
        <NavBar />
        {tempSelectedPlaylistIndex != null ? (
          <section className="flex flex-col items-center w-[100%] sm:h-[90%] h-[80%] pt-10">
            <div className="flex flex-col justify-between items-center w-[100%] h-[15%]">
              <button
                onClick={() => setTempSelectedPlaylistIndex(null)}
                className="bg-white self-start p-3 mx-5 rounded-lg"
              >
                Back To Playlists Page
              </button>
              <h1 className="text-3xl text-white h-fit">
                Playlist: {allPlaylists[tempSelectedPlaylistIndex]?.name}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center w-[100%] h-[85%]">
              {allPlaylists[tempSelectedPlaylistIndex]?.data?.length > 0 ? (
                <SongsListShow
                  isInPlaylist={true}
                  playlist={allPlaylists[tempSelectedPlaylistIndex]}
                />
              ) : (
                <h1 className="text-white text-4xl text-center">
                  {" "}
                  This Playlist Is Empty
                </h1>
              )}
            </div>
          </section>
        ) : (
          <section className="flex flex-col items-center w-[100%] sm:h-[90%] h-[80%] pt-10">
            <h1 className="text-3xl text-white h-[10%] flex justify-center items-center">
              {" "}
              Playlists
            </h1>
            <div className="h-[90%] w-[100%] flex flex-wrap justify-center overflow-auto">
              {allPlaylists?.map((item, index) => {
                return (
                  <OnePlaylist
                    setTempSelectedPlaylistIndex={setTempSelectedPlaylistIndex}
                    key={index}
                    item={item}
                    playlistIndex={index}
                  />
                );
              })}
              <button
                onClick={() => setIsNewPlaylistWindowOpen(true)}
                className=" flex justify-center items-center sm:w-[250px] sm:h-[300px] w-[90%] h-[110px] bg-[rgba(255,255,255,0.25)] rounded-lg backdrop-blur-sm m-5"
              >
                <div className="rounded-full bg-[#ffffff73]  h-[70px] w-[70px] flex justify-center items-center text-6xl text-white">
                  <p className=" h-[70px] w-[70px]">+</p>
                </div>
              </button>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
