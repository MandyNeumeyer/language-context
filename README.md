# Language Chooser

## Übersicht
Von der unten beschriebenen Anwendung sollen zwei Varianten erstellt werden:
1. nur mit `useState`
2. zusätzlich mit `createContext`/`useContext`

Veranschauliche den Informationsfluss der beiden Programme auf Zettel und Papier und vergleiche.
Beantworte Fragen mit Hilfe der Diagramme:
- Welche Information wird benötigt?
- Wo entsteht Information?
- Wer benötigt die Information?
- Wie/wo wird Information an Unterkomponenten weitergegeben, bzw. zugänglich gemacht?
- Was passiert vom Auswählen einer anderen Sprache bis zum Anzeigen der entsprechenden Willkommens-Nachricht?

---
## Anwendung
Erstelle eine React-Anwendung.

Sie soll eine Dropdown-Liste anzeigen, in der der Nutzer aus verschiedenen Sprachen (DEU, ENG) auswählen kann.
Zusätzlich soll abhängig von der ausgewählten Sprache eine Willkommensnachricht angezeigt werden:
- DEU: "Hallo Welt!"
- ENG: "Hello World!"

Strukturiere die Anwendung in die folgenden Komponenten (engl. 'components'):
- `Header` mit einer Unterkomponente:
  - `LanguageChooser` mit der Dropdown-Liste
- `Content` mit einer Unterkomponente:
  - `WelcomeMessage`, die die Willkommensnachricht entsprechend zur ausgewählten Sprache anzeigt.

Die angezeigte Nachricht soll sich ändern, wenn der Nutzer eine andere Sprache auswählt.
