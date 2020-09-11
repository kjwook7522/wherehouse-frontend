import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { message } from "antd";
import './ContainerInfo.css';

function ContainerInfo({ info }) {
  let mapImage = {
    naverMapUrl: 'https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?',
    apiKey: 'f4fm9664il',
    width: 600,
    height: 600,
    lat: info.location?.latitude,
    lon: info.location?.longitude,
    level: 15,
    markerType: 'd',
    markerSize: 'small'
  }

  let imageList = ['sample_preview1.jpg', 'sample_preview2.jpg', 'sample_preview3.jpg'];

  const mapUrl = mapImage.naverMapUrl + 'w=' + mapImage.width + '&h=' + mapImage.height + '&center='+
                 mapImage.lon + ',' + mapImage.lat + '&level=' + mapImage.level + '&markers=type:' + mapImage.markerType + '|size:' +
                 mapImage.markerSize + '|pos:' + mapImage.lon + '%20' + mapImage.lat + '|viewSizeRatio:2.0&X-NCP-APIGW-API-KEY-ID=' + mapImage.apiKey;

  const warningMessage = () => {
    message.warning("아직 준비중입니다.");
  };

  return <div className='container-info'>
    <div className='container-info-wrapper'>
      <div className='container-info-main'>
        <p className='title'><FontAwesomeIcon icon={faImages} /> 사진</p>
        {imageList.map((img, index) => <img key={index} src={'/asset/images/preview-image/' + img} alt='imageList' />)}
        <div className='container-description'>
          <h1>창고명</h1>
          <p>{info.title}</p>
          <h1>창고 주소</h1>
          <p>{info.address}</p>
          <h1>창고 유형</h1>
          <p>{info.type}</p>
        </div>
      </div>
      <div className='container-info-img'>
        <p className='title'><FontAwesomeIcon icon={faMapMarkedAlt} /> 지도</p>
        <img src={mapUrl} alt="창고 지도" />
      </div>
    </div>
    <div className='container-info-btn-wrapper'>
      <button onClick={warningMessage}>견적 요청하기</button>
      <button onClick={warningMessage}>미팅 요청하기</button>
    </div>
  </div>
}

export default ContainerInfo;