import React from "react";
import "./MainSearch.css";

function MainSearch() {

  return (
    <section id="main-search">
      <form className="search-form">
        <h1>파트너 찾기</h1>
        <input type="text" placeholder="원하는 지역을 검색해주세요" />
      </form>
    </section>
  );
}

export default MainSearch;
