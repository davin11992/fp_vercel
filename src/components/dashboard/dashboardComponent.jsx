import React from "react";
import "../../styles/dashboard/dashboard.css";
import "../../styles/dashboard/notice.css";

const dashboardComponent = () => {
  return (
    <div class="dashboard-contents">
      <div class="welcome-box"></div>
      <div id="dashboard-note">
        <div className="notice-section">
          <div class="notice-header">
            <h3>공지사항</h3>
            <a href="#" class="more-link">
              더보기
            </a>
          </div>
          <ul class="notice-list">
            <li>
              <span class="notice-title">
                학급 공지사항 관련 내용 -- ex) 학급 세금 계산 방법 안내
                <span class="badge">N</span>
              </span>
              <span class="notice-date">2024.05.</span>
            </li>
            <li>
              <span class="notice-title">
                학급 공지사항 관련 내용 -- ex) 학급 직업별 할 일들 & 월급
                지급방법
              </span>
              <span class="notice-date">2024.05.</span>
            </li>
            <li>
              <span class="notice-title">
                학급 공지사항 관련 내용 -- ex) 학급 세금 계산 방법 안내
              </span>
              <span class="notice-date">2024.05.</span>
            </li>
          </ul>
        </div>
        <div className="finance-section">
          <h3>세금현황</h3>
        </div>
        <div className="chart-section">
          <h3>주식추이</h3>
        </div>
      </div>
    </div>
  );
};

export default dashboardComponent;
