import "./App.css";
import {createContext, useContext} from "react";
import Data from "./Data";
import {NavLink, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DefaultPage from "./Pages/DefaultPage";
import CurrentSongPage from "./Pages/CurrentSongPage";
import PlayLists from "./Pages/PlayLists";

export const DataContext = createContext();

function App() {
  const value = Data();

  return (
    <DataContext.Provider value={value}>
      <div className="main-App-Page">
        

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/CurrentSong" element={<CurrentSongPage />}/>
          <Route path="/PlayLists" element={<PlayLists />}/>
          <Route path="*" element={<DefaultPage />}/>
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
