import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import RewardMe from "./RewardMe";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Shahrukh" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="/reward-me" element={<RewardMe />} />
      </Routes>
    </Router>
  );
};

export default App;
