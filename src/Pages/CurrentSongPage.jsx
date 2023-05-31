import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import NavBar from "../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

import AddToPlaylistWindow from "../Components/AddToPlaylistWindow";
import FlowControlBar from "../Components/CurrentSongPage/FlowControlBar";
import ProgressBar from "../Components/CurrentSongPage/ProgressBar";
import VolumeBar from "../Components/CurrentSongPage/VolumeBar";
import PlusIconButton from "../Components/PlusIconButton";

function CurrentSongPage(props) {
  const {
    currentSongIndex,
    audioRef,
    changeCurrentSongIndex,

    getCurrentPlaylist,
    getCurrentSongDetails,

    progress,

    isPlaySong,
    setIsPlaySong,
  } = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (getCurrentPlaylist() == null || currentSongIndex == null) navigate("/");
  }, [getCurrentPlaylist(), currentSongIndex]);

  const [isPlaylistWindowOpen, setIsPlaylistWindowOpen] = useState(false);

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center-center text-white">
      <NavBar />
      <div className="w-[100%] sm:h-[90%] h-[80%] flex flex-col items-center justify-between">
        <section className="h-[55%] w-[100%] flex justify-center ">
          <img
            className="max-w-[500px] aspect-square w-[100%] "
            src={getCurrentSongDetails()?.album?.cover_big}
            alt={`${getCurrentSongDetails()?.title} - not found picture`}
          />
        </section>
        <section className="h-[45%] w-[100%] flex flex-col justify-between items-center">
          <div className="sm:text-4xl text-2xl  h-[20%] flex justify-between items-center">
            {" "}
            {getCurrentSongDetails()?.title}{" "}
          </div>
          <div className="sm:text-2xl text-xl  h-[15%] flex justify-between items-center">
            {" "}
            {getCurrentSongDetails()?.artist?.name}{" "}
          </div>

          <div className="w-[60%] max-w-[450px] h-[20%] flex justify-between items-center">
            <FlowControlBar
              playlist={getCurrentPlaylist()?.data}
              songIndex={currentSongIndex}
              changeCurrentSongIndex={changeCurrentSongIndex}
              paused={audioRef?.current?.paused}
              isPlaySong={isPlaySong}
              setIsPlaySong={setIsPlaySong}
            />
          </div>
          <div className=" w-[95%] h-[15%] max-w-[300px] flex justify-between items-center">
            <ProgressBar audioRef={audioRef} progress={progress} />
          </div>
          <div className="max-w-[220px] w-[80%] h-[15%] flex justify-between items-center">
            <VolumeBar audioRef={audioRef} />
          </div>

          <div className="h-[15%] flex justify-between items-center">
            <PlusIconButton setIsPlaylistWindowOpen={setIsPlaylistWindowOpen} />
          </div>
        </section>
      </div>
      {isPlaylistWindowOpen && (
        <AddToPlaylistWindow
          item={getCurrentSongDetails()}
          isPlaylistWindowOpen={isPlaylistWindowOpen}
          setIsPlaylistWindowOpen={setIsPlaylistWindowOpen}
        />
      )}
    </div>
  );
}

export default CurrentSongPage;
