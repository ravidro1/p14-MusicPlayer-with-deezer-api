import React from "react";
import { BackwardIcon, ForwardIcon, PauseIcon, PlayIcon } from "../IconExport";

export default function FlowControlBar({
  paused,
  playAndPause,
  changeCurrentSongIndex,
  playlist,
  songIndex,
}) {
  const isDisable = (isForward) => {
    if (playlist.length - 1 <= songIndex && isForward) return true;
    else if (0 >= songIndex && !isForward) return true;
    return false;
  };

  return (
    <section className="flex items-center w-[200px] h-[30%] justify-between">
      <ForwardAndBackwardButton
        component={"backward"}
        isDisabled={isDisable(false)}
        onClick={changeCurrentSongIndex}
      />

      <button className="w-[30%]" onClick={() => playAndPause()}>
        {paused ? <PlayIcon /> : <PauseIcon />}
      </button>

      <ForwardAndBackwardButton
        component={"forward"}
        isDisabled={isDisable(true)}
        onClick={changeCurrentSongIndex}
      />
    </section>
  );
}

const ForwardAndBackwardButton = ({ onClick, component, isDisabled }) => {
  const fadeColor = "#ffffff7e";
  const color = isDisabled ? fadeColor : "#fff";
  return (
    <button
      disabled={isDisabled}
      className="w-[20%] aspect-square"
      onClick={() => onClick(component == "forward" ? 1 : -1)}
    >
      {component == "forward" ? (
        <ForwardIcon color={color} />
      ) : (
        <BackwardIcon color={color} />
      )}
    </button>
  );
};
