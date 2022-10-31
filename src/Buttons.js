import React from "react";
const Buttons = ({ className, value, onClick, text}) => {
    return (
      <button className={className} value = {value} onClick={onClick} >
        {text}
      </button>
    );
  };
  
  export default Buttons;