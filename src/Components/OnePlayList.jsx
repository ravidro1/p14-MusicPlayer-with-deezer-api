import React, { useContext } from "react";
import { Trash } from "./IconExport";
import { DataContext } from "../App";
import { clickParent } from "./GlobalFunctions";

function OnePlaylist({ item, index, setTempSelectedPlaylist }) {
  const { allPlaylists, setAllPlaylists, resetCurrent } =
    useContext(DataContext);

  const deletePlaylist = (playlistIndex) => {
    const newAllPlaylists = allPlaylists.filter(
      (item, index) => index != playlistIndex
    );
    setAllPlaylists(newAllPlaylists);
    resetCurrent();
  };

  return (
    <div
      data-value="parent"
      onClick={(e) => {
        if (clickParent(e)) setTempSelectedPlaylist(item);
      }}
      className="flex flex-col justify-center items-center w-[250px] h-[300px] bg-[rgba(255,255,255,0.25)] rounded-lg backdrop-blur-sm m-5 cursor-pointer"
    >
      <img data-value="parent" className="w-[100%] h-[55%]" src="" alt="" />
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
        onClick={() => deletePlaylist(index)}
        className="h-[10%] aspect-square"
      >
        <Trash />
      </button>
    </div>
  );
}

export default OnePlaylist;
