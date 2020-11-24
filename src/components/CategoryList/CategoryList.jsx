import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CategoryList.css";

function CategoryList({ category }) {
  let categoryName = "";
  let apiPath = "";
  const [containerList, setContainerList] = useState([]);

  switch (category) {
    case "cloth":
      categoryName = "의류";
      apiPath = "CLOTH";
      break;
    case "cosmetic":
      categoryName = "화장품";
      apiPath = "COSMETIC";
      break;
    case "furniture":
      categoryName = "가구";
      apiPath = "FURNITURE";
      break;
    case "general":
      categoryName = "잡화";
      apiPath = "GENERAL_MERCHANDISE";
      break;
    case "food":
      categoryName = "음식";
      apiPath = "TEMPERATURE_SENSITIVE";
      break;
    case "jewerly":
      categoryName = "악세서리";
      apiPath = "ACCESSORY";
      break;
    default:
      break;
  }

  const changeConditionName = condition => {
    switch (condition) {
      case "ROOM_TEMPERATURE":
        return "상온창고";
      case "LOW_TEMPERATURE":
        return "저온창고";
      case "BONDED":
        return "보세창고";
      case "SAVAGE":
        return "야외창고";
      case "HAZARDOUS":
        return "위험창고";
      case "SELF_STORAGE":
        return "셀프창고";
      case "CONTAINER":
        return "컨테이너";
      default:
        return "ERROR";
    }
  };

  const changeTypeName = type => {
    switch (type) {
      case "THREEPL":
        return "3PL";
      case "FULFILLMENT":
        return "풀필먼트";
      default:
        return "ERROR";
    }
  };

  // const changeTimeType = time => {
  //   const [hour, minute, second] = time.split(":");
  //   return hour + ":" + minute;
  // };
  console.log(containerList);

  useEffect(() => {
    axios.get(`/warehouses/agency/${apiPath}`).then(res => {
      if (res.status == 204) {
        alert("창고가 없습니다.");
      } else {
        setContainerList(res.data.warehouses);
      }
    });
  }, []);

  return (
    <section id="category-list">
      <h1>{categoryName} 리스트</h1>
      <div className="category-flex">
        {containerList.map(container => (
          <div key={container.warehouseId} className="flex-item">
            <img src={container.mainImageUrl} alt="storage-item" />
            <div className="item-content">
              <h1>{container.name}</h1>
              <h2>
                {container.address}
                <span>{changeConditionName(container.warehouseCondition[0])}</span>
                <span>{changeTypeName(container.warehouseType)}</span>
              </h2>

              <div>
                <div className="min-release">
                  <span>{container.minReleasePerMonth}</span> /월 최소 출고량
                </div>
                <div className="delivery-and-area">
                  <div className="delivery">
                    택배사
                    <br />
                    대한통운
                  </div>
                  <div className="area">
                    평수
                    <br />
                    3,000평
                  </div>
                </div>
              </div>

              {/* <div className="type-and-condition">
                <span>상온 창고</span>
                <span>위험 창고</span>
                <span>Fulfillment</span>
              </div> */}
              {/* <div className="running-time">
                <div className="open-time">
                  여는시간
                  <br />
                  {changeTimeType(container.openAt)}
                </div>
                <div className="close-time">
                  닫는 시간
                  <br />
                  {changeTimeType(container.closeAt)}
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
