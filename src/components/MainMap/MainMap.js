import React from 'react';
import { NaverMap } from 'react-naver-maps';
import './MainMap.css';

function MainMap() {
  return <div className='map'>
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '100%',
        height: '100%'
      }}
      defaultCenter={{ lat: 37.49647708, lng: 126.95684702 }}
      defaultZoom={14}
    />
  </div>
}

export default MainMap;