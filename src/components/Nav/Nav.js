import React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
// import logo from '../../images/logo_cut.png'

function Nav({type}) {
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
      <p>창고중개플랫폼 반창고</p>
    </div>
    <div className="nav-right">
      <FontAwesomeIcon icon={faBars} color="#5F99D7" />
      <a className="box" href="/">창고등록하기</a>
      <a href="/">ABOUT US</a>
      <a href="/">회원가입</a>
      <a href="/">로그인</a>
    </div>
  </div>
}

export default Nav;