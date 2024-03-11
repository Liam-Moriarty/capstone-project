// imports
import React, { useState, useEffect } from "react";
import "./team.css";
import Titles from "../../components/titles/Titles";
import Button from "../../components/buttons/Button";
import { useTeamsContext } from "../../hook/useTeamsContext";

// import icons
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// React hot toast
import toast, { Toaster } from "react-hot-toast";

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

  const { teams, dispatch } = useTeamsContext();

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch("http://localhost:3000/api/team");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TEAM", payload: json });
      }
    };
    fetchTeam();
  }, []);

  const handleDelete = async (teamId) => {
    const response = await fetch(`http://localhost:3000/api/team/${teamId}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      toast.success("Deletion was successful. The member has been removed.");
      dispatch({ type: "DELETE_TEAM", payload: json });
    }
  };

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
            {teams &&
              teams.map((team) => (
                <tr key={team._id}>
                  <td>{team.firstName}</td>
                  <td>{team.lastName}</td>
                  <td>{team.age}</td>
                  <td>{team.email}</td>
                  <td>{team.contact}</td>
                  <td>{team.role}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(team._id)}
                      className="delete"
                    >
                      <DeleteOutlinedIcon /> Delete
                    </button>
                    <Toaster position="top-right" />
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
