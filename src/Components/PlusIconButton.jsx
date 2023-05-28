import React, { useState } from "react";
import { PlusIcon } from "./IconExport";

export default function PlusIconButton({ setIsPlaylistWindowOpen }) {
  const [hoverButton, setHoverButton] = useState(false);
  return (
    <button
      onMouseEnter={() => setHoverButton(true)}
      onMouseLeave={() => setHoverButton(false)}
      onClick={() => setIsPlaylistWindowOpen(true)}
      className="w-[30px] aspect-square p-1 border-2 rounded-lg flex justify-center items-center hover:bg-white bg-transparent"
    >
      <PlusIcon color={hoverButton ? "#000" : "#fff"} />
    </button>
  );
}
