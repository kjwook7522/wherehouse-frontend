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
          <FontAwesomeIcon icon={faClipboard} color="#eebb4d" size="6x" />
          <h2>가장 알맞는 창고를 찾아드려요</h2>
          <ul className="content-list">
            <li>지역, 업종 별 맞춤형 서비스</li>
            <li>창고 별 견적 비교 서비스</li>
            <li>미팅, 계약 등 후속 지원 서비스</li>
          </ul>
          <p>상단 [바로 시작하기] 클릭!</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faBox} color="#eebb4d" size="6x" />
          <h2>원하는 지역을 검색해보세요.</h2>
          <ul className="content-list">
            <li>일반 보관 창고부터, 3PL, 풀필먼트 물류대행 창고까지 확인할 수 있습니다.</li>
            <li>견적 미팅 요청하기를 통해 빠른 업체컨택이 가능합니다.</li>
          </ul>
        </li>
        <li>
          <FontAwesomeIcon icon={faTruckLoading} color="#eebb4d" size="6x" />
          <h2>화주가 필요하신가요?</h2>
          <ul className="content-list">
            <li>가장 적합한 화주 매칭 서비스</li>
            <li>반창고 플랫폼을 통한 홍보 서비스</li>
            <li>[창고가 필요해요] 게시판 열람 권한 부여</li>
          </ul>
          <p>하단 연락처를 통해 문의주세요</p>
        </li>
      </ul>
    </div>

    <div className='detail'>
      <ul className='detail-name'>
        <li className='detail-item bg-navy bg-1'>
          {/* <img src="/asset/images/description-image/main-des-1.jpg" alt="des-1"/> */}
          <div className='detail-content' data-aos="fade-up" data-aos-duration="800">
            <h1>3PL, 4PL 풀필먼트...</h1>
            <h1>창고 하나 찾는데 뭐가 이렇게 복잡한지...</h1>
            <h2><b>여러분에게 알맞는 최적의 물류 파트너를 지원해 드립니다.</b></h2>
            <br />
            <Link to='/'><button style={{backgroundColor: '#96bb7c'}} onClick={warningMessage}>바로 시작하기</button></Link>
          </div>
        </li>
        <li className='detail-item reverse bg-2'>
          {/* <img src="/asset/images/description-image/main-des-2.jpg" alt="des-2"/> */}
          <div className='detail-content' data-aos="fade-up" data-aos-duration="800">
            <h1>난 근처면 좋아! 직접 찾아보고 싶어!</h1>
            <h2><b>그렇다면, 검색하기를 통해 가장 가까운 창고를 찾아보세요.</b></h2>
            <br />
            <Link to='/site'><button style={{backgroundColor: '#eebb4d'}}>지도 검색하기</button></Link>
          </div>
        </li>
        <li className='detail-item bg-navy bg-3'>
          {/* <img src="/asset/images/description-image/main-des-3.jpg" alt="des-1"/> */}
          <div className='detail-content' data-aos="fade-up" data-aos-duration="800">
            <h1>반창고와 함께할 물류 파트너를 찾습니다.</h1>
            <h2><b>창고 등록을 통해 반창고와 함께하세요.</b></h2>
            <br />
            <Link to='/'><button style={{backgroundColor: '#15b7b9'}} onClick={warningMessage}>창고 등록하기</button></Link>
          </div>
        </li>
      </ul>
    </div>
  </div>
}

export default MainDescription;