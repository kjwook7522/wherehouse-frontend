import React from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import './MainDescription.css';

function MainDescription() {
  const warningMessage = () => {
    message.warning('아직 준비중입니다.');
  };

  return <div className="description">
    <div className="title">
      <h1>복잡한 물류를 한번에</h1>
    </div>

    <div className="content">
      <ul className="item-name">
        <li>
          <FontAwesomeIcon icon={faClipboard} color="#07689f" size="6x" />
          <h2>가장 알맞는 창고를 찾아드려요</h2>
          <p>
            그들의 있음으로써 소리다.이것은 천지는 가장 사라지지 교향악이다. 따뜻한 사람은 이것은 따뜻한 되려니와, 간에 속에 구할 없으면 사막이다. 싹이 목숨을 과실이 이것이다. 인간이 목숨을 우리의 자신과 풍부하게 같이, 속잎나고, 가는 풍부하게 위하여서. 품에 일월과 부패를 쓸쓸하랴? 목숨이 낙원을 위하여 말이다. 청춘 위하여서 품에 교향악이다.
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faBox} color="#07689f" size="6x" />
          <h2>원하는 지역을 검색해보세요.</h2>
          <p>
            그들의 있음으로써 소리다.이것은 천지는 가장 사라지지 교향악이다. 따뜻한 사람은 이것은 따뜻한 되려니와, 간에 속에 구할 없으면 사막이다. 싹이 목숨을 과실이 이것이다. 인간이 목숨을 우리의 자신과 풍부하게 같이, 속잎나고, 가는 풍부하게 위하여서. 품에 일월과 부패를 쓸쓸하랴? 목숨이 낙원을 위하여 말이다. 청춘 위하여서 품에 교향악이다.
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faTruckLoading} color="#07689f" size="6x" />
          <h2>화주가 필요하신가요?</h2>
          <p>
            그들의 있음으로써 소리다.이것은 천지는 가장 사라지지 교향악이다. 따뜻한 사람은 이것은 따뜻한 되려니와, 간에 속에 구할 없으면 사막이다. 싹이 목숨을 과실이 이것이다. 인간이 목숨을 우리의 자신과 풍부하게 같이, 속잎나고, 가는 풍부하게 위하여서. 품에 일월과 부패를 쓸쓸하랴? 목숨이 낙원을 위하여 말이다. 청춘 위하여서 품에 교향악이다.
          </p>
        </li>
      </ul>
    </div>

    <div className='detail'>
      <ul className='detail-name'>
        <li className='detail-item bg-navy'>
          <img src="/images/description-image/main-des-1.jpg" alt="des-1"/>
          <div className='detail-content'>
            <h1>3PL, 4PL 풀필먼트...</h1>
            <h1>창고 하나 찾는데 뭐가 이렇게 복잡한지...</h1>
            <h2><b>여러분에게 알맞는 최적의 물류 파트너를 지원해 드립니다.</b></h2>
            <br />
            <button style={{backgroundColor: '#96bb7c'}} onClick={warningMessage}>바로 시작하기</button>
          </div>
        </li>
        <li className='detail-item reverse'>
          <img src="/images/description-image/main-des-2.jpg" alt="des-2"/>
          <div className='detail-content'>
            <h1>난 근처면 좋아! 직접 찾아보고 싶어!</h1>
            <h2><b>그렇다면, 검색하기를 통해 가장 가까운 창고를 찾아보세요.</b></h2>
            <br />
            <Link to='/site'><button style={{backgroundColor: '#eebb4d'}}>지도 검색하기</button></Link>
          </div>
        </li>
        <li className='detail-item bg-navy'>
          <img src="/images/description-image/main-des-3.jpg" alt="des-1"/>
          <div className='detail-content'>
            <h1>반창고와 함께할 물류 파트너를 찾습니다.</h1>
            <h2><b>창고 등록을 통해 반창고와 함께하세요.</b></h2>
            <br />
            <button style={{backgroundColor: '#15b7b9'}} onClick={warningMessage}>창고 등록하기</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
}

export default MainDescription;