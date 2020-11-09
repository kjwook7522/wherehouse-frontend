import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { message } from "antd";
import './ContainerInfo.css';

function ContainerInfo({ goBack, info }) {
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

  const back = () => {
    goBack();
  }

  const warningMessage = () => {
    message.warning("아직 준비중입니다.");
  };

  return <div className='container-info'>
    <div className="back-wrapper"><FontAwesomeIcon icon={faTimes} onClick={back} /></div>
    <div className='container-info-wrapper'>
      <div className='container-info-main'>
        <p className='title'><FontAwesomeIcon icon={faImages} /> 사진</p>
        {imageList.map((img, index) => <img key={index} src={'/asset/images/preview-image/' + img} alt='imageList' />)}
        <div className='container-description'>
          <h1>창고명</h1>
          <p>{info.name}</p>
          <h1>창고 주소</h1>
          <p>{info.address}<br/>
          {info.addressDetail}</p>
          <h1>창고 유형</h1>
          {/* 삼행연산자를 사용해서 if문을 대체 */}
          <div> 
          {
          info.serviceType==="GENERAL" 
            ? (<p>일반</p>)
            : (<p>에이전시</p>)
          }
          {
            info.typeFlag1==="true"
            ?(<span>상온창고 / </span>)
            :(<span></span>)
          }
          {
            info.typeFlag2==="true"
            ?(<span>저온창고 / </span>)
            :(<span></span>)
          }
                   {
            info.typeFlag3==="true"
            ?(<span>보세창고 / </span>)
            :(<span></span>)
          }
                   {
            info.typeFlag4==="true"
            ?(<span>야외창고 / </span>)
            :(<span></span>)
          }
                   {
            info.typeFlag5==="true"
            ?(<span>위험물창고 / </span>)
            :(<span></span>)
          }
                   {
            info.typeFlag6==="true"
            ?(<span>셀프창고 / </span>)
            :(<span></span>)
          }
                   {
            info.typeFlag7==="true"
            ?(<span>컨테이너</span>)
            :(<span></span>)
          }
          </div>
          <h1>평수</h1>
          <p>창고평수: {info.landArea}<br/>
             전체평수: {info.totalArea}</p>
          <h1>창고 설명</h1>
          <p>{info.description}</p>
        </div>
      </div>
      <div className='container-info-img'>
        <p className='title'><FontAwesomeIcon icon={faMapMarkedAlt} /> 지도</p>
        <img src={info.id ? mapUrl : null} alt="창고 지도" />
      </div>
    </div>
    <div className='container-info-btn-wrapper'>
      <button onClick={warningMessage}>견적 요청하기</button>
      <button onClick={warningMessage}>미팅 요청하기</button>
    </div>
  </div>
}

export default ContainerInfo;