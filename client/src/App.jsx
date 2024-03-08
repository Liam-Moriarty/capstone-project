import "./styling/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./global/sidebar/Sidebar";
import Topbar from "./global/topbar/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/teams" element={<Team />} />
            {/* <Route path="/adoption" element={<Adoption />} /> */}
            {/* <Route path="/rescue" element={<Rescue />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
