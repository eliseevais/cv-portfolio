import React from "react";
import "./App.css";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";
import { About } from "./layout/sections/about/About";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { MyParticles } from "./components/myParticles/MyParticles";
import { GoTopBtn } from "./components/goTopBtn/GotTopBtn";

function App() {
  return (
    <div>
      {/* <MyParticles /> */}
      <Header />
      <Main />
      <About />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;
