import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import PlusIconButton from "./PlusIconButton";
import AddToPlaylistWindow from "./AddToPlaylistWindow";

function OneSong({ song, index }) {
  const { navigate, setCurrentSongIndex } = useContext(DataContext);

  function onSongPick(thisSong) {
    setCurrentSongIndex(thisSong);
    navigate("/CurrentSong");
  }

  const [isPlaylistWindowOpen, setIsPlaylistWindowOpen] = useState(false);

  return (
    <div
      onClick={() => onSongPick(index)}
      className="w-[250px] h-[400px]  bg-[#000000] rounded-xl overflow-hidden m-5 songHoverAnimation"
    >
      <img
        src={song.album.cover_medium}
        alt={`(${song.title}) - pic not found`}
        className="w-[250px] aspect-square"
      />

      <div className="flex flex-col items-center justify-between p-2 h-[150px]">
        <div className="text-white text-center text-xl h-[60%] overflow-ellipsis overflow-hidden w-[250px]">
          {song.title}
        </div>
        <div className="text-white text-center h-[20%] overflow-ellipsis overflow-hidden w-[250px]">
          {" "}
          {song.artist.name}{" "}
        </div>

        <PlusIconButton setIsPlaylistWindowOpen={setIsPlaylistWindowOpen} />

        {isPlaylistWindowOpen && (
          <AddToPlaylistWindow
            isPlaylistWindowOpen={isPlaylistWindowOpen}
            setIsPlaylistWindowOpen={setIsPlaylistWindowOpen}
          />
        )}
      </div>
    </div>
  );
}

export default OneSong;
