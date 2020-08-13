import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import './ContainerInfo.css';

function ContainerInfo({ containerid }) {
  let mapImage = {
    naverMapUrl: 'https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?',
    apiKey: 'f4fm9664il',
    width: 600,
    height: 600,
    lat: 37.49647708,
    lon: 126.95684702,
    level: 15,
    markerType: 'd',
    markerSize: 'small'
  }

  let imageList = ['sample_preview1.jpg', 'sample_preview2.jpg', 'sample_preview3.jpg'];

  const mapUrl = mapImage.naverMapUrl + 'w=' + mapImage.width + '&h=' + mapImage.height + '&center='+
                 mapImage.lon + ',' + mapImage.lat + '&level=' + mapImage.level + '&markers=type:' + mapImage.markerType + '|size:' +
                 mapImage.markerSize + '|pos:' + mapImage.lon + '%20' + mapImage.lat + '|viewSizeRatio:2.0&X-NCP-APIGW-API-KEY-ID=' + mapImage.apiKey;

  return <div className='container-info'>
    <div className='container-info-wrapper'>
      <div className='container-info-main'>
        <p className='title'><FontAwesomeIcon icon={faImages} /> 사진</p>
        {imageList.map((img, index) => <img key={index} src={'/asset/images/preview-image/' + img} alt='imageList' />)}
        <div className='container-description'>
          <h1>창고명</h1>
          <p>숭실대 창고</p>
          <h1>창고 주소</h1>
          <p>서울특별시 동작구 상도로 369</p>
          <h1>창고 유형</h1>
          <p>풀필먼트</p>
        </div>
      </div>
      <div className='container-info-img'>
        <p className='title'><FontAwesomeIcon icon={faMapMarkedAlt} /> 지도</p>
        <img src={mapUrl} alt="창고 지도" />
      </div>
    </div>
    <div className='container-info-btn-wrapper'>
      <button>견적 요청하기</button>
      <button>미팅 요청하기</button>
    </div>
  </div>
}

export default ContainerInfo;