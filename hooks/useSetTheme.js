import { useLayoutEffect } from "react";

// custom hook to set theme
export default function useSetTheme(theme) {
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
}
