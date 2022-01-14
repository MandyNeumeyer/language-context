import React from 'react'
import { useContext } from "react";
import {LanguageContext}  from "../LanguageContext";

const WelcomeMessage = () => {

    const [language] = useContext(LanguageContext);
    
    const messages = {
        DE:"Hallo Welt!",
        US:"Hello World!",
        TR:"Selam Dünya!",
        IR:"سلام دنیا!",
        FR:"Bonjour le monde!",
        SP:"Hola Mundo!",
        DU:"Hallo Wereld!"
    };
    return (
        <div className="msg">
            <h3>{messages[language]}</h3>
        </div>
    )
}

export default WelcomeMessage
