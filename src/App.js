import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BankbookPage from "./pages/bankbook/bankbook";

function App() {
  return (
    <Router>
      <Routes>
        {/* 다른 라우트 여기에 추가 */}
        <Route path="/bankbook" element={<BankbookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
