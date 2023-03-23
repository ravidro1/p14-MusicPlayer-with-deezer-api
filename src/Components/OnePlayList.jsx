import React, { useContext } from 'react';
import { DataContext } from '../App';
import "./onePlayList.css"

function OnePlayList({item, index}) {

    const {
        songName,
        searchResult,
        favoriteList,
        setFavoriteList,
        setSearchResult,
        navigate,
        setCurrentSong,
        playLists,
        setPlayLists,

        addPlaylist,
        updateListPlaylist,
        deletePlaylist,
        allPlaylistData,
      } = useContext(DataContext);

    function removeFromPlaylists_list(){
        deletePlaylist(item.id)
      }

    return (
        <div style={{backgroundColor: `${item.color}`}} className='main-onePlayListPage'>
            <div> Name: {item.name} </div>
            <div> number of songs: {item.data?.length} </div>
            <div className='playlist-remove-Button-onPlayList-Page' onClick={removeFromPlaylists_list}> remove from playlist list </div>
        </div>
    );
}

export default OnePlayList;