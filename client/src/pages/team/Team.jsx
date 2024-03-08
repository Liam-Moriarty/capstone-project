// imports
import React from "react";
import "./team.css";
import Titles from "../../components/titles/Titles";

const Team = () => {
  const columns = [
    {
      name: "ID",
    },
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
  ];

  const data = [
    {
      id: 1,
      firstName: "Fernando",
      lastName: "Ordiales",
      age: 20,
      email: "fernando.ordiales23@gmail.com",
      contact: 9065033386,
      role: "Software Engineer",
    },
    {
      id: 2,
      firstName: "Chase",
      lastName: "Calaay",
      age: 23,
      email: "chase.calaay@gmail.com",
      contact: 9489268682,
      role: "Project Manager",
    },
    {
      id: 3,
      firstName: "Chaira",
      lastName: "Ildefonso",
      age: 21,
      email: "chaira.ildefonso@gmail.com",
      contact: 9948562970,
      role: "Chief Executive Officer",
    },
    {
      id: 4,
      firstName: "Paula",
      lastName: "Taub",
      age: 22,
      email: "paula.taub@gmail.com",
      contact: 94662824182,
      role: "Chief Operating Officer",
    },
  ];

  return (
    // Titles
    <>
      <Titles title="Teams" welcome="Welcome to your teams" />

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

          {/* TABLE CONTENTS */}
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Team;
