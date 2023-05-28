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

  return (
    <div
      data-value="parent"
      onClick={(e) => clickParent(e, setIsNewPlaylistWindowOpen)}
      className="w-[100vw] h-[100vh] bg-[#00000063] backdrop-blur-md fixed flex justify-center items-center z-50"
    >
      <div className="w-[40%] h-[55%] text-black rounded-lg overflow-hidden bg-white flex flex-col items-center justify-around">
        <input
          className="border border-black rounded-lg w-[250px] h-[40px] p-2"
          placeholder="name"
          type="text"
          value={newPlaylistData.name}
          onChange={(e) =>
            setNewPlaylistData((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
        <button
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
