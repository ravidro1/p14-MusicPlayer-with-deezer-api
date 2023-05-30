import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import NavBarButton from "./NavBarButton";

function NavBar() {
  const { currentSongIndex, currentPlaylist, getCurrentPlaylist } =
    useContext(DataContext);
  return (
    <div className="w-[100%] sm:h-[10%] h-[20%] flex sm:flex-row flex-col flex-wrap justify-around items-center ">
      <NavBarButton
        isDisabled={false}
        navigateAddress={"/"}
        text={"Search Songs"}
      />
      <NavBarButton
        isDisabled={currentSongIndex == null}
        navigateAddress={"/CurrentSong"}
        text={"Current Song"}
      />
      <NavBarButton
        isDisabled={false}
        navigateAddress={"/PlayLists"}
        text={"PlayLists"}
      />
      <NavBarButton
        isDisabled={currentPlaylist == null && getCurrentPlaylist() == null}
        navigateAddress={`/CurrentPlayList/${currentPlaylist?.name}`}
        text={"Current Playlist"}
      />
    </div>
  );
}

export default NavBar;
