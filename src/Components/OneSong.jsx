import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import PlusIconButton from "./PlusIconButton";
import AddToPlaylistWindow from "./AddToPlaylistWindow";
import { clickParent } from "./GlobalFunctions";
import { Trash } from "./IconExport";

function OneSong({ song, index, isInPlaylist, playlist }) {
  const {
    navigate,
    setCurrentSongIndex,
    allPlaylists,
    setAllPlaylists,
    setCurrentPlaylistIndex,
    currentSongIndex,

    currentPlaylistIndex,
    playAndReset,
  } = useContext(DataContext);

  const [isPlaylistWindowOpen, setIsPlaylistWindowOpen] = useState(false);

  function onSongPick(thisSong) {
    setCurrentPlaylistIndex(
      allPlaylists.findIndex((item) => item.name == playlist.name)
    );
    setCurrentSongIndex(thisSong);
    playAndReset();
    navigate("/CurrentSong");
  }

  const deleteFromPlaylist = () => {
    const copyAllPlaylists = [...allPlaylists];

    const thisPlaylistIndex = copyAllPlaylists.findIndex(
      (item) => playlist?.name == item?.name
    );

    copyAllPlaylists[thisPlaylistIndex] = {
      ...copyAllPlaylists[thisPlaylistIndex],
      data: copyAllPlaylists[thisPlaylistIndex].data.filter(
        (item) => item?.id != song?.id
      ),
    };
    setAllPlaylists(copyAllPlaylists);

    if (thisPlaylistIndex == currentPlaylistIndex) {
      if (copyAllPlaylists[thisPlaylistIndex].data.length > 0) {
        let newCurrentSongIndex = currentSongIndex - 1;
        if (newCurrentSongIndex < 0) newCurrentSongIndex = 0;
        setCurrentSongIndex(newCurrentSongIndex);
      } else {
        setCurrentSongIndex(null);
      }
    }
  };

  return (
    <>
      {isPlaylistWindowOpen && (
        <AddToPlaylistWindow
          isPlaylistWindowOpen={isPlaylistWindowOpen}
          setIsPlaylistWindowOpen={setIsPlaylistWindowOpen}
          item={song}
        />
      )}
      <div className="sm:block flex justify-between sm:w-[250px] sm:h-[400px] w-[90%] aspect-[7/2]  bg-[#000000] rounded-xl overflow-hidden sm:m-5 m-2 songHoverAnimation cursor-pointer relative">
        {/* <div
          data-value="parent"
          onClick={(e) => {
            if (clickParent(e)) onSongPick(index);
          }}
          className="absolute w-full h-full z-20 left-0 top-0"
        /> */}
        <img
          src={song?.album?.cover_medium}
          alt={`(${song?.title}) - pic not found`}
          className="sm:w-[250px] sm:h-[auto] h-[100%] sm:max-w-[100%] sm:aspect-square max-w-[30%]"
        />

        <div className="flex sm:flex-col sm:justify-center items-center justify-between sm:p-2 sm:h-[150px] sm:w-[auto] w-[70%] px-2">
          <section className="sm:w-[100%] sm:h-[60%] w-[70%] h-[100%] flex flex-col justify-around">
            <div className="text-white text-center text-xl sm:h-[65%] overflow-ellipsis overflow-hidden sm:w-[100%]">
              {song?.title}
            </div>
            <div className="text-white text-center text-base sm:h-[35%] overflow-ellipsis overflow-hidden sm:w-[100%]">
              {song?.artist?.name}
            </div>
          </section>

          <section className="w-[30%] sm:h-[40%] flex justify-center items-center">
            {isInPlaylist && playlist?.name != "Search" ? (
              <button
                onClick={() => deleteFromPlaylist()}
                className="sm:h-[10%] aspect-square z-50"
              >
                <Trash />
              </button>
            ) : (
              <PlusIconButton
                setIsPlaylistWindowOpen={setIsPlaylistWindowOpen}
              />
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default OneSong;
