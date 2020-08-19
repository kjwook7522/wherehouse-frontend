import React from "react";
import "./Join.css";
import { useState } from "react";

function Join() {
  //***** select type *****//
  const shipper = "shipper";
  const owner = "owner";
  const activeStyle = {
    backgroundColor: "#91d18b",
    color: "#fff",
  };
  const noneacticeStyle = {
    backgroundColor: "#fff",
    color: "#333",
  };
  const [type, setType] = useState({
    name: shipper,
    shipperStyle: activeStyle,
    ownerStyle: noneacticeStyle,
  });

  const changeOwnerType = () => {
    setType({
      name: owner,
      shipperStyle: noneacticeStyle,
      ownerStyle: activeStyle,
    });
  };
  const changeShipperType = () => {
    setType({
      name: shipper,
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
  const [telephone, setTelephone] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

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
      case "telephone":
        setTelephone(e.target.value);
        return;
      case "phone":
        setPhone(e.target.value);
        return;
      case "company":
        setCompany(e.target.value);
        return;
      default:
        return;
    }
  };

  const submitInput = () => {
    console.log(name, email, password, passwordConfirm, telephone, phone, company, type.name);
    // write api
  };

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
          <form className="join-form">
            <input name="name" type="text" placeholder="이름" onChange={handelInput} />
            <input name="email" type="email" placeholder="이메일" onChange={handelInput} />
            <input name="password" type="password" placeholder="비밀번호" onChange={handelInput} />
            <input name="password-confirm" type="password" placeholder="비밀번호 확인" onChange={handelInput} />
            <input name="telephone" type="text" placeholder="전화번호" onChange={handelInput} />
            <input name="phone" type="text" placeholder="휴대폰 번호" onChange={handelInput} />
            <input name="company" type="text" placeholder="회사 이름" onChange={handelInput} />
          </form>
          <button onClick={submitInput}>가입 완료</button>
        </div>
      </div>
    </div>
  );
}

export default Join;
