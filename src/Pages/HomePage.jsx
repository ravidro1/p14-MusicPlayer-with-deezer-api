import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import NavBar from "../Components/NavBar/NavBar";
import Search from "../Components/Search";
import SongsListShow from "../Components/SongsListShow";
import { Loading } from "../Components/IconExport";

function HomePage() {
  const { searchResult } = useContext(DataContext);

  const [searchLoading, setSearchLoading] = useState(false);

  const [isInitSearchHappened, setIsInitSearchHappened] = useState(false);

  return (
    <main className="w-[100%] h-[100%] ">
      <NavBar />
      <Search
        setSearchLoading={setSearchLoading}
        setIsInitSearchHappened={setIsInitSearchHappened}
      />
      <section className="sm:h-[80%] h-[70%] flex justify-center items-center">
        {(isInitSearchHappened || searchResult?.data) &&
          (searchLoading ? (
            <div className="w-[80px] aspect-square animate-spin">
              <Loading />
            </div>
          ) : searchResult?.data?.length > 0 && searchResult?.data != null ? (
            <SongsListShow isInPlaylist={false} playlist={searchResult} />
          ) : searchResult?.data == null ? (
            <h1 className="text-red-500 text-3xl">
              Error Occurred During The Search
            </h1>
          ) : (
            <h1 className="text-white text-3xl">No Songs Found</h1>
          ))}
      </section>
    </main>
  );
}

export default HomePage;
