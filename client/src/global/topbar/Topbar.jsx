// imports
import React from "react";
import "./topbar.css";
// topbar icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-wrapper">
        <input type="text" placeholder="Search" />
        <SearchOutlinedIcon style={{ color: "#edf0f1", cursor: "pointer" }} />
      </div>
      <div className="topbar-icon">
        <LightModeOutlinedIcon
          style={{ color: "#edf0f1", cursor: "pointer" }}
        />
        <NotificationsOutlinedIcon
          style={{ color: "#edf0f1", cursor: "pointer" }}
        />{" "}
        <SettingsOutlinedIcon style={{ color: "#edf0f1", cursor: "pointer" }} />
        <PersonOutlineOutlinedIcon
          style={{ color: "#edf0f1", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Topbar;
