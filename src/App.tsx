import React from "react";
import { Lighter, MyInfo, Projects, Skills } from "./components/organisms";
import { GlobalStyle } from "./globalStyles";

export function App() {
  return (
    <>
      <GlobalStyle />

      <Lighter />

      <MyInfo />
      <Skills />
      <Projects />
    </>
  );
}
