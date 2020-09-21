import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainSearch.css';

function MainSearch({ push }) {
  const [search, setSearch] = useState("");

  const handleInput = e => {
    setSearch(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!search) {
      alert("주소를 입력해주세요.");
      return;
    }
    
    push(`/site?search=${search}`);
  }

  const gotoTypeform = () => {
    window.location.href = 'https://wherehouse2020.typeform.com/to/pBzRXCWE';
  }

  return <div className="main-display">
    <h1>
      <span style={{fontSize: 50}}>창고가 필요하신가요?</span><br />
      <span>반창고가 찾아드립니다.</span>
    </h1>

    <form onSubmit={handleSubmit}>
      <input name="search" placeholder="주소를 입력해주세요." onChange={handleInput} />
      <button>검색</button>
    </form>

    <button className="survey-btn" onClick={gotoTypeform}>바로 시작하기</button>
    <div className="bg"></div>
  </div>
}

export default MainSearch;