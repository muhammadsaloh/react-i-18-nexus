import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const handle = useFullScreenHandle();

  const { t } = useTranslation();

  return (
    <div className="App">
      <p>{t("welcome_msg")}</p>
      <button onClick={handle.enter}>Enter fullscreen</button>

      <select onChange={(e) => {
        window.location.href = `http://localhost:3000/?lng=${e.target.value}`;
      }}>
        <option disabled value="1">Tilni tanlang</option>
        <option value="en">Eng</option>
        <option value="ru">Rus</option>
        <option value="uz">Uzb</option>
      </select>
      <FullScreen handle={handle}>
        <p>React full screen</p>
      </FullScreen>
    </div>
  );
}

export default App;
