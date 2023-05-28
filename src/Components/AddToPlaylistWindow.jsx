import React from "react";

export default function AddToPlaylistWindow({
  isPlaylistWindowOpen,
  setIsPlaylistWindowOpen,
}) {
  const isParentClick = (e) => {
    console.log(e);
    setIsPlaylistWindowOpen(false);
  };
  return (
    <div
      datatype="parent"
      onClick={isParentClick}
      className="w-[100vw] h-[100vh] bg-[#00000063] backdrop-blur-md fixed flex justify-center items-center"
    >
      <div className="w-[40%] h-[55%] text-black rounded-lg overflow-hidden">
        <h1 className="w-[100%] h-[10%] bg-black text-white flex justify-center items-center text-2xl border-b">
          Playlists:{" "}
        </h1>
        <div className="w-[100%] h-[90%] bg-black text-white overflow-auto">
          {}
        </div>
      </div>
    </div>
  );
}
