import React from "react";
import "./button.css";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Button = () => {
  return (
    <button className="dl-reports">
      <DownloadOutlinedIcon style={{ color: "#edf0f1", cursor: "pointer" }} />
      Download Reports
    </button>
  );
};

export default Button;
