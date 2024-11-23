import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BankbookPage from "./pages/bankbook/bankbook";
import Dashboard from "./pages/dashboard/Dashboard";
import Mypage from "./pages/mypage/Mypage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 다른 라우트 여기에 추가 */}
        <Route path="/bankbook" element={<BankbookPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Router>
  );
}

export default App;
