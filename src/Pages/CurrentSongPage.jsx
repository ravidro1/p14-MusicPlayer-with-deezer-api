import React, {useContext, useState} from "react";
import {DataContext} from "../App";
import NavBar from "../Components/NavBar";
import "./currentSongPage.css";

function CurrentSongPage(props) {
  const {currentSong} = useContext(DataContext);
  console.log(currentSong);

  const audio = new Audio(currentSong?.preview);

  let volume = 0.5;

  audio.volume = volume;

  function volumeChange(upOrDown) {
    if (upOrDown == "+") {
      if (!(volume + 0.05 > 1)) {
        volume += 0.05;
      } else {
        volume = 1;
      }
    } else {
      if (!(volume - 0.05 < 0)) {
        volume -= 0.05;
      } else {
        volume = 0;
      }
    }
    audio.volume = volume;
    console.log(volume);
  }

  return (
    <div className="main-currentSong-Page">
      <NavBar />
      {console.log(audio.volume)}
      <div className="all-content-currentSongPage">
        <div> *** current playlist *** </div>

        <img
          src={currentSong?.album?.cover_medium}
          alt={`${currentSong?.title} - not found picture`}
        />
        <div> Name: {currentSong?.title} </div>
        <div> artist: {currentSong?.artist?.name} </div>
        {/* <audio>
          <source src={currentSong?.preview} type={"audio/mpeg"} />
        </audio> */}

        <div onClick={() => audio.play()}> play </div>
        <div onClick={() => audio.pause()}> pause </div>
        <button onClick={() => volumeChange("+")}> + </button>
        <button onClick={() => volumeChange("-")}> - </button>
      </div>

      {/* <audio controls>
        <source src={currentSong?.preview} type={"audio/mpeg"} />
        Your browser does not support the audio element.
      </audio> */}
    </div>
  );
}

export default CurrentSongPage;
