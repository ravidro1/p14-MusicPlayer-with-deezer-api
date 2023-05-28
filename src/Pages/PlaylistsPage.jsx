import React, { useContext, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import { DataContext } from "../App";
import NewPlaylistWindowOpen from "../Components/NewPlaylistWindowOpen";
import { Trash } from "../Components/IconExport";

export default function PlaylistsPage() {
  const { allPlaylists, setAllPlaylists } = useContext(DataContext);

  const [isNewPlaylistWindowOpen, setIsNewPlaylistWindowOpen] = useState(false);

  const deletePlaylist = (playlistIndex) => {
    const newAllPlaylists = allPlaylists.filter(
      (item, index) => index != playlistIndex
    );
    setAllPlaylists(newAllPlaylists);
  };

  return (
    <>
      {isNewPlaylistWindowOpen && (
        <NewPlaylistWindowOpen
          setIsNewPlaylistWindowOpen={setIsNewPlaylistWindowOpen}
        />
      )}
      <div className="w-full h-full ">
        <NavBar />
        <section className="flex flex-col items-center w-[100%] h-[90%] pt-10">
          <h1 className="text-3xl text-white h-[10%]"> Playlists</h1>
          <div className="h-[90%] w-[100%] flex flex-wrap justify-center border overflow-auto">
            {allPlaylists?.map((item, index) => {
              return (
                <div className="flex flex-col justify-center items-center w-[250px] h-[300px] bg-[rgba(255,255,255,0.25)] rounded-lg backdrop-blur-sm m-5">
                  <img className="w-[100%] h-[55%]" src="" alt="" />
                  <h1 className="text-white w-[100%] h-[15%]  text-center">
                    name: {item.name}
                  </h1>
                  <p className="text-white w-[100%] h-[15%] text-center">
                    number of items: {item.data?.length}
                  </p>
                  <button
                    onClick={() => deletePlaylist(index)}
                    className="h-[10%] aspect-square"
                  >
                    <Trash />
                  </button>
                </div>
              );
            })}
            <button
              onClick={() => setIsNewPlaylistWindowOpen(true)}
              className=" flex justify-center items-center w-[250px] h-[300px] bg-[rgba(255,255,255,0.25)] rounded-lg backdrop-blur-sm m-5"
            >
              <div className="rounded-full bg-[#ffffff73]  h-[70px] w-[70px] flex justify-center items-center text-6xl text-white">
                <p className=" h-[70px] w-[70px]">+</p>
              </div>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
