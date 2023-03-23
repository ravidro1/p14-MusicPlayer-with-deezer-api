import React, {useContext, useState} from "react";
import {DataContext} from "../App";
import "./oneSong.css";

function OneSong({song, isInFavorite, index}) {
  const {
    songName,
    searchResult,

    setSearchResult,
    navigate,
    setCurrentSong,

    allPlaylistData,
    addPlaylist,
    updateListPlaylist,
    deletePlaylist,

    findPlaylist,
  } = useContext(DataContext);

  const [selectPlaylistValueID, setSelectPlaylistValueID] = useState(null);
  const [selectPlaylistValue, setSelectPlaylistValue] = useState(null);

  function onSongPick(thisSong) {
    setCurrentSong(thisSong);
    navigate("/CurrentSong");
  }

  function addToPlaylist() {
    // if (selectPlaylistValue != "") addPlaylist(selectPlaylistValue?.id, song);
    // if (selectPlaylistValue != "") updateListPlaylist(selectPlaylistValue?.id, {h: "selectPlaylistValue.listOfSong"} );
    if (selectPlaylistValueID != null) {
      console.log(selectPlaylistValueID);
      updateListPlaylist(selectPlaylistValueID, {
        h: "selectPlaylistValue.listOfSong",
      });
    }
    setSelectPlaylistValueID(null);
  }

  function removeFromPlaylist() {
    updateListPlaylist(selectPlaylistValue.id, {
      listOfSong: selectPlaylistValue.listOfSong.filter(
        (item, i) => index != i
      ),
    });
  }


  const setSelect = (data) => {
    console.log(data.target.value);
    const temp = findPlaylist(data.target.value)
    console.log(temp);

    // setSelectPlaylistValueID(data.target.value)
    // setSelectPlaylistValue(data.target.value)
  }

  return (
    <div className="main-oneSong-component">
      <div className="card">
        <img
          src={song.album.cover_medium}
          alt={`(${song.title}) - pic not found`}
        />
        <div> name: {song.title} </div>
        <div> artist: {song.artist.name} </div>
        <div> album: {song.album.title} </div>

        {!isInFavorite ? (
          <div>
            <select
              onChange={setSelect}
              name="playlist_select"
              id=""
            >
              <option value={""}> Select Playlist </option>
              {allPlaylistData?.map((playlist, index) => (
                <option key={index} value={playlist.id}>
                  {" "}
                  {playlist.name}{" "}
                </option>
              ))}
            </select>

            <div
              onClick={() => addToPlaylist()}
              className="favoriteButton-oneSong-Page"
            >
              {" "}
              ADD TO PLAYLIST{" "}
            </div>
          </div>
        ) : (
          <div
            onClick={() => removeFromPlaylist()}
            className="favoriteButton-oneSong-Page"
          >
            {" "}
            REMOVE FROM THIS PLAYLIST{" "}
          </div>
        )}

        <div
          onClick={() => onSongPick(song)}
          className="listenButton-oneSong-Page"
        >
          {" "}
          CLICK FOR LISTEN{" "}
        </div>
      </div>
    </div>
  );
}

export default OneSong;
