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
      <div className="w-[100%] h-[90%] flex flex-col items-center justify-between">
        <section className="h-[55%] aspect-square">
          <img
            className=""
            src={getCurrentSongDetails()?.album?.cover_big}
            alt={`${getCurrentSongDetails()?.title} - not found picture`}
          />
        </section>
        <section className="h-[45%] flex flex-col justify-between items-center">
          <div className="text-4xl p-3 h-[20%]">
            {" "}
            {getCurrentSongDetails()?.title}{" "}
          </div>
          <div className="text-2xl p-3  h-[15%]">
            {" "}
            {getCurrentSongDetails()?.artist?.name}{" "}
          </div>

          <FlowControlBar
            playlist={getCurrentPlaylist()?.data}
            songIndex={currentSongIndex}
            changeCurrentSongIndex={changeCurrentSongIndex}
            paused={audioRef?.current?.paused}
            isPlaySong={isPlaySong}
            setIsPlaySong={setIsPlaySong}
          />

          <ProgressBar audioRef={audioRef} progress={progress} />
          <VolumeBar audioRef={audioRef} />

          <PlusIconButton setIsPlaylistWindowOpen={setIsPlaylistWindowOpen} />
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
