import { useTheme } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { state, dispatch } = useTheme();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const handleFontSizeChange = (e) => {
    const fontSize = e.target.value;
    dispatch({
      type: "UPDATE_USER_PREFERENCES",
      payload: { ...state.userPreferences, fontSize },
    });
  };

  const handleAnimations = () => {
    dispatch({
      type: "UPDATE_USER_PREFERENCES",
      payload: {
        ...state.userPreferences,
        reduceAnimations: !state.userPreferences.reduceAnimations,
      },
    });
  };

  const baseStyle =
    "p-2 bg-gradient-to-b from-emerald-700 to-emerald-900 dark:text-white text-md text-stone-100 rounded-lg cursor-pointer drop-shadow-lg hover:shadow-xl  active:translate-y-1 border-b-[4px] active:border-b-[0px] border-emerald-800 transition-all duration-100";

  return (
    <div className="p-4 sm:p-8 lg:p-12 flex flex-col lg:flex-row justify-evenly items-center bg-stone-100 dark:bg-gray-800 gap-12">
      <button onClick={toggleTheme} className={`${baseStyle}`}>
        Toggle Theme: {state.theme === "light" ? "Dark" : "Light"}
      </button>
      <div className={`${baseStyle}`}>
        <label htmlFor="fontSize">Font Size: </label>
        <select
          className="bg-emerald-800/50"
          id="fontSize"
          value={state.userPreferences.fontSize}
          onChange={handleFontSizeChange}
        >
          <option value="small" >Small</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className={`${baseStyle}`}>
        <button onClick={handleAnimations} className="inline-flex items-center">
          Animations {state.userPreferences.reduceAnimations ? "Off" : "On"}
  
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;

    