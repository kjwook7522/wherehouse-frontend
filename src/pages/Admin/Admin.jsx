//todo : 체크박스들과 라디오박스들 그룹묶어서 폼에 보내기 
import React, { PureComponent } from 'react';
import "./Admin.css"
import axios from "axios"
class Admin extends PureComponent {
  constructor(){
    super();
    this.state={
      header:{//이건 이름 바꿔도됨 아래는 안됨
         headers:{Authorization:'Bearer '+localStorage.getItem("AccessToken")}
      },
    "name":" ",
    "types" : [],
    "typeFlag1":"false",
    "typeFlag2":"false",
    "typeFlag3":"false",
    "typeFlag4":"false",
    "typeFlag5":"false",
    "typeFlag6":"false",
    "typeFlag7":"false",
    "serviceType" : "GENERAL",
    "landArea" : " ",
    "totalArea" : " ",
    "openAt" : " ",
    "closeAt" : " ",
    "availableWeekdays" : 0,
    "availNum":0,
    "sunFlag":"false",
    "monFlag":"false",
    "tueFlag":"false",
    "wedFlag":"false",
    "thuFlag":"false",
    "friFlag":"false",
    "satFlag":"false",
    "availableTimeDetail" : " ",
    "latitude" : " ",
    "longitude" : " ",
    "address" : " ",
    "addressDetail" : " ",
    "description" : " ",
    "cctvExist" : "false",
    "doorLockExist" : "false",
    "securityCompanyExist" : "false",
    "securityCompanyName" :" ",
    "insuranceExist" : "false",
    "insuranceName" : " ",
    "parkExist" : "false",
    "parkingScale" : " ",
    "workerExist" : "false",
    "pickupExist" : "false",
    "airConditioningType" :"NONE",
    "cjFlag" : "false",
    "postOfficeFlag":"false",
    "hanjinFlag":"false",
    "coopangFlag":"false",
    "monthlyFee":0,
    "depositFee":0,
    "maintenanceFee":0,
    "minUseTerm":0,
    "type":" ",
    "mainItemTypes":[],
    "storageType":" ",
    "unit":" ",
    "cost":0,
    "paymentDescription":" ",
    "paymentType":" ",
    "deliveryCompanies":[],
  }
    this.submission=this.submission.bind(this);
    this.inputAll=this.inputAll.bind(this);
  }
  submission(e){
    e.preventDefault();
    // console.log(localStorage.getItem("AccessToken"))
    if(this.state.serviceType==="GENERAL")
    {
    axios.post("/warehouses",
    { 
      "name" : this.state.name,
      "types" : this.state.types,
      "serviceType" : this.state.serviceType,
      "landArea" : this.state.landArea,
      "totalArea" : this.state.totalArea,
      "openAt" : this.state.openAt,
      "closeAt" : this.state.closeAt, 
      "availableWeekdays" : this.state.availableWeekdays, 
      "availableTimeDetail" : this.state.availableTimeDetail,
      "location" : {
          "latitude" :  this.state.latitude,  
          "longitude" : this.state.longitude
      },
      "address" : this.state.address, 
      "addressDetail" : this.state.addressDetail, 
      "description" : this.state.description,
      "cctvExist" : this.state.cctvExist,
      "doorLockExist" : this.state.doorLockExist,
      "securityCompanyExist" : this.state.securityExist,
      "securityCompanyName" : this.state.securityCompanyName,
      "insuranceExist" : this.state.insuranceExist,
      "insuranceName" : this.state.insuranceName,
      "canPark" : this.state.canPark,
      "parkingScale" : this.state.parkingScale,
      "workerExist" : this.state.workerExist,
      "canPickup" : this.state.canPickup,
      "airConditioningType" : this.state.airConditioningType,
      "attachmentIds":[], //이때 types 초기값이랑 그런거에 다 배열로 주었기 때문에 보낼떄는 다시[]로 감싸면 안되는거였음 그래서 계속 에러났던것
      "additionalInfo":{
      "monthlyFee":this.state.monthlyFee,
      "depositFee":this.state.depositFee,
      "maintenanceFee":this.state.maintenanceFee,
      "minUseTerm":this.state.minUseTerm,
      }
  }
, this.state.header)}
else
{
axios.post("/warehouses",
{ 
  "name" : this.state.name,
  "types" : this.state.types,
  "serviceType" : this.state.serviceType,
  "landArea" : this.state.landArea,
  "totalArea" : this.state.totalArea,
  "openAt" : this.state.openAt,
  "closeAt" : this.state.closeAt, 
  "availableWeekdays" : this.state.availableWeekdays, 
  "availableTimeDetail" : this.state.availableTimeDetail,
  "location" : {
      "latitude" :  this.state.latitude,  
      "longitude" : this.state.longitude
  },
  "address" : this.state.address, 
  "addressDetail" : this.state.addressDetail, 
  "description" : this.state.description,
  "cctvExist" : this.state.cctvExist,
  "doorLockExist" : this.state.doorLockExist,
  "securityCompanyExist" : this.state.securityExist,
  "securityCompanyName" : this.state.securityCompanyName,
  "insuranceExist" : this.state.insuranceExist,
  "insuranceName" : this.state.insuranceName,
  "canPark" : this.state.canPark,
  "parkingScale" : this.state.parkingScale,
  "workerExist" : this.state.workerExist,
  "canPickup" : this.state.canPickup,
  "airConditioningType" : this.state.airConditioningType,
  "attachmentIds":[], //이때 types 초기값이랑 그런거에 다 배열로 주었기 때문에 보낼떄는 다시[]로 감싸면 안되는거였음 그래서 계속 에러났던것
  "additionalInfo":{
    "type":this.state.type,
    "mainItemTypes":this.state.mainItemTypes,
    "storageType":this.state.storageType,
    "payments":{
      "unit":this.state.unit,
      "cost":this.state.cost,
      "description":this.state.paymentDescription,
      "type":this.state.paymentType,
    },
    "deliveryCompanies":this.state.deliveryCompanies,
  }
}
, this.state.header)}
}
componentDidUpdate(){    

  //console.log("typesTemp(didUpdate) : "+this.state.typesTemp);
  console.log("types: "+this.state.types);
//  console.log("deliveryCompanies: "+this.state.deliveryCompanies);
  //console.log("cur(didUpdate): "+this.state.cur)
  // console.log("availableNum:"+this.state.availNum)
  //console.log("availableWeekDays:"+this.state.availableWeekdays)
  //console.log("type"+typeof(this.state.availableDays))
  //console.log(this.state.cjFlag);
  
}
inputAll(e){
  var typesTemp=this.state.types.slice();
 // var deliveryTemp=this.state.deliveryCompanies.slice();
  switch(e.target.name) {
    case "name": this.setState({name:e.target.value});break;
  {/*}  case "types" : var typesTemp = this.state.types.slice();
                  typesTemp.push(e.target.value);
  this.setState({types:typesTemp});break;*/}
    case "ROOM_TEMPERATURE" :if(this.state.typeFlag1==="false")
                             {
                              typesTemp.push("ROOM_TEMPERATURE");
                              this.setState({types:typesTemp});
                              this.setState({typeFlag1:"true"})
                            }
                            else
                            {
                             typesTemp=typesTemp.filter(type=>type!=="ROOM_TEMPERATURE");
                             this.setState({types:typesTemp});
                             this.setState({typeFlag1:"false"})
                            }
                             break;
    case "LOW_TEMPERATURE" : if(this.state.typeFlag2==="false")
                              {
                              typesTemp.push("LOW_TEMPERATURE");
                              this.setState({types:typesTemp});
                              this.setState({typeFlag2:"true"})
                             }
                              else
                              {
                               typesTemp=typesTemp.filter(type=>type!=="LOW_TEMPERATURE");
                               this.setState({types:typesTemp});
                               this.setState({typeFlag2:"false"})
                              }
                               break;
    case "BONDED" : if(this.state.typeFlag3==="false")
                    {
                      typesTemp.push("BONDED");
                      this.setState({types:typesTemp});
                      this.setState({typeFlag3:"true"})
                     }
                     else
                     {
                      typesTemp=typesTemp.filter(type=>type!=="BONDED");
                      this.setState({types:typesTemp});
                      this.setState({typeFlag3:"false"})  
                     }
                     break;
    case "SAVAGE" :if(this.state.typeFlag4==="false")
                   {
                     typesTemp.push("SAVAGE");
                      this.setState({types:typesTemp});
                      this.setState({typeFlag4:"true"})
                     }
                    else
                     {
                      typesTemp=typesTemp.filter(type=>type!=="SAVAGE");
                     this.setState({types:typesTemp});
                     this.setState({typeFlag4:"false"})  
                    }
                    break;
    case "HAZARDOUS" : if(this.state.typeFlag5==="false")
                    {
                     typesTemp.push("HAZARDOUS");
                      this.setState({types:typesTemp});
                      this.setState({typeFlag5:"true"})
                     }
                    else
                     {
                     typesTemp=typesTemp.filter(type=>type!=="HAZARDOUS");
                     this.setState({types:typesTemp});
                     this.setState({typeFlag5:"false"})  
                    }
                    break;
    case "SELF_STORAGE" : if(this.state.typeFlag6==="false")
                    {
                     typesTemp.push("SELF_STORAGE");
                      this.setState({types:typesTemp});
                      this.setState({typeFlag6:"true"})
                     }
                    else
                     {
                      typesTemp=typesTemp.filter(type=>type!=="SELF_STORAGE");
                     this.setState({types:typesTemp});
                     this.setState({typeFlag6:"false"})  
                    }
                    break;
    case "CONTAINER" : if(this.state.typeFlag7==="false")
                    {
                     typesTemp.push("CONTAINER");
                      this.setState({types:typesTemp});
                      this.setState({typeFlag7:"true"})
                     }
                    else
                     {
                      typesTemp=typesTemp.filter(type=>type!=="CONTAINER");
                     this.setState({types:typesTemp});
                     this.setState({typeFlag7:"false"})  
                    }
                    break;
    case "serviceType" : this.setState({serviceType:e.target.value});break;
    case "landArea" :this.setState({landArea:e.target.value});break;
    case "totalArea" : this.setState({totalArea:e.target.value});break;
    case "openAt" : this.setState({openAt:e.target.value});break;
    case "closeAt" : this.setState({closeAt:e.target.value});break;
    case "sunday":{if(this.state.sunFlag=="false")
                  {
                    this.setState({sunFlag:"true"});
                    this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                  }
                  else
                  {
                    this.setState({sunFlag:"false"});
                    this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                  }};break;
    case "monday": {if(this.state.monFlag=="false")
                  {
                    this.setState({monFlag:"true"});
                    this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                  }
                 else
                 {                    
                   this.setState({monFlag:"false"});
                    this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                 }};break;
    case "tuesday": {if(this.state.tueFlag=="false")
                  {
                   this.setState({tueFlag:"true"});
                   this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                 }
                 else
                  {
                    this.setState({tueFlag:"false"});
                    this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                  }};break;
    case "wednesday": {if(this.state.wedFlag=="false")
                  {
                   this.setState({wedFlag:"true"});
                   this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                  }
                 else
                 {
                    this.setState({wedFlag:"false"});
                    this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                  }};break;
    case "thursday": {if(this.state.thuFlag=="false")
                  {
                    this.setState({thuFlag:"true"});
                    this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                 }
                  else
                  {
                   this.setState({thuFlag:"false"});
                   this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                 }};break;
    case "friday":{if(this.state.friFlag=="false")
                  {
                    this.setState({friFlag:"true"});
                    this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                  }
                  else
                {
                    this.setState({friFlag:"false"});
                    this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                 }};break;
    case "saturday": {if(this.state.satFlag=="false")
                  {
                    this.setState({satFlag:"true"});
                   this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                 }
                 else
                 {
                    this.setState({satFlag:"false"});
                    this.setState({availableWeekdays:this.state.availableWeekdays+Number(e.target.value)});
                 }};break;
    case "availableTimeDetail" : this.setState({availableTimeDetail:e.target.value});break;
    case "latitude" : this.setState({latitude:e.target.value});break;
    case "longitude" :this.setState({longitude:e.target.value});break;
    case "address" : this.setState({address:e.target.value});break;
    case "addressDetail" : this.setState({addressDetail:e.target.value});break;
    case "description" :this.setState({description:e.target.value});break;
    case "cctvExist" : this.setState({cctvExist:e.target.value});break;
    case "doorLockExist" : this.setState({doorLockExist:e.target.value});break;
    case "securityCompanyExist" : this.setState({securityCompanyExist:e.target.value});break;
    case "securityCompanyName" : this.setState({securityCompanyName:e.target.value});break;
    case "insuranceExist" : this.setState({insuranceExist:e.target.value});break;
    case "insuranceName" : this.setState({insuranceName:e.target.value});break;
    case "canPark" : this.setState({canPark:e.target.value});break;
    case "parkingScale" : this.setState({parkingScale:e.target.value});break;
    case "workerExist" : this.setState({workerExist:e.target.value});break;
    case "canPickup" : this.setState({canPickup:e.target.value});break;
    case "airConditioningType" : this.setState({airConditioningType:e.target.value});break;
    case "monthlyFee":this.setState({monthlyFee:e.target.value});break;
    case "depositFee":this.setState({depositFee:e.target.value});break;
    case "maintenanceFee":this.setState({maintenanceFee:e.target.value});break;
    case "minUseTerm":this.setState({minUseTerm:e.target.value});break;
    case "type" : this.setState({type:e.target.value});break;
  //  case "mainItemTypes":this.setState({mainItemTypes:e.target.value});break;
    case "storageType":this.setState({storageType:e.target.value});break;
    case "unit":this.setState({unit:e.target.value});break;
    case "cost":this.setState({cost:e.target.value});break;
    case "paymentDescription":this.setState({paymentDescription:e.target.value});break;
    case "paymentType":this.setState({paymentType:e.target.value});break;
  // case "deliveryCompanies":this.setState({del})
  //  case "cj":  deliveryTemp.push("cj");this.setState({deliveryCompanies:deliveryTemp});break;
  //  case "postOffice":  deliveryTemp.push("postOffice");this.setState({deliveryCompanies:deliveryTemp});break;
  // case "hanjin":  deliveryTemp.push("hanjin");this.setState({deliveryCompanies:deliveryTemp});break;
  // case "coopang":  deliveryTemp.push("coopang");this.setState({deliveryCompanies:deliveryTemp});break;
  }
  console.log("e.target.name: "+e.target.name);
    console.log("e.target.value: "+e.target.value);
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
            <td><label>창고종류*</label></td>
              <td id="types" name="types" onChange={this.inputAll}>
                <label>상온창고</label>
                <input type="checkbox" name="ROOM_TEMPERATURE" value="ROOM_TEMPERATURE"></input>
                <label>저온창고</label>
                 <input type="checkbox" name="LOW_TEMPERATURE" value="LOW_TEMPERATURE"></input>
                <label>보세창고</label>
                <input type="checkbox" name="BONDED" value="BONDED"></input>
                <label>야외창고</label><br/>
                 <input type="checkbox" name="SAVAGE" value="SAVAGE"></input>
                <label>위험물창고</label>
                <input type="checkbox" name="HAZARDOUS" value="HAZARDOUS"></input>
                <label>셀프창고</label>
                <input type="checkbox" name="SELF_STORAGE" value="SELF_STORAGE"></input>
                <label>컨테이너</label>
                <input type="checkbox" name="CONTAINER" value="CONTAINER"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>창고 평수*</label>
              <input type="number" id="landArea" name="landArea" onChange={this.inputAll}/>
            </td>
            <td>
             <label>전체 평수*</label>
             <input type="number" id="totalArea" name="totalArea" onChange={this.inputAll}/>
            </td>
          </tr>
          <tr>
            <td>
              <label>여는시간*</label>
              <input id="openAt" name="openAt" type="text" placeholder="00:00:00" onChange={this.inputAll} />
            </td>
            <td>
              <label>닫는시간*</label>
              <input id="closeAt" name="closeAt" type="text" placeholder="00:00:00" onChange={this.inputAll}/>
            </td>
          </tr>
          <tr>
            <td><label>사용 가능한 요일</label></td>
            <td id="availableDays" name="availableDays" onChange={this.inputAll}>
                <label>일</label>
                <input type="checkbox" id="sunday" name="sunday" value="1" flag="false"></input>
                <label>월</label>
                 <input type="checkbox" id="monday" name="monday" value="2" flag="false"></input>
                <label>화</label>
                <input type="checkbox" id="tuesday" name="tuesday" value="4" flag="false"></input>
                <label>수</label>
                 <input type="checkbox" id="wednesday" name="wednesday" value="8" flag="false"></input>
                <label>목</label>
                <input type="checkbox" id="thursday" name="thursday" value="16" flag="false"></input>
                <label>금</label>
                <input type="checkbox" id="friday" name="friday" value="32" flag="false"></input>
                <label>토</label>
                <input type="checkbox" id="saturday" name="saturday" value="64" flag="false"></input>
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
            <input type="radio" name="cctvExist" className="cctvExist" value="true"  onChange={this.inputAll}/>있음
            <input type="radio" name="cctvExist" className="cctvExist" value="false" onChange={this.inputAll}/>없음
          </td>
        <td>
          <label>잠금장치 존재유무</label>
          <input type="radio" name="doorLockExist" className="doorLockExist" value="true" onChange={this.inputAll}/>있음
          <input type="radio" name="doorLockExist" className="doorLockExist" value="false"onChange={this.inputAll}/>없음
        </td>
          </tr>
          <tr>
           <td>
           <label>경비업체 존재유무</label>
          <input type="radio" name="securityCompanyExist" className="securityCompanyExist" value="true" onChange={this.inputAll}/>있음
         <input type="radio" name="securityCompanyExist" className="securityCompanyExist" value="false"onChange={this.inputAll}/>없음
          </td>
        <td>
        <label>경비업체 이름</label>
        <input type="text" id="securityCompanyName" name="securityCompanyName" onChange={this.inputAll}/>
        </td>
          </tr>
          <tr>
           <td>           
          <label>보험 가입유무</label>
          <input type="radio" name="insuranceExist" className="insuranceExist" value="true" onChange={this.inputAll}/>있음
          <input type="radio" name="insuranceExist" className="insuranceExist" value="false" onChange={this.inputAll}/>없음
          </td>
        <td>
        <label>보험사 이름</label>
        <input type="text" id="insuranceName" name="insuranceName" onChange={this.inputAll}/>
        </td>
          </tr>
          <tr>
           <td>
        <label>방문시 주차가능유무</label>
        <input type="radio" name="canPark" className="canPark" value="true" onChange={this.inputAll}/>있음
        <input type="radio" name="canPark" className="canPark" value="false" onChange={this.inputAll}/>없음
          </td>
        <td>
        <label>주차장 규모*</label>
        <input type="number" id="parkingScale" name="parkingScale" onChange={this.inputAll}/>
        </td>
          </tr>
          <tr>
           <td>
           <label>관리인력 존재유무</label>
          <input type="radio" name="workerExist" className="workerExist" value="true" onChange={this.inputAll}/>있음
           <input type="radio" name="workerExist" className="workerExist" value="false" onChange={this.inputAll}/>없음
          </td>
           <td>
           <label>냉난방 정보</label>
                <input type="radio" name="airConditioningType" className="airConditioningtype" value="NONE"  onChange={this.inputAll}/>없음
                <input type="radio" name="airConditioningType" className="airConditioningtype" value="HEATING" onChange={this.inputAll}/>난방
                <input type="radio" name="airConditioningType" className="airConditioningtype" value="COOLING" onChange={this.inputAll}/>냉방
                <input type="radio" name="airConditioningType" className="airConditioningtype" value="BOTH" onChange={this.inputAll}/>둘다
           </td>
          </tr>
          <tr>
        {/*    <td><label>제휴택배사*</label></td>
              <td id="deliveryCompanies" name="deliveryCompanies" onChange={this.inputAll}>
                <label>cj</label>
                <input type="checkbox" name="cj" value="cj"></input>
                <label>우체국</label>
                 <input type="checkbox" name="postOffice" value="postOffice"></input>
                <label>한진</label>
                <input type="checkbox" name="hanjin" value="hanjin"></input>
                <label>쿠팡</label><br/>
                 <input type="checkbox" name="coopang" value="coopang"></input>
        </td>*/}
          </tr>
          <tr>
          <td>
         <label>픽업 서비스유무</label>
          <input type="radio" name="canPickup" className="canPickup" value="true" onChange={this.inputAll}/>있음
          <input type="radio" name="canPickup" className="canPickup" value="false"  onChange={this.inputAll}/>없음
         </td>

          </tr>
          </tbody>
        </table>
          <br/>
        <label>창고 이미지 url 목록</label>
        //
        <br/>
        <h1>*************일반 버전*********************</h1><br/>
        <label>월세</label>
        <input type="number" id="monthlyFee" name="monthlyFee" onChange={this.inputAll}/><br/>
        <label>보증금</label>
        <input type="number" id="depositFee" name="depositFee"onChange={this.inputAll}/><br/>
        <label>관리비</label>
        <input type="number" id="maintenanceFee" name="maintenanceFee"onChange={this.inputAll}/><br/>
        <label>최소사용기간</label>
        <input type="number" id="minUseTerm" name="minUseTerm"onChange={this.inputAll}/><br/>
        <h1>*************에이전시 버전******************</h1><br/>
        <label>3PL vs 풀필먼트 업체</label>
        <input type="text" id="type" name="type" onChange={this.inputAll}/><br/>
        {/* <label>주요취급품목</label>
        <input type=""></input> */}
        <label>창고타입</label>
        <input type="text" id="storageType" name="storageType"  onChange={this.inputAll}/><br/>
        <label>요금단위</label>
        <input type="text" id="unit" name="unit"  onChange={this.inputAll}/><br/>
        <label>요금비용</label>
        <input type="number" id="cost" name="cost"  onChange={this.inputAll}/><br/>
        <label>요금설명</label>
        <input type="text" id="paymentDescription" name="paymentDescription"  onChange={this.inputAll}/><br/>
        <label>요금종류</label>
        <input type="text" id="paymentType" name="paymentType"  onChange={this.inputAll}/><br/>
        {/* <label>제휴택배사</label> */}
        <button type="submit">제출</button>
      </form>
    </div>
  );
    }
}

export default Admin;