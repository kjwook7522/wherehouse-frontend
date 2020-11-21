import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  faShieldAlt,
  faBook,
  faClock,
  faQuestionCircle,
  faLock,
  faTruck,
  faThermometerThreeQuarters,
  faUsers,
  faFileAlt,
  faParking,
} from "@fortawesome/free-solid-svg-icons";
import "./ContainerDetail.css";

function ContainerDetail(props) {
  //그냥 info만하면 안됨 객체가 날라오기에 {info}로
  //객체 안의 info를 택하거나 props를 넘겨받아서 props.info로 해야한다
  //이떄 호출하는 Container측에서 전달인자로 info={containerInfo}넘겨줬다

  var typev = props.info.type;
  if (typev === "FULLFILMENT") {
    typev = "풀필먼트";
  } else {
    typev = "3PL";
  }

  var storageTypev = props.info.storageType;
  if (storageTypev === "PALLET") {
    storageTypev = "파레트";
  } else if (storageTypev === "BOX") {
    storageTypev = "박스";
  } else if (storageTypev === "SPECIAL") {
    storageTypev = "특수";
  }

  var paymentTypev = props.info.paymentType;
  if (paymentTypev === "STORE") {
    paymentTypev = "저장";
  } else if (paymentTypev === "WORK") {
    paymentTypev = "작업";
  } else if (paymentTypev === "DELIVER") {
    paymentTypev = "배송";
  } else if (paymentTypev === "OTHER") {
    paymentTypev = "기타";
  }
  
  var availNum = Number(props.info.availableWeekdays);
  var satFlag = false;
  var friFlag = false;
  var thuFlag = false;
  var wedFlag = false;
  var tueFlag = false;
  var monFlag = false;
  var sunFlag = false;
  if (availNum / 64 >= 1) {
    satFlag = true;
    availNum = availNum - 64;
  }
  if (availNum / 32 >= 1) {
    friFlag = true;
    availNum = availNum - 32;
  }
  if (availNum / 16 >= 1) {
    thuFlag = true;
    availNum = availNum - 16;
  }
  if (availNum / 8 >= 1) {
    wedFlag = true;
    availNum = availNum - 8;
  }
  if (availNum / 4 >= 1) {
    tueFlag = true;
    availNum = availNum - 4;
  }
  if (availNum / 2 >= 1) {
    monFlag = true;
    availNum = availNum - 2;
  }
  if (availNum / 1 >= 1) {
    sunFlag = true;
    availNum = availNum - 1;
  }
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
      <div className="container-detail-mainstyle"></div>
      <div className="container-detail-time">
        <p className="title">
          <FontAwesomeIcon icon={faClock} /> 이용 시간
        </p>
        <div className="sub-section keeping-time">
          <h1 className="subtitle">운영시간</h1>
          <p>
            여는시간:{props.info.openAt}
            <br />
            닫는시간:{props.info.closeAt}
          </p>
        </div>
        <div className="sub-section keeping-time">
          <h1 className="subtitle">사용 가능 요일</h1>
          {sunFlag ? <span>일 </span> : <span></span>}
          {monFlag ? <span>월 </span> : <span></span>}
          {tueFlag ? <span>화 </span> : <span></span>}
          {wedFlag ? <span>수 </span> : <span></span>}
          {thuFlag ? <span>목 </span> : <span></span>}
          {friFlag ? <span>금 </span> : <span></span>}
          {satFlag ? <span>토 </span> : <span></span>}
        </div>
        <div className="sub-section keeping-time">
          <h1 className="subtitle">이용시간 추가 정보</h1>
          <p>{props.info.availableTimeDetail}</p>
        </div>
      </div>
      <div className="container-detail-service">
        <p className="title">
          <FontAwesomeIcon icon={faQuestionCircle} /> 서비스
        </p>
        <div className="service-icons">
          <div className="icon" id="cctvExistIcon">
            <div>{props.info.cctvExist ? <FontAwesomeIcon icon={faEye} color="#f7a74a" id="cctvExist" /> : <FontAwesomeIcon icon={faEye} id="cctvExist" />}</div>
            <p>cctv 유무</p>
          </div>
          <div className="icon">
            {props.info.doorLockExist ? <FontAwesomeIcon icon={faLock} color="#f7a74a" id="doorLockExist" /> : <FontAwesomeIcon icon={faLock} id="doorLockExist" />}
            <p>보안락 유무</p>
          </div>
          <div className="icon">
            {props.info.securityCompanyExist ? <FontAwesomeIcon icon={faShieldAlt} color="#f7a74a" id="Exist" /> : <FontAwesomeIcon icon={faShieldAlt} />}
            <p>경비업체 유무</p>
          </div>
          <div className="icon">
            {props.info.insuranceExist ? <FontAwesomeIcon icon={faFileAlt} color="#f7a74a" /> : <FontAwesomeIcon icon={faFileAlt} />}
            <p>보험가입 유무</p>
          </div>
          <div className="icon">
            {props.info.canPark ? <FontAwesomeIcon icon={faParking} color="#f7a74a" /> : <FontAwesomeIcon icon={faParking} />}
            <p>주차기능 유무</p>
          </div>
          <div className="icon">
            {props.info.workerExist ? <FontAwesomeIcon icon={faUsers} color="#f7a74a" /> : <FontAwesomeIcon icon={faUsers} />}
            <p>관리인력 유무</p>
          </div>
          <div className="icon">
            {props.info.canPickup ? <FontAwesomeIcon icon={faTruck} color="#f7a74a" /> : <FontAwesomeIcon icon={faTruck} />}
            <p>픽업 서비스 유무</p>
          </div>
          <div className="icon">
            {props.info.airConditioningType.toString() != "NONE" ? <FontAwesomeIcon icon={faThermometerThreeQuarters} color="#f7a74a" /> : <FontAwesomeIcon icon={faThermometerThreeQuarters} />}
            <p>냉난방 유무</p>
          </div>
        </div>
      </div>
      <div className="container-detail-service-extra">
        <p className="title">
          <FontAwesomeIcon icon={faBook} /> 서비스 추가정보
        </p>
        <div className="sub-section-companies">
          <h1 className="subtitle">제휴회사 종류</h1>
          <p>경비업체:{props.info.securityCompanyName}</p>
          <p>보험사:{props.info.insuranceName}</p>
          {/* <p>제휴택배사:{props.info.deliveryCompanies}</p> */}
        </div>
        <div className="sub-section-parking-scale">
          <h1 className="subtitle">주차장 규모</h1>
          <p>{props.info.parkingScale}</p>
        </div>
        <div className="sub-section-select">
          {String(props.info.serviceType) === "GENERAL" ? <h1 className="subtitle">일반 요금정보</h1> : <h1 className="subtitle">에이전시 요금정보</h1>}
          {String(props.info.serviceType) === "GENERAL" ? <p>월세 : {props.info.monthlyFee}</p> : <p>종류 : {typev}</p>}
          {String(props.info.serviceType) === "GENERAL" ? <p>보증금 : {props.info.depositFee}</p> : <p>창고타입 : {storageTypev}</p>}
          {String(props.info.serviceType) === "GENERAL" ? <p>관리비 : {props.info.maintenanceFee}</p> : <p>요금단위: {props.info.unit}</p>}
          {String(props.info.serviceType) === "GENERAL" ? <p>최소사용기간 : {props.info.minUseTerm}</p> : <p>요금비용 : {props.info.cost}</p>}
          {String(props.info.serviceType) === "GENERAL" ? <p></p> : <p>요금설명 : {props.info.paymentDescription}</p>}
          {String(props.info.serviceType) === "GENERAL" ? <p></p> : <p>요금종류 : {paymentTypev}</p>}
        </div>
      </div>
    </div>
  );
}

export default ContainerDetail;
