import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthScreen from "../Pages/AuthScreen";

export default function routingAuth() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthScreen />} />
      </Routes>
    </Router>
  );
}
