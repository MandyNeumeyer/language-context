import './App.css';
import { useState } from 'react';
import Header from "./components/Header"
import Content from "./components/Content"
import { LanguageContext } from "./LanguageContext";

function App() {

  const [language, setLanguage] = useState("DE")

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
