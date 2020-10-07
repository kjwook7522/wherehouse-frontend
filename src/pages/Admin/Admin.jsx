import React, { PureComponent } from 'react';
import "./Admin.css"
import axios from "axios"
class Admin extends PureComponent {
  constructor(){
    super();
    this.state={
      header:{//이건 이름 바꿔도됨 아래는 안됨
         headers:{Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTYwMjA1Njg4MCwiZXhwIjoxNjAyNDAyNDgwfQ.paLSmGhw8vDSuKXAH-BPAGzpXcpV7bwjUVH4hCq2XBM '}
      }
    }
    let name;
    let types = ["ROOM_TEMPERATURE"];
    let serviceType = "GENERAL";
    let landArea;
    let totalArea;
    let openAt;
    let closeAt;
   // "availableDays;
   let availableTimeDetail;
   let latitude;
   let longitude;
   let address;
   let addressDetail;
   let description;
   let cctvExist;
   let doorLockExist;
   let securityExist;
   let securityCompanyName=" ";
   let insuranceExist;
   let insuranceName=" ";
   let parkExist;
   let parkingScale;
   let workerExist;
   let pickupExist;
   let airConditioningType="NONE";
    this.submission=this.submission.bind(this);
    this.inputAll=this.inputAll.bind(this);
  }
  submission(e){
    e.preventDefault();
    console.log(this.state);
    axios.post("/warehouses",
    {
      "name" : this.name,
      "types" : this.types,
      "serviceType" : this.serviceType,
      "landArea" : this.landArea,
      "totalArea" : this.totalArea,
      "openAt" : this.openAt,
      "closeAt" : this.closeAt,
      //"availableDays" : this.availableDays,
      "availableTimeDetail" : this.availableTimeDetail,
      "location" : {
          "latitude" :  this.latitude,
          "longitude" : this.longitude
      },
      "address" : this.address,
      "addressDetail" : this.addressDetail,
      "description" : this.description,
      "cctvExist" : this.cctvExist,
      "lockExist" : this.lockExist,
      "securityExist" : this.securityExist,
      "securityCompanyName" : this.securityCompanyName,
      "insuranceExist" : this.insuranceExist,
      "insuranceName" : this.insuranceName,
      "parkExist" : this.parkExist,
      "parkingScale" : this.parkingScale,
      "workerExist" : this.workerExist,
      "pickupExist" : this.pickupExist,
      "airConditioningType" : this.airConditioningType,
      "attachmentIds":[], //이떄 types 초기값이랑 그런거에 다 배열로 주었기 때문에 보낼떄는 다시[]로 감싸면 안되는거였음 그래서 계속 에러났던것
  }
, this.state.header)
}

inputAll(e){
    switch(e.target.id){
    case "name": this.name=e.target.value;break;
    case "types": this.types=[e.target.value];break;
    case "serviceType": this.serviceType=e.target.value;break;
    case "landArea": this.landArea=e.target.value;break;
    case "totalArea": this.totalArea=e.target.value;break;
    case "openAt": this.openAt=e.target.value;break;
    case "closeAt": this.closeAt=e.target.value;break;
    case "availableDays": this.availableDays=e.target.value;break;
    case "availableTimeDetail": this.availableTimeDetail=e.target.value;break;
    case "latitude": this.latitude=e.target.value;break;
    case "longitude": this.longitude=e.target.value;break;
    case "address": this.address=e.target.value;break;
    case "addressDetail": this.addressDetail=e.target.value;break;
    case "description": this.description=e.target.value;break;
    case "cctvExist": this.cctvExist=e.target.value;break;
    case "lockExist": this.lockExist=e.target.value;break;
    case "securityExist": this.securityExist=e.target.value;break;
    case "securityCompanyName": this.securityCompanyName=e.target.value;break;
    case "insuranceExist": this.insuranceExist=e.target.value;break;
    case "insuranceName": this.insuranceName=e.target.value;break;
    case "parkExist": this.parkExist=e.target.value;break;
    case "parkingScale": this.parkingScale=e.target.value;break;
    case "workerExist": this.workerExist=e.target.value;break;
    case "pickupExist": this.pickupExist=e.target.value;break;
    case "airConditioningType": this.airConditioningType=e.target.value;break;
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
              <label>서비스 타입</label>
                <select id="serviceType" name="serviceType" onChange={this.inputAll}>
                  <option value="GENERAL">일반</option>
                  <option value="AGENCY">에이전시</option>
                </select>
            </td>
          </tr>
          <tr>
            <td><label>창고종류</label></td>
              <td id="types" name="types" onChange={this.inputAll}>
                <label>상온창고</label>
                <input type="checkbox" value="ROOM_TEMPERATURE"></input>
                <label>저온창고</label>
                 <input type="checkbox" value="LOW_TEMPERATURE"></input>
                <label>보세창고</label>
                <input type="checkbox" value="BONDED"></input>
                <label>야외창고</label><br/>
                 <input type="checkbox" value="SAVAGE"></input>
                <label>위험물창고</label>
                <input type="checkbox" value="HAZARDOUS"></input>
                <label>셀프창고</label>
                <input type="checkbox" value="SELF_STORAGE"></input>
                <label>컨테이너</label>
                <input type="checkbox" value="CONTAINER"></input>
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
            <td id="availableDays" name="availableDays" onChange={this.inputAll}>
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
            <input type="radio" name="cctv" value="true"/>있음
            <input type="radio" name="cctv" value="false"/>없음
          </td>
        <td>
          <label>잠금장치 존재유무</label>
          <input type="radio" name="lock" value="true"/>있음
          <input type="radio" name="lock" value="false"/>없음
        </td>
          </tr>
          <tr>
           <td>
           <label>경비업체 존재유무</label>
          <input type="radio" name="security" value="true"/>있음
         <input type="radio" name="security" value="false"/>없음
          </td>
        <td>
        <label>경비업체 이름</label>
        <input type="text" id="securityCompanyName" name="securityCompanyName" onChange={this.inputAll}/>
        </td>
          </tr>
          <tr>
           <td>           
          <label>보험 가입유무</label>
          <input type="radio" name="insurance" value="true"/>있음
          <input type="radio" name="insurance" value="false"/>없음
          </td>
        <td>
        <label>보험사 이름</label>
        <input type="text" id="insuranceName" name="insuranceName" onChange={this.inputAll}/>
        </td>
          </tr>
          <tr>
           <td>
             
        <label>방문시 주차가능유무</label>
        <input type="radio" name="park" value="true"/>있음
        <input type="radio" name="park" value="false"/>없음
          </td>
        <td>
        <label>주차장 규모</label>
        <input type="number" id="parkingScale" name="parkingScale" onChange={this.inputAll}/>
        </td>
          </tr>
          <tr>
           <td>
           <label>관리인력 존재유무</label>
          <input type="radio" name="worker" value="true"/>있음
           <input type="radio" name="worker" value="false"/>없음
          </td>
        <td>
        <label>픽업 서비스유무</label>
        <input type="radio" name="pickup" value="true"/>있음
        <input type="radio" name="pickup" value="false"/>없음
        </td>
          </tr>
          <tr>
           <td>
           <label>냉난방 정보</label>
           </td>
           <td id="airConditioningType" name="airConditioningType" onChange={this.inputAll}>
                <label>없음</label>
                <input type="checkbox" value="NONE"></input>
                <label>난방</label>
                 <input type="checkbox" value="HEATING"></input>
                <label>냉방</label>
                <input type="checkbox" value="COOLING"></input>
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