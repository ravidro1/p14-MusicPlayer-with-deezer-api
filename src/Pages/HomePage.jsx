import React, {useContext} from "react";
import {DataContext} from "../App";
import Fetch from "../Components/Fetch";
import NavBar from "../Components/NavBar";
import Search from "../Components/Search";
import SongsListShow from "../Components/SongsListShow";
import "./homePage.css";

function HomePage(props) {
  const {songName, searchResult, setSearchResult, navigate, setCurrentSong} =
    useContext(DataContext);

  return (
    <div className="main-HomePage">
      <NavBar />
      <Search />
      <Fetch />
      {searchResult?.data && (
        <SongsListShow arrayOfSong={searchResult?.data} isInFavorite={false} />
      )}
    </div>
  );
}

export default HomePage;
