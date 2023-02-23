import React, { useState, useEffect } from "react";
import FirstNav from "./components/First-Nav/FirstNav";
import SecondNav from "./components/Second-Nav/SecondNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./components/Main-One/Slick/Article";
import dataNav from "./components/data/Data-main";
import Slick from "./components/Main-One/Slick/Slick";
import { BallTriangle } from "react-loader-spinner";
import { Box } from "@mui/system";
import styled, { keyframes } from "styled-components";
import MainTwo from "./components/Main-Two/MainTwo";

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Wrapper = styled(Box)`
  position: fixed;
  display: grid;
  place-items: center;
  inset: 0;
  animation: ${fadeIn} 10s ease-in-out forwards;
  background: linear-gradient(to right, #00467f, #a5cc82);
`;
const Color = styled(Box)`
  background: linear-gradient(to right, #2b5876, #4e4376);
  color: white;
`;

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  }, []);

  return (
    <>
      {!loaded ? (
        <Wrapper>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </Wrapper>
      ) : (
        <Color
          sx={{
            backgroundColor: "linear-gradient(to right, #00d2ff, #3a7bd5)",
          }}
        >
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
          <MainTwo />
        </Color>
      )}
    </>
  );
}

export default App;
