import React, { useContext } from "react";
import { DataContext } from "../../App";

export default function NavBarButton({ text, navigateAddress, isDisabled }) {
  const { navigate } = useContext(DataContext);

  return (
    <button
      style={{ opacity: isDisabled ? 0.75 : 1 }}
      disabled={isDisabled}
      onClick={() => navigate(navigateAddress)}
      className="text-white p-3 bg-black rounded-lg w-fit h-fit"
    >
      {text}
    </button>
  );
}
