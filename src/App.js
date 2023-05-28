import { createContext, useEffect } from "react";
import Data from "./Data";
import { Route, Routes } from "react-router-dom";
import {
  CurrentPlaylistPage,
  CurrentSongPage,
  DefaultPage,
  HomePage,
  LoginPage,
  SignUpPage,
} from "./Pages/export-pages";
import "./style.css";
import PlaylistsPage from "./Pages/PlaylistsPage";

export const DataContext = createContext();

function App() {
  const value = Data();

  return (
    <DataContext.Provider value={value}>
      <div className="w-[100vw] h-[100vh] bg overflow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/CurrentSong" element={<CurrentSongPage />} />
          <Route path="/PlayLists" element={<PlaylistsPage />} />
          <Route path="/CurrentPlayList" element={<CurrentPlaylistPage />} />
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
