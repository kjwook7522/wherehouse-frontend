import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import sha256 from "crypto";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = e => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        return;
      case "password":
        setPassword(e.target.value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const hashCode = sha256.createHash("sha256").update(password).digest("hex");
    const body = {
      email,
      password: hashCode,
    };

    if (!checkEmail(email)) {
      alert("이메일 형식이 올바르지 못합니다.");
      return;
    }

    axios
      .post("/users/sign-in", body)
      .then(res => {
        alert(`${res.data.User.name}님 환영합니다.`);
        saveToken({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        });
        window.location.replace("/");
      })
      .catch(error => {
        if (error.response.status === 404) {
          alert("이메일주소나 비밀번호가 일치하지 않습니다.");
        } else {
          alert(`로그인 오류: ${error.response.statusText}(${error.response.status})`);
        }
        window.location.reload();
      });
  };

  const checkEmail = email => {
    let form = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (form.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const saveToken = tokenSet => {
    localStorage.setItem("AccessToken", tokenSet.accessToken);
    localStorage.setItem("RefreshToken", tokenSet.refreshToken);
    localStorage.setItem("logined", true);
  };

  return (
    <div id="login">
      <div className="header">
        <img src="/join-logo.png" alt="logo" />
      </div>
      <div className="content">
        <div className="login-input-wrapper">
          <h1>로그인</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <input name="email" type="email" placeholder="이메일" onChange={handleInput} required />
            <input name="password" type="password" placeholder="비밀번호" onChange={handleInput} required />
            <button>로그인</button>
          </form>
        </div>
      </div>

      {/* <h1>임시 로그인 확인</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input name="email" type="email" placeholder="이메일" onChange={handleInput} required />
        <input name="password" type="password" placeholder="비밀번호" onChange={handleInput} required />
        <button>로그인</button>
      </form> */}
    </div>
  );
}

export default Login;
