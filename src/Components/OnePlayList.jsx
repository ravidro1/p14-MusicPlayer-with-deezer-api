import React, { useContext } from "react";
import { DataContext } from "../App";

function OnePlaylist({ item, index }) {
  const {} = useContext(DataContext);

  return (
    <div
      style={{ backgroundColor: `${item.color}` }}
      className="main-onePlayListPage"
    >
      <div> Name: {item.name} </div>
      <div> number of songs: {item.data?.length} </div>
      <div
        className="playlist-remove-Button-onPlayList-Page"
        onClick={removeFromPlaylists_list}
      >
        remove from playlist list
      </div>
    </div>
  );
}

export default OnePlaylist;
