import React, { useContext, useEffect, useState } from "react";

export default function ProgressBar({ audioRef, progress }) {
  const getProgressInFormatTime = (seconds) => {
    const minutes = Math.floor(Math.floor(seconds) / 60);

    const newSeconds = seconds - 60 * minutes;

    const checkIfNumberIsTwoChar = (number) => {
      if (String(number).length <= 1) return "0" + number;
      return number;
    };

    return (
      checkIfNumberIsTwoChar(minutes) +
      ":" +
      checkIfNumberIsTwoChar(Math.floor(newSeconds))
    );
  };

  const changeProgressBar = (value) => {
    audioRef.current.currentTime = value;
  };

  return (
    <section className=" w-[100%] h-[100%] flex justify-between items-center">
      <p className="w-fit">{getProgressInFormatTime(progress)}</p>
      <input
        id="progressBar"
        className="w-[65%]"
        onChange={(e) => changeProgressBar(e.target.value)}
        value={progress}
        min={0}
        max={Math.floor(
          isNaN(audioRef?.current?.duration) ? 100 : audioRef?.current?.duration
        )}
        type="range"
      />
      <p className="w-fit">
        {getProgressInFormatTime(
          Math.floor(
            isNaN(audioRef?.current?.duration) ? 0 : audioRef?.current?.duration
          )
        )}
      </p>
    </section>
  );
}
