import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button className="dl-reports">
      {props.icon && (
        <props.icon style={{ color: "#edf0f1", cursor: "pointer" }} />
      )}
      {props.button}
    </button>
  );
};

export default Button;
