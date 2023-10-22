import React from "react";
import "./App.css";
import { ContainerWrapper } from "./components/ContainerWrapper";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { Testimony } from "./layout/sections/testimony/Testimony";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";
import { About } from "./layout/sections/about/About";

function App() {
  return (
    <ContainerWrapper>
      <Header />
      <Main />
      <About />
      <Skills />
      <Works />
      <Testimony />
      <Contacts />
      <Footer />
    </ContainerWrapper>
  );
}

export default App;