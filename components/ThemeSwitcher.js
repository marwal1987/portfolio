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

  const handleReduceAnimationsChange = (e) => {
    const reduceAnimations = e.target.checked;
    dispatch({
      type: "UPDATE_USER_PREFERENCES",
      payload: { ...state.userPreferences, reduceAnimations },
    });
  };

  const baseStyle =
    "dark:bg-white bg-gray-800 text-md dark:text-gray-600 text-stone-100 rounded-full";

  return (
    <div className="p-4 sm:p-8 lg:p-12 flex flex-col lg:flex-row justify-center items-center bg-stone-100 dark:bg-gray-800 gap-12">
      <button onClick={toggleTheme} className={`p-2 ${baseStyle}`}>
        Toggle Theme: {state.theme === "light" ? "Dark" : "Light"}
      </button>
      <div className={`p-2 ${baseStyle}`}>
        <label htmlFor="fontSize">Font Size: </label>
        <select
          className={`${baseStyle}`}
          id="fontSize"
          value={state.userPreferences.fontSize}
          onChange={handleFontSizeChange}
        >
          <option value="small">Small</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className={`p-2 ${baseStyle}`}>
        <label htmlFor="reduceAnimations">Reduce Animations: </label>
        <input
          type="checkbox"
          id="reduceAnimations"
          checked={state.userPreferences.reduceAnimations}
          onChange={handleReduceAnimationsChange}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
