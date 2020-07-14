import React from 'react';
import './Nav.css';
// import logo from '../../images/logo_cut.png'

function Nav() {
  return <div className="nav">
    <div className="nav-left">
      {/* <img src={logo} alt="logo" /> */}
      <p>Where House logo</p>
    </div>
    <div className="nav-right">
      <a href="#">회원가입</a>
      <a href="#">로그인</a>
    </div>
  </div>
}

export default Nav;