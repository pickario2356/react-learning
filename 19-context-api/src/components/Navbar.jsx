import { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../context/ThemeContext";

export const Navbar = ({ children, theme }) => {
  // console.log(props.theme)
  // console.log(props.children)
  // console.log(children[0])

  const data = useContext(ThemeDataContext);
  return (
    <div className="nav">
      <h1>Pickario</h1>
      {/* <h1>{data}</h1> */}
      <Nav2 theme={theme}></Nav2>
    </div>
  );
};
