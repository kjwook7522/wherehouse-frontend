import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import { message } from "antd";

function Nav({ type }) {
  const warningMessage = () => {
    message.warning("아직 준비중입니다.");
  };

  document.
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("logined"))
  );
  const logout = () => {
    setLogin(false);
    localStorage.setItem("logined", false);
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("RefreshToken");
    alert("로그아웃 되었습니다");
    window.location.replace("/");
  };

  useEffect(() => {
    // change nav bg color by scroll
    const navBar = document.querySelector(".nav");

    if (type === "transparent") {
      window.addEventListener("scroll", () => {
        let nowScroll = document.documentElement.scrollTop;
        if (nowScroll > 100)
          navBar.style.backgroundColor = "rgba(255, 255, 255, 1)";
        else navBar.style.backgroundColor = "transparent";
      });
    } else if (type === "fixed") {
      navBar.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
      console.log("Error: wrong type value.");
    }
  }, [type]);

  return (
    <div className="nav">
      <div className="nav-left">
        <Link to="/">BANCHANGO</Link>
      </div>
      <div className="nav-right">
        <FontAwesomeIcon icon={faBars} color="#eebb4d" />
        <a onClick={warningMessage} className="box">
          창고등록하기
        </a>
        <a onClick={warningMessage}>ABOUT US</a>
        {login ? null : <Link to="/join">회원가입</Link>}
        {login ? (
          <a onClick={logout}>로그아웃</a>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
