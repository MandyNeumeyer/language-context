import React from 'react'
import LanguageChooser from './LanguageChooser'

const Header = () => {
    return (
        <div className="header">
            <p>Please select your language:</p>
            <LanguageChooser />
        </div>
    )
}

export default Header
