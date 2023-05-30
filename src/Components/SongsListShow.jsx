import React, { useContext } from "react";
import OneSong from "./OneSong";

function SongsListShow({ playlist, isInPlaylist }) {
  // console.log(playlist);
  return (
    <div className="w-[100%] h-[100%] overflow-auto flex flex-wrap justify-center">
      {playlist?.data?.map((item, index) => {
        return (
          <OneSong
            playlist={playlist}
            isInPlaylist={isInPlaylist}
            key={index}
            index={index}
            song={item}
          />
        );
      })}
    </div>
  );
}

export default SongsListShow;
