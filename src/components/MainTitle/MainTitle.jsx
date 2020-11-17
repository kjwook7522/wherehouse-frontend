import React from "react";
import { FaHome } from "react-icons/fa";
import "./MainTitle.css";

function MainTitle() {
  return (
    <section id="main-title">
      <div className="title-wrapper">
        {/* <FaHome /> */}
        <img src="/asset/icons/main-icon.png" alt="main-icon"/>
        <div>
          <p>나만의 물류파트너 찾기</p>
          <h1>온라인 셀러를 위한 <br />단 하나의 솔루션</h1>
          <p>물류대행 창고 중개 플랫폼 반창고</p>
        </div>
      </div>
    </section>
  );
}

export default MainTitle;
