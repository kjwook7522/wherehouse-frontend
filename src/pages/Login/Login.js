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

    axios
      .post("/auth/sign-in", body)
      .then(res => {
        alert(`${res.data.user.name}님 환영합니다.`)
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

  return (
    <div id="login">
      <h1>임시 로그인 확인</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input name="email" type="email" placeholder="이메일" onChange={handleInput} />
        <input name="password" type="password" placeholder="비밀번호" onChange={handleInput} />
        <button>로그인</button>
      </form>
    </div>
  );
}

export default Login;
