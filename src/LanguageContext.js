// Wir importieren createContext von react.
import { createContext } from 'react';

// Wir initialisieren unseren context, und stellen den initial/oder defaultwert auf "null".
const LanguageContext = createContext();

// Wir exportieren unseren neuen context in App.js um ihn dort um als Elternteil um alle Kinder der App.js zu legen.
export default LanguageContext 