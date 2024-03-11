// Imports
import React, { useState } from "react";
import "./addTeam.css";
import Titles from "../../components/titles/Titles";
import { useTeamsContext } from "../../hook/useTeamsContext";

// React hot toast
import toast, { Toaster } from "react-hot-toast";

// Import Icons
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

const AddTeam = () => {
  const { dispatch } = useTeamsContext();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    // this prevent the default, the default is it
    // prevents the refresh of the page
    e.preventDefault();

    const team = { firstName, lastName, age, email, contact, role };

    const response = await fetch("http://localhost:3000/api/team", {
      method: "POST",
      body: JSON.stringify(team),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      toast.error("Uh oh! Please check your entries.");
    }

    if (response.ok) {
      setFirstName("");
      setLastName("");
      setAge("");
      setEmail("");
      setContact("");
      setRole("");
      setError(null);

      dispatch({ type: "CREATE_TEAM", payload: json });
      toast.success("Well done! New member has been successfully added.");
      console.log("New member added", json);
    }
  };

  return (
    <>
      <div className="title">
        <Titles title="REGISTER MEMBER" welcome="Pet and Rescue Platform" />
      </div>

      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h2>ADD NEW MEMBER</h2>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="First name"
            />
            <PersonOutlinedIcon
              style={{ color: "#edf0f1", cursor: "pointer" }}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Last name"
            />
            <PersonOutlinedIcon
              style={{ color: "#edf0f1", cursor: "pointer" }}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              placeholder="Age"
            />
            <CakeOutlinedIcon style={{ color: "#edf0f1", cursor: "pointer" }} />
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <EmailOutlinedIcon
              style={{ color: "#edf0f1", cursor: "pointer" }}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              placeholder="Contact"
            />
            <ContactPhoneOutlinedIcon
              style={{ color: "#edf0f1", cursor: "pointer" }}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              placeholder="Role"
            />
            <BadgeOutlinedIcon
              style={{ color: "#edf0f1", cursor: "pointer" }}
            />
          </div>

          <button className="submit-button">Add Member</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default AddTeam;
