import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import NavBarButton from "./NavBarButton";

function NavBar() {
  const { currentSongIndex, allPlaylists, navigate } = useContext(DataContext);
  return (
    <div className="w-[100%] h-[10%] flex justify-around items-center">
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
        isDisabled={allPlaylists?.length <= 0}
        navigateAddress={"/PlayLists"}
        text={"PlayLists:" + allPlaylists?.length}
      />
      <NavBarButton
        isDisabled={currentSongIndex == null}
        navigateAddress={"/CurrentPlayList"}
        text={"Current Playlist"}
      />
    </div>
  );
}

export default NavBar;
