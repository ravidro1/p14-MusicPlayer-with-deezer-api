import React, { useContext } from "react";
import OneSong from "./OneSong";

function SongsListShow({  arrayOfSong }) {
  return (
    <div className="w-[100%] h-[100%] overflow-auto flex flex-wrap justify-center">
      {arrayOfSong?.map((item, index) => (
        <OneSong
          key={index}
          index={index}
          song={item}
        />
      ))}
    </div>
  );
}

export default SongsListShow;
