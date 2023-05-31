import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import NavBar from "../Components/NavBar/NavBar";
import SongsListShow from "../Components/SongsListShow";

function CurrentPlaylistPage({}) {
  const { getCurrentPlaylist } = useContext(DataContext);

  return (
    <div className="w-[100%] h-[100%]">
      <NavBar />

      <section className="w-[100%] sm:h-[90%] h-[80%] flex justify- items-center flex-col pt-10">
        <h1 className="text-white text-4xl">{getCurrentPlaylist()?.name}</h1>
        <SongsListShow playlist={getCurrentPlaylist()} isInPlaylist={true} />
      </section>
    </div>
  );
}

export default CurrentPlaylistPage;
