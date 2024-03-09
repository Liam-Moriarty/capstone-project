// imports
import React, { useState, useEffect } from "react";
import "./team.css";
import Titles from "../../components/titles/Titles";
import Button from "../../components/buttons/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Team = () => {
  const columns = [
    {
      name: "First Name",
    },
    {
      name: "Last Name",
    },
    {
      name: "Age",
    },
    {
      name: "Email",
    },
    {
      name: "Contacts",
    },
    {
      name: "Roles",
    },
    {
      name: "Action",
    },
  ];

  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch("http://localhost:3000/api/team");
      const json = await response.json();

      if (response.ok) {
        setTeam(json);
      }
    };
    fetchTeam();
  }, []);

  return (
    <>
      <div className="title">
        <Titles title="TEAM" welcome="Welcome to our team" />
        <Button icon={DownloadOutlinedIcon} button="Export File"></Button>
      </div>

      <div className="wrapper">
        <table className="content-table">
          {/* TABLE HEADING */}
          <thead>
            <tr>
              {columns.map((col, key) => (
                <th key={key}>{col.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {team &&
              team.map((teams) => (
                <tr key={teams._id}>
                  <td>{teams.firstName}</td>
                  <td>{teams.lastName}</td>
                  <td>{teams.age}</td>
                  <td>{teams.email}</td>
                  <td>{teams.contact}</td>
                  <td>{teams.role}</td>
                  <td>
                    <button className="delete">
                      <DeleteOutlinedIcon /> Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Team;
