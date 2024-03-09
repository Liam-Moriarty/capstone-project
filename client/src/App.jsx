import "./styling/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./global/sidebar/Sidebar";
import Topbar from "./global/topbar/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import AddTeam from "./pages/addTeam/AddTeam";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content-wrapper">
          <Topbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/add" element={<AddTeam />} />

              {/* <Route path="/adoption" element={<Adoption />} /> */}
              {/* <Route path="/rescue" element={<Rescue />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
