import React, { PureComponent } from 'react';
import "./Admin.css"
import axios from "axios"
class Admin extends PureComponent {
  constructor(){
    super();
    this.state={
      header:{//이건 이름 바꿔도됨 아래는 안됨
         headers:{Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTYwMTI3OTg5NiwiZXhwIjoxNjAxNjI1NDk2fQ.CNL2-KWSOu2-i1XCrVKadFpXHQljl4107dtosPFieKY'}
      },
    "name":" ",
    "types" : ["ROOM_TEMPERATURE"],
    "serviceType" : "GENERAL",
    "landArea" : " ",
    "totalArea" : " ",
    "openAt" : " ",
    "closeAt" : " ",
    "availableDays" : " ",
    "availableTimeDetail" : " ",
    "latitude" : " ",
    "longitude" : " ",
    "address" : " ",
    "addressDetail" : " ",
    "description" : " ",
  }
    this.submission=this.submission.bind(this);
    this.inputAll=this.inputAll.bind(this);
  }
  submission(e){
    e.preventDefault();
    console.log(this.state);
    axios.post("/warehouses",
    {
      "name" : this.state.name,
      "landArea" : this.state.landArea,
      "totalArea" : this.state.totalArea,
      "openAt" : this.state.openAt,
      "closeAt" : this.state.closeAt,
     // availableDays : this.state.availableDays,
      "availableTimeDetail" : this.state.availableTimeDetail,
      "location" : {
          "latitude" :  this.state.latitude,
          "longitude" : this.state.longitude
      },
      "address" : this.state.address,
      "addressDetail" : this.state.addressDetail,
      "description" : this.state.description,
      "attachmentIds":[],
      "types" : this.state.types,
      "serviceType" : this.state.serviceType,
  }
, this.state.header)
}

inputAll(e){
  switch(e.target.id) {
    case "name": this.setState({name:e.target.value});break;
    case "types" : this.setState({types:[e.target.value]});break; //여기 배열표시 해서 넣어줬어햐했음
    case "serviceType" : this.setState({serviceType:e.target.value});break;
    case "landArea" :this.setState({landArea:e.target.value});break;
    case "totalArea" : this.setState({totalArea:e.target.value});break;
    case "openAt" : this.setState({openAt:e.target.value});break;
    case "closeAt" : this.setState({closeAt:e.target.value});break;
    case "availableDays" :  this.setState({availableDays:e.target.value});break;
    case "availableTimeDetail" : this.setState({availableTimeDetail:e.target.value});break;
    case "latitude" : this.setState({latitude:e.target.value});break;
    case "longitude" :this.setState({longitude:e.target.value});break;
    case "address" : this.setState({address:e.target.value});break;
    case "addressDetail" : this.setState({addressDetail:e.target.value});break;
    case "description" :this.setState({description:e.target.value});break;
  }
}

    render() { 
        return (
            <div className="Admin">
              <h1>[  관리자 페이지  ]</h1>
              <h5>*는 필수항목입니다</h5><br/>
      <form onSubmit={this.submission}>
        <table border="1px solid gray">
        <tbody>
          <tr>
            <td>
              <label>창고 이름*</label>
              <input id="name" name="name" type="text" onChange={this.inputAll} required autoFocus/>
            </td>
            <td>
              <label>창고종류</label>
               <select id="types" name="types" onChange={this.inputAll}>
                <option value="ROOM_TEMPERATURE">상온창고</option>
                <option value="LOW_TEMPERATURE">저온창고</option>
                <option value="BONDED">보세창고</option>
                <option value="SAVAGE">야외창고</option>
                <option value="HAZARDOUS">위험물창고</option>
                <option value="SELF_STORAGE">셀프창고</option>
                <option value="CONTAINER">컨테이너</option>
              </select>
              
              <label>서비스 타입</label>
                <select id="serviceType" name="serviceType" onChange={this.inputAll}>
                  <option value="GENERAL">일반</option>
                  <option value="AGENCY">에이전시</option>
                </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>창고 평수</label>
              <input type="number" id="landArea" name="landArea" onChange={this.inputAll}/>
            </td>
            <td>
             <label>전체 평수</label>
             <input type="number" id="totalArea" name="totalArea" onChange={this.inputAll}/>
            </td>
          </tr>
          <tr>
            <td>
              <label>여는시간</label>
              <input id="openAt" name="openAt" type="text" placeholder="00:00:00" onChange={this.inputAll} />
            </td>
            <td>
              <label>닫는시간</label>
              <input id="closeAt" name="closeAt" type="text" placeholder="00:00:00" onChange={this.inputAll}/>
            </td>
          </tr>
          <tr>
            <td><label>사용 가능한 요일</label></td>
            <td id="availableDays" onChange={this.inputAll}>
                <label>일</label>
                <input type="checkbox" value="1"></input>
                <label>월</label>
                 <input type="checkbox" value="2"></input>
                <label>화</label>
                <input type="checkbox" value="4"></input>
                <label>수</label>
                 <input type="checkbox" value="8"></input>
                <label>목</label>
                <input type="checkbox" value="16"></input>
                <label>금</label>
                <input type="checkbox" value="32"></input>
                <label>토</label>
                <input type="checkbox" value="64"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>창고 운영시간 추가 정보</label>
            </td>
            <td>
             <input id="availableTimeDetail" name="availableTimeDetail" type="text" onChange={this.inputAll}/>
            </td>
          </tr>
        </tbody>
        </table>
        <br/>
        <div className="location">
        <p>
          위도 경도는 여기를 참고해주세요{" "}
          <a href="http://lalo.esran.com" target="_blank">
            위도경도찾기 사이트
          </a>
        </p>
        <label>위도*</label>
        <input type="text" id="latitude" name="latitude" required onChange={this.inputAll}/>
        <label>경도*</label>
        <input type="text" id="longitude" name="longitude" required onChange={this.inputAll}/>
        <br />
        <label>창고 주소*</label>
        <input id="address" name="address" type="text" required onChange={this.inputAll}/>
        <br />
        <label>상세 주소</label>
        <input id="addressDetail" name="addressDetail" type="text" onChange={this.inputAll}/>
        <br />
        <label>창고 설명</label>
        <input id="description" name="description" type="text" onChange={this.inputAll}/>
        </div>
        <br />

        <table border="1px solid gray">
          <tbody>
          <tr>
           <td>
             <label>CCTV존재유무</label>
            <input type="radio" name="cctv"/>있음
            <input type="radio" name="cctv"/>없음
          </td>
        <td>
          <label>잠금장치 존재유무</label>
          <input type="radio" name="lock"/>있음
          <input type="radio" name="lock"/>없음
        </td>
          </tr>
          <tr>
           <td>
           <label>경비업체 존재유무</label>
          <input type="radio" name="security"/>있음
         <input type="radio" name="security"/>없음
          </td>
        <td>
        <label>경비업체 이름</label>
        <input type="text"/>
        </td>
          </tr>
          <tr>
           <td>           
          <label>보험 가입유무</label>
          <input type="radio" name="insurance"/>있음
          <input type="radio" name="insurance"/>없음
          </td>
        <td>
        <label>보험사 이름</label>
        <input type="text" id="insuranceName" name="insuranceName"/>
        </td>
          </tr>
          <tr>
           <td>
             
        <label>방문시 주차가능유무</label>
        <input type="radio" name="park"/>있음
        <input type="radio" name="park"/>없음
          </td>
        <td>
        <label>주차장 규모</label>
        <input type="text" id="parkingScale" name="parkingScale"/>
        </td>
          </tr>
          <tr>
           <td>
           <label>관리인력 존재유무</label>
          <input type="radio" name="worker"/>있음
           <input type="radio" name="worker"/>없음
          </td>
        <td>
        <label>픽업 서비스유무</label>
        <input type="radio" name="pickup"/>있음
        <input type="radio" name="pickup"/>없음
        </td>
          </tr>
          <tr>
           <td>
           <label>냉난방 정보</label>
           </td>
           <td>
           <input type="text" id="airConditioningType" name="airConditioningType"/>
          </td>
          </tr>
          </tbody>
        </table>
          <br/>
        <label>창고 이미지 url 목록</label>
        //
        <br/>
        <button type="submit">제출</button>
      </form>
    </div>
  );
    }
}

export default Admin;