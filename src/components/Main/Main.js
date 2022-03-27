import React from "react";
import './Main.css'
import { useLocation } from "react-router";

function Main(props) {
  const location = useLocation();

  return (
    <div className={`main ${location.pathname === "/" ? "main__theme_type_home" :
                            location.pathname === "/destination" ? "main__theme_type_destination" :
                            location.pathname === "/crew" ? "main__theme_type_crew" :
                            location.pathname === "/technology" ? "main__theme_type_technology" : ""}`}>
      {props.children}
    </div>
  );
};

export default Main;