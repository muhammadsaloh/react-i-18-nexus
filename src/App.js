import React, { useCallback } from "react";
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

      <FullScreen handle={handle}>
        <p>React full screen</p>
      </FullScreen>
    </div>
  );
}

export default App;
