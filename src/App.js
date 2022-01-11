import './App.css';
import { useState, createContext } from 'react';
import Header from "./components/Header"
import Content from "./components/Content"

export const LanguageContext = createContext()

function App() {

  const [language, setLanguage] = useState("Hallo Welt")

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
    <div className="App">
      <Header />
      <Content/>
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
