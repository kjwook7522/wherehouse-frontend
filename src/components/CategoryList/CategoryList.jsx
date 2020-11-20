import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CategoryList.css";

function CategoryList({ category }) {
  let categoryName;
  const [containerList, setContainerList] = useState([]);

  switch (category) {
    case "cloth":
      categoryName = "의류";
      break;
    case "cosmetic":
      categoryName = "화장품";
      break;
    case "furniture":
      categoryName = "가구";
      break;
    case "general":
      categoryName = "잡화";
      break;
    case "food":
      categoryName = "음식";
      break;
    case "jewerly":
      categoryName = "악세서리";
      break;
    default:
      break;
  }

  const changeTimeType = time => {
    const [hour, minute, second] = time.split(":");
    return hour + ":" + minute;
  }

  useEffect(() => {
    axios.get("/warehouses/agency").then(res => {
      setContainerList(res.data.warehouses);
    });
  }, []);

  return (
    <section id="category-list">
      <h1>{categoryName} 리스트</h1>
      <div className="category-flex">
        {containerList.map(container => (
          <div key={container.warehouseId} className="flex-item">
            <img src={container.imageUrl} alt="storage-item" />
            <div className="item-content">
              <h1>{container.name}</h1>
              <h2>{container.address}</h2>
              <div className="type-and-condition">
                <span>상온 창고</span>
                <span>위험 창고</span>
                <span>Fulfillment</span>
              </div>
              <div className="running-time">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
