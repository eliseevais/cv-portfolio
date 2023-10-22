import React from "react";
import "./App.css";
import { ContainerWrapper } from "./components/ContainerWrapper";
import { HeaderAndMain } from "./layout/sections/main/HeaderAndMain";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { Testimony } from "./layout/sections/testimony/Testimony";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";
import { About } from "./layout/sections/about/About";

function App() {
  return (
    <ContainerWrapper>
      <HeaderAndMain />
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