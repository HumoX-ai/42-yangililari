import React from "react";

import FirstNav from "./components/First-Nav/FirstNav";
import MainTwo from "./components/Main-Two/MainTwo";
import MainOne from "./components/Main-One/MainOne";
import SecondNav from "./components/Second-Nav/SecondNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./components/Main-One/Slick/Article";
import dataNav from "./components/data/Data-main";
import Slick from "./components/Main-One/Slick/Slick";

function App() {
  return (
    <>
      <FirstNav />
      <SecondNav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Slick dataNav={dataNav} />} />
          <Route
            path="/qiziqarli/:id"
            element={<Article dataNav={dataNav} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
