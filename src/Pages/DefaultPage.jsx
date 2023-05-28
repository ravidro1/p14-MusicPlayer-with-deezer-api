import React, { useContext } from "react";
import { DataContext } from "../App";

function DefaultPage() {
  const { navigate } = useContext(DataContext);
  return (
    <div className="w-full h-full flex justify-around items-center flex-col">
      <section className="flex justify-center items-center flex-col">
        <h1 className="text-9xl text-white">
          <strong> 404 </strong>
        </h1>
        <h2 className="text-8xl text-white">The Page Not Found</h2>
      </section>
      <button
        onClick={() => navigate("/")}
        className="text-xl text-white p-3 bg-black rounded-lg"
      >
        {" "}
        GO BACK TO HOME PAGE
      </button>
    </div>
  );
}

export default DefaultPage;
