import React, { useContext, useState } from "react";
import { clickParent } from "./GlobalFunctions";
import { DataContext } from "../App";
import { v4 as uuidv4 } from "uuid";

export default function NewPlaylistWindowOpen({ setIsNewPlaylistWindowOpen }) {
  const { setAllPlaylists, allPlaylists } = useContext(DataContext);

  const [newPlaylistData, setNewPlaylistData] = useState({
    data: [],
    name: "",
    next: null,
    id: uuidv4(),
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
      setIsButtonDisabled(true);
    else setIsButtonDisabled(false);
  };

  const addNewPlaylist = () => {
    setAllPlaylists((prev) => [...prev, newPlaylistData]);
    setIsNewPlaylistWindowOpen(false);
  };
  return (
    <div
      data-value="parent"
      onClick={(e) => {
        if (clickParent(e)) setIsNewPlaylistWindowOpen(false);
      }}
      className="w-[100vw] h-[100vh] bg-[#00000063] backdrop-blur-md fixed flex justify-center items-center z-50 left-0 top-0"
    >
      <div className="lg:w-[65%] lg:h-[65%] sm:w-[80%] sm:h-[70%] w-[100%] h-[100%] sm:rounded-lg overflow-hidden text-black bg-[#ffffff7b] flex flex-col items-center justify-around">
        <input
          className="border border-black rounded-lg w-[250px] h-[40px] p-2"
          placeholder="name"
          type="text"
          value={newPlaylistData.name}
          onChange={(e) => changeNewPlaylistName(e.target.value.trim())}
        />
        <section className="flex flex-col justify-between items-center">
          <button
            disabled={isButtonDisabled}
            style={{
              opacity: isButtonDisabled ? 0.75 : 1,
            }}
            className="bg-black py-3 px-5 text-white rounded-lg m-10"
            onClick={() => addNewPlaylist()}
          >
            {" "}
            Add Playlist
          </button>
          <button
            onClick={() => setIsNewPlaylistWindowOpen(false)}
            className="text-2xl w-[50px] aspect-square p-2  bg-[#00000017] hover:bg-[#00000045]  rounded-lg"
          >
            X
          </button>
        </section>
      </div>
    </div>
  );
}

// bg-[rgb(51,65,85)] hover:bg-[rgb(51,65,85)]
