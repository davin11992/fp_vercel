import React from "react";
import "../../../styles/header.css";

const Header = () => {
  return (
    <header>
      <div>
        <h1 id="funnypenny-logo-red">
          퍼니<span id="funnypenny-logo-green">페니</span>
        </h1>
      </div>
      <div>
        <nav class="header-nav">
          <ul>
            <li class="header-nav-li">
              <img
                src="/img/header/file.png"
                alt="dashboard file img"
              />
              <p href="/dashboard">대시보드</p>
            </li>
            <li class="header-nav-li">
              <img
                src="/img/header/calendar.png"
                alt="calendar img"
              />
              <p href="/todo">오늘의할일</p>
            </li>
            <li class="header-nav-li">
              <img
                src="/img/header/money.png"
                alt="money img"
              />
              <p href="/bank">내 통장</p>
            </li>
            <li class="header-nav-li">
              <img
                src="/img/header/mypage.png"
                alt="mypage img"
              />
              <p href="/mypage">내 정보</p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
