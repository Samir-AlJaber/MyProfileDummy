import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "./Home/ProfilePage";
import ArticlesPage from "./Home/ArticlesPage";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS is required now

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/articles/page/:page" element={<ArticlesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
