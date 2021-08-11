import React from "react"
import './App.css';
import { useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {t("welcome_msg")}
        </p>
      </header>
    </div>
  );
}

export default App;
