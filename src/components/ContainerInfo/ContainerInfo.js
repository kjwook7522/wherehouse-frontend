import React from 'react';
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

  const mapUrl = mapImage.naverMapUrl + 'w=' + mapImage.width + '&h=' + mapImage.height + '&center='+
                 mapImage.lon + ',' + mapImage.lat + '&level=' + mapImage.level + '&markers=type:' + mapImage.markerType + '|size:' +
                 mapImage.markerSize + '|pos:' + mapImage.lon + '%20' + mapImage.lat + '|viewSizeRatio:2.0&X-NCP-APIGW-API-KEY-ID=' + mapImage.apiKey;

  return <div className='container-info'>
    This is Container Info
    <img src={mapUrl} alt="창고 지도" style={{width: 300, height: 300}} />
  </div>
}

export default ContainerInfo;