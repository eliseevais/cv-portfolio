import React from "react";
import "./App.css";
import { Header } from "./layout/header/Header.styled";
import { Main } from "./layout/sections/main/Main";
import styled from "styled-components";

function App() {
  return (
    <AppBox className="App">
      <Header />
      <Main/>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  width: 1440px;
  height: 100vh;
  margin: 0 auto;
`
