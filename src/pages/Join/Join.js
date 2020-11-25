import React from "react";
import "./Join.css";
import { useState, useEffect, createRef } from "react";
import axios from "axios";
import sha256 from "crypto";

function Join() {
  //***** select type *****//
  const SHIPPER = "SHIPPER";
  const OWNER = "OWNER";
  const activeStyle = {
    backgroundColor: "#91d18b",
    color: "#fff",
  };
  const noneacticeStyle = {
    backgroundColor: "#fff",
    color: "#333",
  };
  const [type, setType] = useState({
    name: SHIPPER,
    shipperStyle: activeStyle,
    ownerStyle: noneacticeStyle,
  });

  const changeOwnerType = () => {
    setType({
      name: OWNER,
      shipperStyle: noneacticeStyle,
      ownerStyle: activeStyle,
    });
  };
  const changeShipperType = () => {
    setType({
      name: SHIPPER,
      shipperStyle: activeStyle,
      ownerStyle: noneacticeStyle,
    });
  };
  //**************************//

  //********* input **********//
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [telephoneNumber, setTelephone] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [companyName, setCompany] = useState("");
  const [confrim, setConfirm] = useState(false);
  const refConfirmSection = createRef();

  const handelInput = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        return;
      case "email":
        setEmail(e.target.value);
        return;
      case "password":
        setPassword(e.target.value);
        return;
      case "password-confirm":
        setPasswordConfirm(e.target.value);
        return;
      case "telephoneNumber":
        setTelephone(e.target.value);
        return;
      case "phoneNumber":
        setPhone(e.target.value);
        return;
      case "companyName":
        setCompany(e.target.value);
        return;
      default:
        return;
    }
  };

  const submitInput = e => {
    e.preventDefault();
    const hashCode = sha256.createHash("sha256").update(password).digest("hex");
    let body = {
      name,
      email,
      password: hashCode,
      telephoneNumber,
      phoneNumber,
      companyName,
      type: SHIPPER,
    };
    if (!telephoneNumber) {
      delete body.telephoneNumber;
    }
    if (!companyName) {
      delete body.companyName;
    }
    if (!confrim) {
      alert("비밀번호가 일치하지않습니다.")
      return;
    }

    axios
      .post("/users/sign-up", body)
      .then(res => {
        alert("회원가입에 성공하셨습니다");
        window.location.replace("/");
      })
      .catch(error => {
        if (error.response.status === 409) {
          alert("이미 가입된 이메일이 있습니다.")
        } else {
          alert("회원가입에 실패했습니다");
        }
        throw error;
      });
  };

  useEffect(() => {
    if (password === passwordConfirm) {
      refConfirmSection.current.innerText = "비밀번호가 일치합니다";
      refConfirmSection.current.style.color = "green";
      setConfirm(true);
    } else {
      refConfirmSection.current.innerText = "비밀번호가 일치하지 않습니다";
      refConfirmSection.current.style.color = "red";
      setConfirm(false)
    }
    if (password === "" || passwordConfirm === "") {
      refConfirmSection.current.innerText = "";
    }
  }, [password, passwordConfirm]);

  return (
    <div id="join">
      <div className="header">
        <img src="/join-logo.png" alt="logo" />
      </div>
      <div className="content">
        <div className="join-type-selector">
          <button onClick={changeShipperType} style={type.shipperStyle}>
            화주
          </button>
          <button onClick={changeOwnerType} style={type.ownerStyle}>
            창고주
          </button>
        </div>
        <div className="join-input-wrapper">
          <h1>회원가입</h1>
          <form onSubmit={submitInput} className="join-form">
            <input name="name" type="text" placeholder="이름" onChange={handelInput} required />
            <input name="email" type="email" placeholder="이메일" onChange={handelInput} required minLength="5" />
            <input name="password" type="password" placeholder="비밀번호" onChange={handelInput} required minLength="8" />
            <input name="password-confirm" type="password" placeholder="비밀번호 확인" onChange={handelInput} required minLength="8" />
            <p ref={refConfirmSection} id="confirm-section"></p>
            <input name="telephoneNumber" type="text" placeholder="전화번호 ('-'없이 숫자만 입력해주세요)" onChange={handelInput} />
            <input name="phoneNumber" type="text" placeholder="휴대폰 번호 ('-'없이 숫자만 입력해주세요)" onChange={handelInput} required />
            <input name="companyName" type="text" placeholder="회사 이름" onChange={handelInput} />
            <button>가입 완료</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Join;
