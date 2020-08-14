import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import "./ContainerRating.css";

function ContainerRating() {
  return (
    <div className="container-rating">
      <h1 className="title">평점</h1>
      <div className="container-rating-table">
        <div className="table-header">
          <h2>작성자</h2>
          <h2>평점</h2>
          <h3>코맨트</h3>
        </div>
        <ul className="table-content">
          <li>
            <h2>김재욱</h2>
            <h2>
              <FontAwesomeIcon icon={starRegular} />
              <FontAwesomeIcon icon={starRegular} />
              <FontAwesomeIcon icon={starRegular} />
              <FontAwesomeIcon icon={starSolid} />
              <FontAwesomeIcon icon={starSolid} />
            </h2>
            <h3>이 부분에 코맨트를 남겨주세요.</h3>
          </li>
          <li>
            <h2>오범수</h2>
            <h2>
              <FontAwesomeIcon icon={starRegular} />
              <FontAwesomeIcon icon={starSolid} />
              <FontAwesomeIcon icon={starSolid} />
              <FontAwesomeIcon icon={starSolid} />
              <FontAwesomeIcon icon={starSolid} />
            </h2>
            <h3>이 부분에 코맨트를 남겨주세요.</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContainerRating;
