import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setTheme } from "./themeSlice";
import styles from "./theme.module.scss";

export default function Theme() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  const handleSetTheme = useCallback(
    (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      dispatch(setTheme(theme));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!currentTheme) handleSetTheme("light");
    else {
      if (currentTheme === "light") handleSetTheme("light");
      else handleSetTheme("dark");
    }
  }, [currentTheme, handleSetTheme]);

  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return (
    <div className={styles.themeToggle}>
      <input
        type="checkbox"
        defaultChecked={currentTheme === "light"}
        onChange={handleToggleTheme}
      />
      <label></label>
    </div>
  );
}
