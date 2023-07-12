import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PosPage from "./Pages/PosPage";
import BasicTrainingPage from "./Pages/BasicTrainingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/pos" element={<PosPage></PosPage>} />
        <Route path="/basic-training" element={<BasicTrainingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
