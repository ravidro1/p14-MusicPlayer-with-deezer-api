import React, { useEffect, useRef, useState } from "react";
import FlowControlBar from "./FlowControlBar";
import ProgressBar from "./ProgressBar";
import { PlusIcon } from "../IconExport";
import VolumeBar from "./VolumeBar";
import PlusIconButton from "../PlusIconButton";

export default function CurrentSongComponentsHub({
  currentSongDetails,
  currentSongIndex,
  setIsPlaylistWindowOpen,
  changeCurrentSongIndex,
  playlist,
}) {
  const [isPlaySong, setIsPlaySong] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();
  const animationRef = useRef();

  const playAndPause = () => {
    if (!isPlaySong) {
      setIsPlaySong(true);
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      setIsPlaySong(false);
      audioRef.current.pause();

      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBarRef.current.value = audioRef.current.currentTime;
    setProgress(progressBarRef.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={currentSongDetails?.preview} />

      <div className="w-[100%] h-[90%] flex flex-col items-center justify-between">
        <section className="h-[55%] aspect-square">
          <img
            className=""
            src={currentSongDetails?.album?.cover_big}
            alt={`${currentSongDetails?.title} - not found picture`}
          />
        </section>
        <section className="h-[45%] flex flex-col justify-between items-center">
          <div className="text-4xl p-3 h-[20%]">
            {" "}
            {currentSongDetails?.title}{" "}
          </div>
          <div className="text-2xl p-3  h-[15%]">
            {" "}
            {currentSongDetails?.artist?.name}{" "}
          </div>

          <FlowControlBar
            playlist={playlist.data}
            songIndex={currentSongIndex}
            changeCurrentSongIndex={changeCurrentSongIndex}
            paused={audioRef?.current?.paused}
            playAndPause={playAndPause}
          />

          <ProgressBar
            audioRef={audioRef}
            progressBarRef={progressBarRef}
            progress={progress}
          />
          <VolumeBar audioRef={audioRef} />

          <PlusIconButton setIsPlaylistWindowOpen={setIsPlaylistWindowOpen} />
        </section>
      </div>
    </>
  );
}
