import React, { useEffect, useState } from "react";
import VolumeIconSelector from "./VolumeIconSelector";

export default function VolumeBar({ audioRef }) {
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (audioRef && audioRef.current && audioRef.current.volume)
      audioRef.current.volume = volume / 100;
  }, [volume]);

  return (
    <section className="w-[200px] h-[10%] flex items-center justify-between">
      <input
        className="w-[85%] mx-2"
        onChange={(e) => setVolume(e.target.value)}
        value={volume}
        min={0.1}
        max={100}
        type="range"
      />
      <i className="w-[15%] aspect-square mx-2">
        <VolumeIconSelector volume={volume} />
      </i>
    </section>
  );
}
