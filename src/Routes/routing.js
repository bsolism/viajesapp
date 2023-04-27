import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import config from "./config";

export default function routing() {
  return (
    <Router>
      <Routes>
        {config.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}
