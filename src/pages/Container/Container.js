import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Nav, Footer, ContainerInfo, ContainerDetail} from "components";
import "./Container.css";

function Container({ history, match }) {
  let containerDetail;
  const [containerInfo, setContainerInfo] = useState({});
  var typeFlag1 = false;
  var typeFlag2 = false;
  var typeFlag3 = false;
  var typeFlag4 = false;
  var typeFlag5 = false;
  var typeFlag6 = false;
  var typeFlag7 = false;
  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    const header = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios.get(`/warehouses/${match.params.id}`, header).then(res => {
      containerDetail = res.data.warehouse;
      for (let i = 0; i < 7; i++) {
        if (containerDetail.types[i] === "ROOM_TEMPERATURE") typeFlag1 = true;
        if (containerDetail.types[i] === "LOW_TEMPERATURE") typeFlag2 = true;
        if (containerDetail.types[i] === "BONDED") typeFlag3 = true;
        if (containerDetail.types[i] === "SAVAGE") typeFlag4 = true;
        if (containerDetail.types[i] === "HAZARDOUS") typeFlag5 = true;
        if (containerDetail.types[i] === "SELF_STORAGE") typeFlag6 = true;
        if (containerDetail.types[i] === "CONTAINER") typeFlag7 = true;
      }
      if (containerDetail.serviceType === "GENERAL") {
        setContainerInfo({
          typeFlag1: typeFlag1,
          typeFlag2: typeFlag2,
          typeFlag3: typeFlag3,
          typeFlag4: typeFlag4,
          typeFlag5: typeFlag5,
          typeFlag6: typeFlag6,
          typeFlag7: typeFlag7,
          id: match.params.id,
          name: containerDetail.name, //창고이름
          serviceType: containerDetail.serviceType, //서비스타입
          types: containerDetail.types, //창고종류들(체크박스)
          landArea: containerDetail.landArea, //창고평수
          totalArea: containerDetail.totalArea, //전체평수
          openAt: containerDetail.openAt, //여는시간
          closeAt: containerDetail.closeAt, //닫는시간
          availableWeekdays: containerDetail.availableWeekdays, //사용가능한 요일
          availableTimeDetail: containerDetail.availableTimeDetail, //창고운영시간 추가정보

          location: containerDetail.location, //위도경도
          address: containerDetail.address, //창고주소
          addressDetail: containerDetail.addressDetail, //창고상세주소
          description: containerDetail.description, //창고설명

          cctvExist: containerDetail.cctvExist, //cctv 존재유무
          doorLockExist: containerDetail.doorLockExist, //잠금장치 존재유무
          securityCompanyExist: containerDetail.securityCompanyExist, //경비업체 존재유무
          securityCompanyName: containerDetail.securityCompanyName, //경비업체 이름
          insuranceExist: containerDetail.insuranceExist, //보험가입유무
          insuranceName: containerDetail.insuranceName, //보험사 이름
          canPark: containerDetail.canPark, //주차 가능유무
          parkingScale: containerDetail.parkingScale, //주차장규모
          workerExist: containerDetail.workerExist, //관리인력 존재유무
          canPickup: containerDetail.canPickup, //픽업서비스 유무
          airConditioningType: containerDetail.airConditioningType, //냉난방정보
          attachments: containerDetail.attachments, //창고이미지url목록
          owner: containerDetail.owner, //창고주 정보
          monthlyFee: containerDetail.additionalInfo.monthlyFee,
          depositFee: containerDetail.additionalInfo.depositFee,
          maintenanceFee: containerDetail.additionalInfo.maintenanceFee,
          minUseTerm: containerDetail.additionalInfo.minUseTerm,
        });
      } else {
        setContainerInfo({
          id: match.params.id,
          name: containerDetail.name, //창고이름
          serviceType: containerDetail.serviceType, //서비스타입
          types: containerDetail.types, //창고종류들(체크박스)
          landArea: containerDetail.landArea, //창고평수
          totalArea: containerDetail.totalArea, //전체평수
          openAt: containerDetail.openAt, //여는시간
          closeAt: containerDetail.closeAt, //닫는시간
          availableWeekdays: containerDetail.availableWeekdays, //사용가능한 요일
          availableTimeDetail: containerDetail.availableTimeDetail, //창고운영시간 추가정보

          location: containerDetail.location, //위도경도
          address: containerDetail.address, //창고주소
          addressDetail: containerDetail.addressDetail, //창고상세주소
          description: containerDetail.description, //창고설명

          cctvExist: containerDetail.cctvExist, //cctv 존재유무
          doorLockExist: containerDetail.doorLockExist, //잠금장치 존재유무
          securityCompanyExist: containerDetail.securityCompanyExist, //경비업체 존재유무
          securityCompanyName: containerDetail.securityCompanyName, //경비업체 이름
          insuranceExist: containerDetail.insuranceExist, //보험가입유무
          insuranceName: containerDetail.insuranceName, //보험사 이름
          canPark: containerDetail.canPark, //주차 가능유무
          parkingScale: containerDetail.parkingScale, //주차장규모
          workerExist: containerDetail.workerExist, //관리인력 존재유무
          canPickup: containerDetail.canPickup, //픽업서비스 유무
          airConditioningType: containerDetail.airConditioningType, //냉난방정보
          attachments: containerDetail.attachments, //창고이미지url목록
          owner: containerDetail.owner, //창고주 정보
          type: containerDetail.additionalInfo.type,
          mainItemTypes: containerDetail.additionalInfo.mainItemTypes,
          unit: containerDetail.additionalInfo.payments[0].unit,
          cost: containerDetail.additionalInfo.payments[0].cost,
          paymentDescription: containerDetail.additionalInfo.payments[0].description,
          paymentType: containerDetail.additionalInfo.payments[0].type,
          storageType: containerDetail.additionalInfo.storageType,
        });
      }
    });
  }, []);

  return (
    <div>
      <Nav type={"fixed"} />
      <ContainerInfo goBack={history.goBack} info={containerInfo} />
      <ContainerDetail info={containerInfo} />
      {/* <ContainerRating /> */}
      <Footer />
    </div>
  );
}

export default Container;
