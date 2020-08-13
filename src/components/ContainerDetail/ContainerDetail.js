import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faPallet,
  faBoxOpen,
  faTruckLoading,
  faMoneyCheckAlt,
  faQuestionCircle,
  faChalkboardTeacher,
  faTv,
  faBolt,
  faLock,
  faTruck,
  faThermometerThreeQuarters,
  faUsers,
  faFileAlt,
  faParking,
  faBoxes,
  faTshirt,
  faUtensils,
  faGem,
  faMobileAlt,
  faSoap,
  faCogs,
  faCouch,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
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

  const makeList = () => {
    const tr = document.createElement("tr");
    const list = ["세부항목", "단위", "단가", "비고"];

    const nodes = list.map(text => {
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.placeholder = text;
      input.type = "text";
      td.appendChild(input);
      return td;
    });

    nodes.forEach(node => {
      tr.appendChild(node);
    });
    return tr;
  };

  const makePlusBtn = id => {
    const td = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "+";
    button.id = id;
    button.onclick = addNewLine;
    td.appendChild(button);
    return td;
  };

  const addNewLine = e => {
    const plusBtn = e.currentTarget;
    const td = plusBtn.parentNode;
    const type = plusBtn.id;
    td.innerHTML = "";
    td.removeAttribute("class");

    let tbody;
    switch (type) {
      case "keeping":
        tbody = document.querySelector(".keeping-payment tbody");
        break;
      case "working":
        tbody = document.querySelector(".working-payment tbody");
        break;
      case "delivery":
        tbody = document.querySelector(".delivery-payment tbody");
        break;
      case "other":
        tbody = document.querySelector(".other-payment tbody");
        break;
      default:
        break;
    }

    const tr = makeList();
    tr.appendChild(makePlusBtn(type));
    tbody.appendChild(tr);
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
        <p className="title">
          <FontAwesomeIcon icon={faMoneyCheckAlt} /> 이용 비용
        </p>
        <div className="sub-section keeping-payment">
          <h1 className="subtitle">보관 비용</h1>
          <table className="container-detail-table">
            <thead>
              <tr>
                <th>세부항목</th>
                <th>단위</th>
                <th>단가</th>
                <th>비고(수량 또는 크기)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" placeholder="세부항목" />
                </td>
                <td>
                  <input type="text" placeholder="단위" />
                </td>
                <td>
                  <input type="text" placeholder="단가" />
                </td>
                <td>
                  <input type="text" placeholder="비고" />
                </td>
                <td>
                  <button id="keeping" onClick={addNewLine}>
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sub-section working-payment">
          <h1 className="subtitle">작업비</h1>
          <table className="container-detail-table">
            <thead>
              <tr>
                <th>세부항목</th>
                <th>단위</th>
                <th>단가</th>
                <th>비고(수량 또는 크기)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" placeholder="세부항목" />
                </td>
                <td>
                  <input type="text" placeholder="단위" />
                </td>
                <td>
                  <input type="text" placeholder="단가" />
                </td>
                <td>
                  <input type="text" placeholder="비고" />
                </td>
                <td>
                  <button id="working" onClick={addNewLine}>
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sub-section delivery-payment">
          <h1 className="subtitle">배달비</h1>
          <table className="container-detail-table">
            <thead>
              <tr>
                <th>세부항목</th>
                <th>단위</th>
                <th>단가</th>
                <th>비고(수량 또는 크기)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" placeholder="세부항목" />
                </td>
                <td>
                  <input type="text" placeholder="단위" />
                </td>
                <td>
                  <input type="text" placeholder="단가" />
                </td>
                <td>
                  <input type="text" placeholder="비고" />
                </td>
                <td>
                  <button id="delivery" onClick={addNewLine}>
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sub-section other-payment">
          <h1 className="subtitle">기타 비용</h1>
          <table className="container-detail-table">
            <thead>
              <tr>
                <th>세부항목</th>
                <th>단위</th>
                <th>단가</th>
                <th>비고(수량 또는 크기)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" placeholder="세부항목" />
                </td>
                <td>
                  <input type="text" placeholder="단위" />
                </td>
                <td>
                  <input type="text" placeholder="단가" />
                </td>
                <td>
                  <input type="text" placeholder="비고" />
                </td>
                <td>
                  <button id="other" onClick={addNewLine}>
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container-detail-service">
        <p className="title">
          <FontAwesomeIcon icon={faQuestionCircle} /> 서비스
        </p>
        <div className="service-icons">
          <div className="icon">
            <FontAwesomeIcon icon={faTv} />
            <p>cctv 유무</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faBolt} />
            <p>경비업체 유무</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faLock} color="#5F99D7" />
            <p>보안락 유무</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faTruck} />
            <p>픽업 서비스 유무</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faThermometerThreeQuarters} />
            <p>냉난방 유무</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUsers} color="#5F99D7" />
            <p>관리인력 유무</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faFileAlt} />
            <p>보험가입 유무</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faParking} />
            <p>주차기능 유무</p>
          </div>
        </div>
      </div>
      <div className="container-detail-explain">
        <p className="title">
          <FontAwesomeIcon icon={faChalkboardTeacher} /> 부가 설명
        </p>
        <textarea placeholder="내용을 입력해주세요" />
      </div>
      <div className="container-detail-mainstyle">
        <p className="title">
          <FontAwesomeIcon icon={faBoxes} /> 주요 담당 품목
        </p>
        <div className="mainstyle-icons">
          <div className="icon">
            <FontAwesomeIcon icon={faTshirt} />
            <p>의료 물품</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUtensils} color="#5F99D7" />
            <p>식료품</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faGem} color="#5F99D7" />
            <p>악세서리</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faMobileAlt} color="#5F99D7" />
            <p>전자기기</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faSoap} />
            <p>화장품</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCogs} color="#5F99D7" />
            <p>부품</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCouch} />
            <p>가구</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faTree} />
            <p>원자재</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerDetail;
