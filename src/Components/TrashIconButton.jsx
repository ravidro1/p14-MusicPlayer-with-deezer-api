import React, { useState } from "react";
import { Trash } from "./IconExport";

export default function TrashIconButton({ onClick }) {
  const [hoverTrash, setHoverTrash] = useState(false);

  return (
    <button
      onMouseEnter={() => setHoverTrash(true)}
      onMouseLeave={() => setHoverTrash(false)}
      onClick={() => onClick()}
      className="h-[80%] aspect-square z-50 p-1"
    >
      <Trash color={hoverTrash ? "red" : "white"} />
    </button>
  );
}
