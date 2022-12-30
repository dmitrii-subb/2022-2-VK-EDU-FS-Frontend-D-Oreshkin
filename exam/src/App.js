import React from "react";
import History from "./pages/History";
import Translate from "./pages/Translate";

import { Routes, Route, Navigate } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Translate />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>
    );
  }
}

export default App;
