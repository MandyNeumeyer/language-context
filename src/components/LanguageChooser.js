import React from 'react'
import { useContext } from "react";
import {LanguageContext}  from "../App.js";

const LanguageChooser = () => {
  const [language, setLanguage] = useContext(LanguageContext);


    function handleChange(event) {
        setLanguage(event.target.value);
      }
    

    return (
        <div>
          <select value={language} onChange={handleChange}>
            <option value="Hello World">English</option>
            <option value="Hallo Welt">German</option>
          </select>
        </div>
    )
}

export default LanguageChooser
