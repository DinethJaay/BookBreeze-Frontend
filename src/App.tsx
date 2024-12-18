import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import BooksPage from "./pages/BooksPage";
import Login from "./pages/LoginPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
