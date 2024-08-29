import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, themeSelector } from "../redux/slices/theme";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function Theme() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const isLightTheme = theme === "light";
  return (
    <label
      htmlFor="theme"
      className="rounded-full h-6 md:h-8 w-6 md:w-8 overflow-hidden relative mr-4 md:mr-8 cursor-pointer hover:scale-110 transition duration-300 ease-linear"
    >
      <MdLightMode
        className={`h-full w-full absolute transition duration-500 ease-linear text-orange-500 ${
          isLightTheme ? "translate-x-0" : "-translate-x-full"
        }`}
      />
      <MdDarkMode
        className={`h-full w-full absolute transition duration-500 ease-linear text-blue-500 ${
          isLightTheme ? "translate-x-full" : "translate-x-0"
        }`}
      />
      <input
        type="checkbox"
        id="theme"
        className="hidden"
        checked={isLightTheme}
        onChange={() => dispatch(toggleTheme())}
      />
    </label>
  );
}
