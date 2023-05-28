import React, { useContext, useState } from "react";
import { clickParent } from "./GlobalFunctions";
import { DataContext } from "../App";

export default function NewPlaylistWindowOpen({ setIsNewPlaylistWindowOpen }) {
  const { setAllPlaylists, allPlaylists } = useContext(DataContext);

  const [newPlaylistData, setNewPlaylistData] = useState({
    data: [],
    name: "",
    next: null,
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const changeNewPlaylistName = (value) => {
    setNewPlaylistData((prev) => {
      return { ...prev, name: value };
    });

    if (
      value.length <= 0 ||
      value == "Search" ||
      value == "search" ||
      allPlaylists.some((item) => item.name == value)
    )
      setButtonDisabled(true);
    else setButtonDisabled(false);
  };

  console.log(allPlaylists);
  return (
    <div
      data-value="parent"
      onClick={(e) => {
        if (clickParent(e)) setIsNewPlaylistWindowOpen(false);
      }}
      className="w-[100vw] h-[100vh] bg-[#00000063] backdrop-blur-md fixed flex justify-center items-center z-50 left-0 top-0"
    >
      <div className="w-[40%] h-[55%] text-black rounded-lg overflow-hidden bg-white flex flex-col items-center justify-around">
        <input
          className="border border-black rounded-lg w-[250px] h-[40px] p-2"
          placeholder="name"
          type="text"
          value={newPlaylistData.name}
          onChange={(e) => changeNewPlaylistName(e.target.value)}
        />
        <button
          disabled={buttonDisabled}
          style={{
            opacity: buttonDisabled ? 0.75 : 1,
          }}
          className="bg-black py-3 px-5 text-white rounded-lg"
          onClick={() => {
            setAllPlaylists((prev) => [...prev, newPlaylistData]);
            setIsNewPlaylistWindowOpen(false);
          }}
        >
          {" "}
          Add Playlist
        </button>
      </div>
    </div>
  );
}
