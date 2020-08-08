import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPallet, faBoxOpen, faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import "./ContainerDetail.css";

function ContainerDetail() {
  const activeIcon = e => {
    const pallet = document.getElementById("pallet-icon");
    const box = document.getElementById("box-icon");
    const special = document.getElementById("special-icon");
    const iconBtns = [pallet, box, special]
    
    iconBtns.forEach(btn => {
      btn.classList.remove("active")
    })

    e.currentTarget.classList.add("active");
  }

  return (
    <div className="container-detail">
      <div className="container-detail-info">
        <p className="title">
          <FontAwesomeIcon icon={faInfoCircle} /> 창고 상세정보
        </p>
        <div className="keeping-type">
          <h1 className="subtitle">보관 형태</h1>
          <div className="keeping-type-icons">
            <div className="icon-button">
              <FontAwesomeIcon id="pallet-icon" icon={faPallet} onClick={activeIcon} />
              <br />
              <p>팔레트</p>
            </div>
            <div className="icon-button">
              <FontAwesomeIcon id="box-icon" icon={faBoxOpen} onClick={activeIcon} />
              <br />
              <p>박스</p>
            </div>
            <div className="icon-button">
              <FontAwesomeIcon id="special-icon" icon={faTruckLoading} onClick={activeIcon} />
              <br />
              <p>특수물품</p>
            </div>
          </div>
        </div>
        <div className="running-day">
          <h1 className="subtitle">운영 요일</h1>
        </div>
        <div className="running-time">
          <h1 className="subtitle">운영 시간</h1>
        </div>
      </div>
    </div>
  );
}

export default ContainerDetail;
