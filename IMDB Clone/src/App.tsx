import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";

import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";

import { AppContext } from "./context/AppContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchList] = useState([]);

  const handleAddtoWatchlist = (movieObj:string) => {
    const newWatchList = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  const handleRemoveFromWatchlist = (movieObj) => {
    const filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    setWatchList(filteredWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
    console.log(filteredWatchlist);
  };

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
     <AppContext.Provider value={{watchlist , handleAddtoWatchlist , handleRemoveFromWatchlist , setWatchList}}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies/>
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <WatchList/>
            }
          />
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;