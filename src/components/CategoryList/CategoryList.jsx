import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./CategoryList.css";

function CategoryList({ category }) {
  let categoryName;
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

  useEffect(() => {
    axios.get("/warehouses/agency")
      .then(res => {
        console.log(res);
      })
  }, []);

  return (
    <section id="category-list">
      <h1>{categoryName} 리스트</h1>
      <div className="category-flex">
        <div className="flex-item">
          <img src="/asset/images/description-image/main-des-1.jpg" alt="storage-item" />
          <div className="item-content">
            <h1>오픈된 창고 팝니다</h1>
            <h2>경기도 성남시 홍길구 아무개동 208-46</h2>
            <div className="type-and-condition">
              <span>상온 창고</span>
              <span>위험 창고</span>
              <span>Fulfillment</span>
            </div>
            <div className="running-time">
              <div className="open-time">
                여는시간
                <br />
                09:00
              </div>
              <div className="close-time">
                닫는 시간
                <br />
                18:00
              </div>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <img src="/asset/images/description-image/main-des-2.jpg" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="/asset/images/description-image/main-des-3.jpg" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="/asset/images/description-image/main-des-1.jpg" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="/asset/images/description-image/main-des-2.jpg" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="/asset/images/description-image/main-des-3.jpg" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="/asset/images/description-image/main-des-1.jpg" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="/asset/images/description-image/main-des-2.jpg" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="/asset/images/description-image/main-des-3.jpg" alt="storage-item" />
        </div>
      </div>
    </section>
  );
}

export default CategoryList;
