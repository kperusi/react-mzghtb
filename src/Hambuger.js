import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Hambuger(props) {
  const style = {
    display: "block",
    width: " 70px",
    height: " 8px",
    margin: "8px",
    transition: " all 0.3s ease-in-out",
    backgroundColor: "white",
  };
  const [classname, setClassname] = useState("");

  const toggle = () => {
    if (classname === "active") {
      setClassname("");
    } else {
      setClassname("active");
    }
    props.showHandler()
  };

  return (
    <div className={`hambuger ${classname}`} onClick={() => toggle()}>
      <span className="line" style={style}></span>
      <span className="line" style={style}></span>
      <span className="line" style={style}></span>
    </div>
  );
}
