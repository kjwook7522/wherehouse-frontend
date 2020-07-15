import React from 'react';
import './Nav.css';
import { useEffect } from 'react';
// import logo from '../../images/logo_cut.png'

function Nav() {
  useEffect(() => {
    // change nav bg color by scroll
    const navBar = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
      let nowScroll = document.documentElement.scrollTop;
      if (nowScroll > 150)
        navBar.style.backgroundColor = "rgba(36, 35, 37, 0.9)"
      else
        navBar.style.backgroundColor = "transparent"
    })
  }, []);

  return <div className="nav">
    <div className="nav-left">
      {/* <img src={logo} alt="logo" /> */}
      <p>Where House logo</p>
    </div>
    <div className="nav-right">
      <a className="box" href="#">창고등록하기</a>
      <a href="#">ABOUT US</a>
      <a href="#">회원가입</a>
      <a href="#">로그인</a>
    </div>
  </div>
}

export default Nav;