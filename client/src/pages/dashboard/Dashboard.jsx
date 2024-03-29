// imports
import React from "react";
import "./dashboard.css";
import Titles from "../../components/titles/Titles";
import Button from "../../components/buttons/Button";

// import icons
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Dashboard = () => {
  const dashboardInfo = [
    {
      count: 12361,
      icon: <PetsOutlinedIcon />,
      title: "Adoption Request",
    },
    {
      count: 431225,
      icon: <MedicationOutlinedIcon />,
      title: "Rescue Request",
    },
    {
      count: 32441,
      icon: <HomeOutlinedIcon />,
      title: "Shelter Request",
    },
  ];

  return (
    <>
      {/* DASHBOARD TITLE */}
      <div className="title">
        <Titles title="DASHBOARD" welcome="Welcome to your dashboard" />
        <Button icon={DownloadOutlinedIcon} button="Download Reports"></Button>
      </div>

      {/* DASHBOARD CONTENT */}
      <main>
        <div className="request-wrapper">
          {dashboardInfo.map((value, key) => (
            <div key={key} className="request">
              <div className="request-info">
                <div style={{ color: "#0088a9" }}>{value.icon}</div>
                <div>{value.count.toLocaleString()}</div>
                <div>{value.title}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
