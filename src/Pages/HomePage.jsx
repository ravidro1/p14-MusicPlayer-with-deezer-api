import React, { useContext } from "react";
import { DataContext } from "../App";
import NavBar from "../Components/NavBar/NavBar";
import Search from "../Components/Search";
import SongsListShow from "../Components/SongsListShow";

function HomePage() {
  const { searchResult } = useContext(DataContext);

  return (
    <main className="w-[100%] h-[100%] ">
      <NavBar />
      <Search />
      <section className="h-[80%]">
        <SongsListShow arrayOfSong={searchResult?.data} />
      </section>
    </main>
  );
}

export default HomePage;
