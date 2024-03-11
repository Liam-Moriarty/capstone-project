const express = require("express");
const {
  getTeams,
  getTeam,
  createTeam,
  deleteTeam,
  updateTeam,
} = require("../controllers/teamControllers");
const router = express.Router();

// GET all members
router.get("/", getTeams);

// GET single members
router.get("/:id", getTeam);

// CREATE new members
router.post("/", createTeam);

// DELETE single member
router.delete("/:id", deleteTeam);

// UPDATE single member
router.patch("/:id", updateTeam);

module.exports = router;
