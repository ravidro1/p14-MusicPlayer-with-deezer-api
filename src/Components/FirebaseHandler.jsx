import React, {useEffect, useState} from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import {database} from "./FirebaseConfig";

function FirebaseHandler(props) {
  const [render, setRender] = useState(false);
  const [allPlaylistData, setAllPlaylistData] = useState([]);
  const playlistRef = collection(database, "playLists");

  const deletePlaylist = async (id) => {
    const onePlaylistRef = doc(database, "playLists", id);
    await deleteDoc(onePlaylistRef);
    setRender(!render);
  };

  const addPlaylist = async (newPlaylist) => {
    await addDoc(playlistRef, newPlaylist);
    setRender(!render);
  };

  const updateListPlaylist = async (id, fieldUpdate) => {
    const onePlaylistRef = doc(database, "playLists", id);
    await updateDoc(onePlaylistRef, fieldUpdate);
    setRender(!render);
  };

  async function findPlaylist(id) {
    const onePlaylistRef = doc(database, "playLists", id);
    const thisDoc = await getDoc(onePlaylistRef);
    console.log(thisDoc.data());
    const findById = thisDoc.data();
    return findById;
  }


  useEffect(() => {
    const getDataFromDatabase = async () => {
      const data = await getDocs(playlistRef);
      setAllPlaylistData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getDataFromDatabase();
  }, [render]);

  return {
    addPlaylist,
    findPlaylist,
    updateListPlaylist,
    deletePlaylist,
    allPlaylistData,
  };
}

export default FirebaseHandler;
