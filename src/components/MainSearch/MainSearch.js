import React from 'react';
import { message } from 'antd';
import './MainSearch.css';

function MainSearch() {
  const warningMessage = () => {
    message.warning('아직 준비중입니다.');
  };

  return <div className="main-display">
    <h1>
      <span>창고가 필요하신가요?</span>
      <br />
      <span>어려울것 하나 없습니다.</span>
      <br />
      <span>반창고가 찾아드립니다.</span>
    </h1>

    <form>
      <input name="search" placeholder="주소를 입력해주세요." />
      <button>검색</button>
    </form>

    <button className="survey-btn" onClick={warningMessage}>바로 시작하기</button>
    <div className="bg"></div>
  </div>
}

export default MainSearch;