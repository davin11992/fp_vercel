import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BankbookPage from "./pages/bankbook/bankbook";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* 다른 라우트 여기에 추가 */}
        <Route path="/bankbook" element={<BankbookPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
