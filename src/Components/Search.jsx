import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import axios from "axios";

function Search({ setSearchLoading, setIsInitSearchHappened }) {
  const { setSearchResult } = useContext(DataContext);

  const [searchValue, setSearchValue] = useState("");

  function SearchSongs() {
    setIsInitSearchHappened(true);
    fetch(searchValue);
  }

  const fetch = (songName) => {
    try {
      setSearchLoading(true);
      if (songName != "") {
        axios
          .request({
            method: "GET",
            url: process.env.REACT_APP_DEEZER_API,
            params: { q: songName },
            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
              "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST,
            },
          })
          .then((res) => {
            if (res?.data?.error?.type == "Exception") fetch(songName);
            else {
              setSearchResult({ ...res.data, name: "Search" });
            }
            setSearchLoading(false);
          });
      } else setSearchLoading(false);
    } catch (error) {
      console.log(error);
      setSearchLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-center items-center w-[100%] h-[10%]"
    >
      <input
        className="sm:w-[40%] w-[65%] h-[60%] rounded-xl p-3 mx-2"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Song Name"
        type={"text"}
      />
      <button
        className="text-white h-[60%] px-5 bg-black  rounded-lg w-fit mx-2 "
        onClick={SearchSongs}
      >
        Search
      </button>{" "}
    </form>
  );
}

export default Search;
