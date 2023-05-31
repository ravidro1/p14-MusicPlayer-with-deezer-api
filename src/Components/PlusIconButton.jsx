import React, { useState } from "react";
import { PlusIcon } from "./IconExport";

export default function PlusIconButton({ setIsPlaylistWindowOpen }) {
  const [hoverButton, setHoverButton] = useState(false);
  return (
    <button
      onMouseEnter={() => setHoverButton(true)}
      onMouseLeave={() => setHoverButton(false)}
      onClick={() => setIsPlaylistWindowOpen(true)}
      className="h-[80%] aspect-square p-1 border-2 rounded-lg flex justify-center items-center hover:bg-white bg-transparent z-30 "
    >
      <PlusIcon color={hoverButton ? "#000" : "#fff"} />
    </button>
  );
}
