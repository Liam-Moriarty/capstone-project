import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

// Links Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
// img logo
import logo from "../../assets/obanai.jpg";

const Sidebar = () => {
  // const [collapsed, setCollapsed] = useState(false);

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  const sidebarLinks = [
    {
      title: "Dashboard",
      icon: <HomeOutlinedIcon />,
      link: "/",
    },
    {
      title: "Team",
      icon: <PeopleOutlinedIcon />,
      link: "/teams",
    },
    {
      title: "Adoption",
      icon: <PetsOutlinedIcon />,
      link: "/adopt",
    },
    {
      title: "Rescue",
      icon: <MedicationOutlinedIcon />,
      link: "/rescue",
    },
  ];

  return (
    <div className="sidebar">
      {/* LOGO */}
      <div className="logo-wrapper">
        <div>
          <img
            src={logo}
            alt="logo"
            width="100px"
            height="100px"
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </div>
        <div className="logo-info">
          <h4>Pet & Rescue Platform</h4>
          <p>Admin Dashboard</p>
        </div>
      </div>

      {/* MENU ITEMS */}

      <ul>
        {sidebarLinks.map((value, key) => (
          <Link
            to={value.link}
            key={key}
            style={{
              textDecoration: "none",
            }}
          >
            <li key={key}>
              <span style={{ color: "#0088a9" }}>{value.icon}</span>
              <span>{value.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
