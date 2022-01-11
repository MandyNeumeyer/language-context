import React from 'react'
import { useContext } from "react";
import LanguageContext  from "../LanguageContext";

const WelcomeMessage = () => {

    const language = useContext(LanguageContext);


    return (
        <div>
            <h1>{language.language}</h1>
        </div>
    )
}

export default WelcomeMessage
