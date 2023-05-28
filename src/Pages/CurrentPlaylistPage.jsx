import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import NavBar from "../Components/NavBar/NavBar";
import SongsListShow from "../Components/SongsListShow";

function CurrentPlaylistPage({}) {
  const { currentPlaylist } = useContext(DataContext);

  return (
    <div className="w-[100%] h-[100%]">
      <NavBar />

      <section className="w-[100%] h-[90%] flex justify- items-center flex-col pt-10">
        <h1 className="text-white text-4xl">{currentPlaylist.name}</h1>
        <SongsListShow playlist={currentPlaylist} isInPlaylist={true} />
      </section>
    </div>
  );
}

export default CurrentPlaylistPage;
