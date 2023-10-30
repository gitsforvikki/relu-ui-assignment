import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./main/MainLayout";

let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
