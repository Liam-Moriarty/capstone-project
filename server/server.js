// step 1 imports
const express = require("express");
const teamRoutes = require("./routes/team");
const mongoose = require("mongoose");
const cors = require("cors");

// step 5
require("dotenv").config();

// step 2 create express app
const app = express();

// this is to connect the port of the database and the port of the frontend
// example the port of the server is 4000 and the frontend is 3000
// we can connect them thru CORS
// Enable CORS for all routes
app.use(cors());

// step 6 add middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// step 4 create routes API end points
app.use("/api/team", teamRoutes);
// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome to the App" });
// });

// step 7 connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // step 3 listen for request
    app.listen(process.env.PORT, () => {
      console.log(`Listening to PORT:`, process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// note after connecting into the database create a model and
// schemas for our data to be sure that every document that
// we save to the database follows the same predictable structure
