import React from "react";
import "./title.css";
import Button from "../buttons/Button";

const Titles = (props) => {
  return (
    <div className="title">
      <div className="title-wrapper">
        <h2>{props.title}</h2>
        <p>{props.welcome}</p>
      </div>
      <Button />
    </div>
  );
};

export default Titles;
