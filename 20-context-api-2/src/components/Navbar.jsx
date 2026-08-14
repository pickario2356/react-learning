import { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../context/ThemeContext";

export const Navbar = () => {
  const [theme,setTheme] = useContext(ThemeDataContext);
  // console.log(theme)
  return (
    <div className={theme}>
      <h1>Pickario</h1>
      <Nav2></Nav2>
    </div>
  );
};
