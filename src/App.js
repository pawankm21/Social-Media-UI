import "./App.css";
import Feed from "./pages/Feed";
import Auth from "./pages/Auth";
import Personal from "./pages/Personal";
import Landing from "./pages/Landing";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Dashboard from "./pages/Dashboard"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/feed" element={ <Feed /> } /> 
        <Route path="/personal" element={<Personal />} />
        <Route path="/settings" element={<Settings />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/maintain" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
