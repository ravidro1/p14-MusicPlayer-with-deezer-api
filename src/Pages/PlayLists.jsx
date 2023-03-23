import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {DataContext} from "../App";
import NavBar from "../Components/NavBar";
import OnePlayList from "../Components/OnePlayList";
import "./playLists.css"

function PlayLists(props) {
  const {
    songName,
    setSongName,
    searchResult,
    setSearchResult,

    navigate,
    currentSong,
    setCurrentSong,




    addPlaylist,
    updateListPlaylist,
    deletePlaylist,
    allPlaylistData,
  } = useContext(DataContext);

  const [clickOnPlayListAddition, setClickOnPlayListAddition] = useState(false);

  const {register, reset, handleSubmit} = useForm();


  // function clearListOfPlayList(){
  //   setPlayLists([]);
  // }

  function createNewPlayList(data) {


    let isTheNameExist = false;

    allPlaylistData.map((onePlaylist) => {
      if (onePlaylist.name == data.playlistName) isTheNameExist = true;
    })


    if (!isTheNameExist) {
      addPlaylist({name: data.playlistName, data: [], color: data.color })
      reset();
    } else {
      alert("The Name Is Already Exist!!!");
    }
  }

  return (
    <div className="main-playlists-page">
      <NavBar />

      <div className="all-content-playLists-page">
      {/* <div onClick={clearListOfPlayList} className="clearList-button-playlist-page"> clear list </div> */}
      <form onSubmit={handleSubmit(createNewPlayList)}>
        <input type={"text"} {...register("playlistName")} />
        <input defaultValue={"#ffffff"} type={"color"} {...register("color")} />
        <input type={"submit"} />
      </form>
      </div>

        <div className="playlist-list-show-playlistPage">
            {allPlaylistData?.map((playlist,index) => <OnePlayList key={index} item={playlist} index={index}/>)}

        </div>

    </div>
  );
}

export default PlayLists;
