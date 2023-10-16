import React from "react";
import "./App.css";
import { Header } from "./layout/header/Header.styled";
import { Main } from "./layout/sections/main/Main";
import styled from "styled-components";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { Testimony } from "./layout/sections/testimony/Testimony";
import { Contacts } from "./layout/sections/contacts/Contacts.styled";
import { Footer } from "./layout/footer/Footer.styled";

function App() {
  return (
    <AppBox className="App">
      <Header />
      <Main/>
      <Skills />
      <Works />
      <Testimony />
      <Contacts />
      <Footer />
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
`
