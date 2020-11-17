import React from "react";
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

  return (
    <section id="category-list">
      <h1>{categoryName} 리스트</h1>
      <div className="category-flex">
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
          <img src="" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="" alt="storage-item" />
        </div>
        <div className="flex-item">
          <img src="" alt="storage-item" />
        </div>
      </div>
    </section>
  );
}

export default CategoryList;
