
# :cartwheeling: Exercise 


## :de::argentina::us::south_africa: Create a language chooser :iran::hungary::poland::syria:

---
### Task

- Create a React App, with a dropdown-list, where the user can choose between different languages,
e.g. (GER, ENG, your mother tongue...). Your WelcomeMessage component needs to show the message in the language, the user has choosen.

  - GER: "Hallo Welt!"
  - ENG: "Hello World!"

- if the user changes the language settings, the message should be updated accordingly
Please solve the exercise by using `useContext`.

- style to your liking

---

**structure your app as follows:**

- `App` has Header and Content as children
  - `Header`
  - `Content`

- `Header` has LanguageChooser as a child:
  - `LanguageChooser` which has a dropdown-list
- `Content` has WelcomeMessage as a child:
  - `WelcomeMessage` which shows a Welcome Message in the choosen language

---

![](language-setter.gif)

---

### Questions

- Think about, how you would be able to solve the same exercise, by only using the useState hook?
- Which difference are you noticing about `useState` and `useContext`?





