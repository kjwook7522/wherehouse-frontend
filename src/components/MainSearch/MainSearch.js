import React from 'react';
import './MainSearch.css';

function MainSearch() {
  return <div className="main-display">
    <h1>
      WhereHouse에 오신 것을 환영합니다.
      <br />
      여러분에 창고를 등록해보세요!
    </h1>

    <form>
      <input name="search" placeholder="주소를 입력해주세요." />
      <button>검색</button>
    </form>

    <h2>
      도움이 필요하세요?
      <br />
      010-xxxx-xxxx
    </h2>
    <div className="bg"></div>
  </div>
}

export default MainSearch;