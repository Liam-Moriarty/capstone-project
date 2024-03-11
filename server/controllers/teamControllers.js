const Team = require("../models/teamModels");
const mongoose = require("mongoose");

// get all team documents
const getTeams = async (req, res) => {
  // this is to find/get all the workouts/documents
  // and sort it the sort code means you will get
  // all the new documents/workouts
  const team = await Team.find({}).sort({ age: 1 });
  res.status(200).json(team);
};

// get single document
const getTeam = async (req, res) => {
  const { id } = req.params;

  // normally if you find an id that is not in the document
  // or not valid it will return an error this code
  // is to override that error,
  // we want to display our own error that will not crush the app

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such member" });
  }

  // this is to find the id and get the result
  // and display output based on the result
  const team = await Team.findById(id);

  // this is if the result doesnt find an ID
  if (!team) {
    return res.status(404).json({ error: "No such member" });
  }

  // this is if we find an id
  res.status(200).json(team);
};

// create a single document
const createTeam = async (req, res) => {
  const { id, firstName, lastName, age, email, contact, role } = req.body;

  // add documents to database
  try {
    const team = await Team.create({
      id,
      firstName,
      lastName,
      age,
      email,
      contact,
      role,
    });
    res.status(200).json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // res.json({ msg: "CREATE new member" });
};

// delete a single document
const deleteTeam = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such member" });
  }
  const team = await Team.findOneAndDelete({ _id: id });

  if (!team) {
    res.status(400).json({ error: "No such member" });
  }

  res.status(200).json(team);
};

// update a single document
const updateTeam = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such member" });
  }

  const team = await Team.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!team) {
    res.status(400).json({ error: "No such member" });
  }

  res.status(200).json(team);
};

module.exports = {
  getTeams,
  getTeam,
  createTeam,
  deleteTeam,
  updateTeam,
};
