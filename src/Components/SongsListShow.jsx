import React, {useContext} from "react";
import OneSong from "./OneSong";
import "./searchResult.css";

function SongsListShow({isInFavorite,arrayOfSong}) {



  return (
    <div className="main-SearchResult-Page">
      {console.log(arrayOfSong.data)}
      {arrayOfSong?.map((item, index) => <OneSong key={index} index={index} song={item} isInFavorite={isInFavorite}/>)}
    </div>
  );
}

export default SongsListShow;
