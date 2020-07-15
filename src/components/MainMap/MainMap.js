import React from 'react';
import { NaverMap } from 'react-naver-maps';
import './MainMap.css';

function MainMap() {
  return <div>
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '60%',
        height: 'calc(100vh - 100px)',
        top: '100px'
      }}
      defaultCenter={{ lat: 37.49647708, lng: 126.95684702 }}
      defaultZoom={14}
    />
  </div>
}

export default MainMap;