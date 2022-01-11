import React from 'react'
import { useContext } from "react";
import {LanguageContext}  from "../App";

const WelcomeMessage = () => {

    const [language]= useContext(LanguageContext);


    return (
        <div>
            <h3>{language}</h3>
        </div>
    )
}

export default WelcomeMessage
