import React, { useContext } from "react";
import { DataContext } from "../../App";

export default function NavBarButton({ text, navigateAddress, isDisabled }) {
  const { navigate } = useContext(DataContext);

  return (
    <button
      style={{
        opacity: isDisabled ? 0.5 : 1,
        cursor: isDisabled ? "not-allowed" : "",
      }}
      disabled={isDisabled}
      onClick={() => navigate(navigateAddress)}
      className={
        "text-black bg-[#ffffff6b]  backdrop-blur-sm p-3  rounded-lg sm:w-fit w-[45%] sm:h-[60%] h-[40%] flex justify-center items-center " +
        (!isDisabled && "hover:bg-[#ffffffa5]")
      }
    >
      {text}
    </button>
  );
}
// text-white bg-black
