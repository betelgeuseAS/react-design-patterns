/*
The provider pattern is very useful for data management as it utilizes the context API to pass data through the
application's component tree. This pattern is an effective solution to prop drilling, which has been a common concern
in react development.

To implement the provider pattern, we will first create a Provider Component. A Provider is a higher-order component
that the Context object provides to us. We can construct a Context object by utilizing the createContext method
provided by React.
*/

import { createContext } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/*
After creating the provider, we will enclose components dependent on the data from context API with the created
Provider Component.

To obtain the data from context API, we call useContext hook, which accepts a context as a parameter (in this case,
ThemeContext).
*/

import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "../context";

const HeaderSection = () => {
  <ThemeProvider>
    <TopNav />
  </ThemeProvider>;
};

const TopNav = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}>
      ...
    </div>
  );
};
