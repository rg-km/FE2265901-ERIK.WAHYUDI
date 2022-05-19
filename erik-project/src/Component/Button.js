import { useContext } from "react";
import { ThemeContext } from "../App";

const Button = () => {
  const theme = useContext(ThemeContext).theme;
  const setTheme = useContext(ThemeContext).setTheme;
  // const renderTheme = (theme) =>{...}
  // const changeTheme = (theme) =>{...}
  return (
    <button
      onClick={() => {
        changeTheme(theme);
      }}
      className={`${renderTheme(theme).styles} ${styles["button"]}`}
    >
      {renderTheme(theme).buttonText}
    </button>
  );
};

export default Button;