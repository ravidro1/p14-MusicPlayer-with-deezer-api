import React, { useContext, useState } from "react";
import { DataContext } from "../App";

function Search(props) {
  const { fetch } = useContext(DataContext);

  const [searchValue, setSearchValue] = useState("");

  function SearchSongs() {
    fetch(searchValue);
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-center w-[100%] h-[10%]"
    >
      <input
        className="w-[40%] h-[60%] rounded-xl p-3 mx-4"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Song Name"
        type={"text"}
      />
      <button
        className="text-white h-[60%] p-3 bg-black  rounded-lg w-fit  "
        onClick={SearchSongs}
      >
        Search
      </button>{" "}
    </form>
  );
}

export default Search;
