import React from "react";
import "./MainDescription.css";

function MainDescription() {
  return (
    <section id="description">
      <div className="text-container">
        <h1>
          판매에만
          <br />
          집중하세요!
        </h1>
        <h2>
          보관 - 관리 - 출고 - CS
          <br />
          모두 반창고 파트너에게 맡기세요.
        </h2>
        <div className="btn-wrapper">
          <button>파트너 찾기</button>
          <button>견적 추천 받기</button>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h1>원하는 파트너 찾기</h1>
            <p>화장품, 악세사리, 전자기기 등</p>
          </div>
          <div className="card-img">
            <img src="/asset/icons/map-icon.png" alt="icon" />
          </div>
        </div>
        <div className="card right">
          <div className="card-text">
            <h1>파트너에게 물품 전달</h1>
            <p>바코드 부착 작업 등 보관 관리 대행</p>
          </div>
          <div className="card-img">
            <img src="/asset/icons/truck-icon.png" alt="icon" />
          </div>
        </div>
        <div className="card">
          <div className="card-text">
            <h1>물품 자동 출고</h1>
            <p>제품 판매시 자동으로 출고</p>
          </div>
          <div className="card-img">
            <img src="/asset/icons/box-icon.png" alt="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainDescription;
