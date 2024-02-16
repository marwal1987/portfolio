import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
  theme: "dark",
  userPreferences: {
    fontSize: "large",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "UPDATE_USER_PREFERENCES":
      return {
        ...state,
        userPreferences: action.payload,
      };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
