import React from "react";
import { Link } from "react-router-dom";
import "./MainCategory.css";

function ManiCategory({ push }) {
  const goDetail = e => {
    switch(e.currentTarget.id) {
      case "cosmetic":
        push("/category/cosmetic");
        return;
      case "cloth":
        push("/category/cloth");
        return;
      case "furniture":
        push("/category/furniture");
        return;
      case "general":
        push("/category/general");
        return;
      case "food":
        push("/category/food");
        return;
      case "jewerly":
        push("/category/jewerly");
        return;
      default:
        return;
    }
  }

  return (
    <section id="main-category">
      <h1>업종별 파트너</h1>
      <div className="category-flex">
        <div id="cosmetic" className="category-item" onClick={goDetail}>
          <div className="image-wrapper">
            <img src="/asset/images/cosmetic.jpg" alt="category" />
          </div>
          <div className="description">
            <h1>화장품</h1>
            <h2>Cosmetics</h2>
            <h3>온도 유지가 가능하며, 작은 물품 하나하나 관리할 수 있는 물류 파트너</h3>
          </div>
        </div>
        <div id="cloth" className="category-item" onClick={goDetail}>
          <div className="image-wrapper">
            <img src="/asset/images/cloth.jpg" alt="category" />
          </div>
          <div className="description">
            <h1>의류</h1>
            <h2>Clothes</h2>
            <h3>온도 유지가 가능하며, 작은 물품 하나하나 관리할 수 있는 물류 파트너</h3>
          </div>
        </div>
        <div id="furniture" className="category-item" onClick={goDetail}>
          <div className="image-wrapper">
            <img src="/asset/images/furniture.jpg" alt="category" />
          </div>
          <div className="description">
            <h1>가구</h1>
            <h2>Furnitures</h2>
            <h3>온도 유지가 가능하며, 작은 물품 하나하나 관리할 수 있는 물류 파트너</h3>
          </div>
        </div>
        <div id="general" className="category-item" onClick={goDetail}>
          <div className="image-wrapper">
            <img src="/asset/images/general_merchandise.jpg" alt="category" />
          </div>
          <div className="description">
            <h1>잡화</h1>
            <h2>General Merchandises</h2>
            <h3>온도 유지가 가능하며, 작은 물품 하나하나 관리할 수 있는 물류 파트너</h3>
          </div>
        </div>
        <div id="food" className="category-item" onClick={goDetail}>
          <div className="image-wrapper">
            <img src="/asset/images/food.jpg" alt="category" />
          </div>
          <div className="description">
            <h1>음식</h1>
            <h2>Foods</h2>
            <h3>온도 유지가 가능하며, 작은 물품 하나하나 관리할 수 있는 물류 파트너</h3>
          </div>
        </div>
        <div id="jewerly" className="category-item" onClick={goDetail}>
          <div className="image-wrapper">
            <img src="/asset/images/jewerly.jpg" alt="category" />
          </div>
          <div className="description">
            <h1>악세서리</h1>
            <h2>Jewerly</h2>
            <h3>온도 유지가 가능하며, 작은 물품 하나하나 관리할 수 있는 물류 파트너</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManiCategory;
