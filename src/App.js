import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Home/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect default "/" to page 1 */}
        <Route path="/" element={<Navigate to="/page/1" />} />
        <Route path="/page/:page" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
