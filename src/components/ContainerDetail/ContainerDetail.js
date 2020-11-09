import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faEye}from "@fortawesome/free-regular-svg-icons"
import {
  faInfoCircle,
  faShieldAlt,
  faClock,
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
import "./ContainerDetail.css";

function ContainerDetail(props) {//그냥 info만하면 안됨 객체가 날라오기에 {info}로
            //객체 안의 info를 택하거나 props를 넘겨받아서 props.info로 해야한다
            //이떄 호출하는 Container측에서 전달인자로 info={containerInfo}넘겨줬다
            console.log(props.info);
            console.log(String(props.info.cctvExist)==="true");
            // console.log(props.info.availableWeekdays);

    // if((props.info.availableWeekdays/1)==1)
    //       ;
    var availNum=Number(props.info.availableWeekdays);
    var satFlag="false";
    var friFlag="false";
    var thuFlag="false";
    var wedFlag="false";
    var tueFlag="false";
    var monFlag="false";
    var sunFlag="false";
    if((availNum/64)>=1)
    {
      satFlag="true";
      availNum=(availNum-64);
    }
    if((availNum/32)>=1)
    {
      friFlag="true";
      availNum=(availNum-32);
    }
    if((availNum/16)>=1)
    {
      thuFlag="true";
      availNum=(availNum-16);
      console.log(availNum);

    }
    if((availNum/8)>=1)
    {
      wedFlag="true";
      availNum=(availNum-8);
    }
    if((availNum/4)>=1)
    {
      tueFlag="true";
      availNum=(availNum-4);
    }
    if((availNum/2)>=1)
    {
      monFlag="true";
      availNum=availNum-2;
    }
    if((availNum/1)>=1)
    {
      sunFlag="true";
      availNum=availNum-1;
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

     <div className="container-detail-mainstyle">
          {/* 
        <p className="title">
          <FontAwesomeIcon icon={faBoxes} /> 주요 담당 품목
        </p>
        <div className="mainstyle-icons">
          <div className="icon">
            <FontAwesomeIcon icon={faTshirt} />
            <p>의료 물품</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUtensils} color="#f7a74a" />
            <p>식료품</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faGem} color="#f7a74a" />
            <p>악세서리</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faMobileAlt} color="#f7a74a" />
            <p>전자기기</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faSoap} />
            <p>화장품</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCogs} color="#f7a74a" />
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>창고비</p>
                </td>
                <td>
                  <p>Pallet/월</p>
                </td>
                <td>
                  <p>25,000</p>
                </td>
                <td>
                  <p>1100x1100x1500</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>창고비</p>
                </td>
                <td>
                  <p>경량랙/월</p>
                </td>
                <td>
                  <p>30,000</p>
                </td>
                <td>
                  <p>1800x1200x4단</p>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>입고</p>
                </td>
                <td>
                  <p>재고조사</p>
                </td>
                <td>
                  <p>20</p>
                </td>
                <td>
                  <p>개당/코드미부착 50원</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>입고</p>
                </td>
                <td>
                  <p>분류</p>
                </td>
                <td>
                  <p>50</p>
                </td>
                <td>
                  <p>개당</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>입고</p>
                </td>
                <td>
                  <p>바코드</p>
                </td>
                <td>
                  <p>50</p>
                </td>
                <td>
                  <p>개당/입고 및 부착</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>가공</p>
                </td>
                <td>
                  <p>스티커부착</p>
                </td>
                <td>
                  <p>40</p>
                </td>
                <td>
                  <p>개당</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>가공</p>
                </td>
                <td>
                  <p>완충제</p>
                </td>
                <td>
                  <p>100</p>
                </td>
                <td>
                  <p>개당/건당</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>가공</p>
                </td>
                <td>
                  <p>Tag작업</p>
                </td>
                <td>
                  <p>100</p>
                </td>
                <td>
                  <p>의류양품</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>용차출고</p>
                </td>
                <td>
                  <p>출고비</p>
                </td>
                <td>
                  <p>100</p>
                </td>
                <td>
                  <p>박스당</p>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>택배비</p>
                </td>
                <td>
                  <p>극소</p>
                </td>
                <td>
                  <p>1,800</p>
                </td>
                <td>
                  <p>~80cm/2kg</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>택배비</p>
                </td>
                <td>
                  <p>소</p>
                </td>
                <td>
                  <p>2,200</p>
                </td>
                <td>
                  <p>~100cm/5kg</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>택배비</p>
                </td>
                <td>
                  <p>중</p>
                </td>
                <td>
                  <p>2,700</p>
                </td>
                <td>
                  <p>~120cm/15kg</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>택배비</p>
                </td>
                <td>
                  <p>대</p>
                </td>
                <td>
                  <p>3,700</p>
                </td>
                <td>
                  <p>~160cm/25kg</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>택배비</p>
                </td>
                <td>
                  <p>특대</p>
                </td>
                <td>
                  <p>8,000</p>
                </td>
                <td>
                  <p>~190cm/25kg</p>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>FBW 사용료</p>
                </td>
                <td>
                  <p>월</p>
                </td>
                <td>
                  <p>무료</p>
                </td>
                <td>
                  <p></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>박스</p>
                </td>
                <td>
                  <p>1호</p>
                </td>
                <td>
                  <p>200</p>
                </td>
                <td>
                  <p>18x12x8</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>에어캡</p>
                </td>
                <td>
                  <p>Roll</p>
                </td>
                <td>
                  <p>5,000</p>
                </td>
                <td>
                  <p>50x50</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>*/}
        
      </div>
      <div className="container-detail-time">
        <p className="title">
          <FontAwesomeIcon icon={faClock} /> 이용 시간
        </p>
        <div className="sub-section keeping-time">
          <h1 className="subtitle">운영시간</h1>
          <p>여는시간:{props.info.openAt}<br/>
             닫는시간:{props.info.closeAt}</p>
          </div>
          <div className="sub-section keeping-time">
          <h1 className="subtitle">사용 가능 요일</h1>
          {
            sunFlag=="true"
            ?(<span>일 </span>)
            :(<span></span>)
          }
          {
            monFlag=="true"
            ?(<span>월 </span>)
            :(<span></span>)
          }
          {
            tueFlag=="true"
            ?(<span>화 </span>)
            :(<span></span>)
          }
          {
            wedFlag=="true"
            ?(<span>수 </span>)
            :(<span></span>)
          }
                    {
            thuFlag=="true"
            ?(<span>목 </span>)
            :(<span></span>)
          }
                    {
            friFlag=="true"
            ?(<span>금 </span>)
            :(<span></span>)
          }
            {
            satFlag=="true"
            ?(<span>토 </span>)
            :(<span></span>)
          }
          </div>
          <div className="sub-section keeping-time">
          <h1 className="subtitle">이용시간 추가 정보</h1>
          <p>{props.info.TimeDetail}</p>
          </div>
        </div>
      <div className="container-detail-service">
        <p className="title">
          <FontAwesomeIcon icon={faQuestionCircle} /> 서비스
        </p>
        <div className="service-icons">
          <div className="icon">
            <div>
            { 
            String(props.info.cctvExist)=="true"
            ? (<FontAwesomeIcon icon={faEye} color="#f7a74a"/>)
            : (<FontAwesomeIcon icon={faEye} />)
            }
            </div>
            <p>cctv 유무</p>
          </div>
          <div className="icon">
          {
             String(props.info.doorLockExist)=="true"
            ? (<FontAwesomeIcon icon={faLock} color="#f7a74a" />)
            : (<FontAwesomeIcon icon={faLock} />)
          }
            <p>보안락 유무</p>
          </div>
          <div className="icon">
          {
             String(props.info.securityCompanyExist)=="true"
            ? (<FontAwesomeIcon icon={faShieldAlt} color="#f7a74a" />)
            : (<FontAwesomeIcon icon={faShieldAlt} />)
          }
            <p>경비업체 유무</p>
          </div>
          <div className="icon">
          {
             String(props.info.insuranceExist)=="true"
            ? (<FontAwesomeIcon icon={faFileAlt} color="#f7a74a" />)
            : (<FontAwesomeIcon icon={faFileAlt} />)
          }
            <p>보험가입 유무</p>
          </div>
          <div className="icon">
          {
             String(props.info.canPark)=="true"
            ? (<FontAwesomeIcon icon={faParking} color="#f7a74a" />)
            : (<FontAwesomeIcon icon={faParking} />)
          }
            <p>주차기능 유무</p>
          </div>
          <div className="icon">
          {
             String(props.info.workerExist)=="true"
            ? (<FontAwesomeIcon icon={faUsers} color="#f7a74a" />)
            : (<FontAwesomeIcon icon={faUsers} />)
          }
            <p>관리인력 유무</p>
          </div>
          <div className="icon">
          {
            String(props.info.canPickup)=="true"
            ? (<FontAwesomeIcon icon={faTruck} color="#f7a74a" />)
            : (<FontAwesomeIcon icon={faTruck} />)
          }
            <p>픽업 서비스 유무</p>
          </div>
          <div className="icon">
            {
              String(props.info.airConditioningType)!="NONE"
              ? (<FontAwesomeIcon icon={faThermometerThreeQuarters} color="#f7a74a" />)
              : (<FontAwesomeIcon icon={faThermometerThreeQuarters} />)
            }
            <p>냉난방 유무</p>
          </div>
        </div>
      </div>
       {/* 
      <div className="container-detail-explain">
        <p className="title">
          <FontAwesomeIcon icon={faChalkboardTeacher} /> 부가 설명
        </p>
        <textarea readOnly value="교통이 편리한 위치에 있어 입출고가 수월합니다." />
      </div> 

     <div className="container-detail-info">
        <p className="title">
          <FontAwesomeIcon icon={faInfoCircle} /> 창고 상세정보
        </p>
        <div className="keeping-type">
          <h1 className="subtitle">보관 형태</h1>
          <div className="keeping-type-icons">
            <div className="icon-button">
              <FontAwesomeIcon id="pallet-icon" icon={faPallet} color="#f7a74a" />
              <br />
              <p>팔레트</p>
            </div>
            <div className="icon-button">
              <FontAwesomeIcon id="box-icon" icon={faBoxOpen} />
              <br />
              <p>박스</p>
            </div>
            <div className="icon-button">
              <FontAwesomeIcon id="special-icon" icon={faTruckLoading} />
              <br />
              <p>특수물품</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ContainerDetail;
