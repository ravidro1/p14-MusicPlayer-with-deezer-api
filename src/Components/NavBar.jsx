import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {DataContext} from "../App";
import "./navBar.css";

function NavBar(props) {
  const {currentSong, allPlaylistData} = useContext(DataContext);

  return (
    <div className="main-navBar-Page">
      <NavLink to={"/"}>
        <button className="navBar-buttons-App-Page"> Search song </button>
      </NavLink>

      {currentSong && (
        <NavLink to={"/CurrentSong"}>
          <button className="navBar-buttons-App-Page"> Current song </button>
        </NavLink>
      )}

      <NavLink to={"/PlayLists"}>
        <button className="navBar-buttons-App-Page">
          {" "}
          PlayLists: {allPlaylistData?.length}{" "}
        </button>
      </NavLink>

      <NavLink to={"/PlayLists"}>
        <button className="navBar-buttons-App-Page">
          {" "}
          current playlist
        </button>
      </NavLink>
    </div>
  );
}

export default NavBar;
