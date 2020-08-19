import React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import { message } from 'antd';
import { Link } from 'react-router-dom';
// import logo from '../../images/logo_cut.png'

function Nav({type}) {
  const warningMessage = () => {
    message.warning('아직 준비중입니다.');
  };

  useEffect(() => {
    // change nav bg color by scroll
    const navBar = document.querySelector('.nav');

    if (type === 'transparent') {
      window.addEventListener('scroll', () => {
        let nowScroll = document.documentElement.scrollTop;
        if (nowScroll > 100)
          navBar.style.backgroundColor = "rgba(36, 35, 37, 0.9)"
        else
          navBar.style.backgroundColor = "transparent"
      })
    } else if (type === 'fixed') {
      navBar.style.backgroundColor = "rgba(36, 35, 37, 0.9)"
    } else {
      console.log('Error: wrong type value.');
    }
  }, [type]);

  return <div className="nav">
    <div className="nav-left">
      {/* <img src={logo} alt="logo" /> */}
      <a href="/">창고중개플랫폼 반창고</a>
    </div>
    <div className="nav-right">
      <FontAwesomeIcon icon={faBars} color="#eebb4d" />
      <a onClick={warningMessage} className="box">창고등록하기</a>
      <a onClick={warningMessage}>ABOUT US</a>
      <Link to="/join">회원가입</Link>
      <Link to="/login">로그인</Link>
    </div>
  </div>
}

export default Nav;