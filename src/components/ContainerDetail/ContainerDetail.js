import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPallet, faBoxOpen, faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { TimePicker } from "antd";
import "./ContainerDetail.css";

function ContainerDetail() {
  const activeIcon = e => {
    const pallet = document.getElementById("pallet-icon");
    const box = document.getElementById("box-icon");
    const special = document.getElementById("special-icon");
    const iconBtns = [pallet, box, special];

    iconBtns.forEach(btn => {
      btn.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
  };

  const activeDay = e => {
    const dayBtn = e.currentTarget;

    if (dayBtn.classList.contains("active")) {
      dayBtn.classList.remove("active");
    } else {
      dayBtn.classList.add("active");
    }
  };

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
          <div className="select-day">
            <span className="day" onClick={activeDay}>
              월
            </span>
            <span className="day" onClick={activeDay}>
              화
            </span>
            <span className="day" onClick={activeDay}>
              수
            </span>
            <span className="day" onClick={activeDay}>
              목
            </span>
            <span className="day" onClick={activeDay}>
              금
            </span>
            <span className="day" onClick={activeDay}>
              토
            </span>
            <span className="day" onClick={activeDay}>
              일
            </span>
          </div>
        </div>
        <div className="running-time">
          <h1 className="subtitle">운영 시간</h1>
          <div className="select-time">
            <TimePicker className="time-picker" use12Hours format="hh:mm a" minuteStep={10} placeholder="시작 시간" />
            ~
            <TimePicker className="time-picker" use12Hours format="hh:mm a" minuteStep={10} placeholder="종료 시간" />
          </div>
        </div>
      </div>

      <div className="container-detail-payment">
        이용 비용
      </div>
    </div>
  );
}

export default ContainerDetail;
