import React from "react";
import "./title.css";
import Button from "../buttons/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Titles = (props) => {
  return (
    <div className="title-wrapper">
      <h2>{props.title}</h2>
      <p>{props.welcome}</p>
    </div>
  );
};

export default Titles;
