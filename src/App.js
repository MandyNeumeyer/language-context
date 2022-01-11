import './App.css';
import { useState } from 'react';
import Header from "./components/Header"
import Content from "./components/Content"
import LanguageContext  from "./LanguageContext";

function App() {

  // context in echtzeit, dynamisch (stateful)
  const [language, setLanguage] = useState("Hallo Welt");

  // wir bauen getter uns setter in ein objekt ein, das wir dem provider übergeben können.
  const value ={ language, setLanguage}

  return (
    <LanguageContext.Provider value={value}>
    <div className="App">
      <Header />
      <Content/>
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
