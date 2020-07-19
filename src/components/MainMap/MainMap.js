import React from 'react';
import { useEffect } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';
import './MainMap.css';

function MainMap() {
  const navermaps = window.naver.maps;
  let map = null;
  let markerList = [];

  useEffect(() => {
    let marker1 = new navermaps.Marker({
      title: 'Soongsil',
      position: new navermaps.LatLng(37.49517411, 126.9541566),
      map: map.instance,
      icon: { content: [
        '<div class="container-marker">',
        '</div>'
        ].join(''),
        size: navermaps.Size(30, 30) }
    });
    let marker2 = new navermaps.Marker({
      title: 'Soongsil',
      position: new navermaps.LatLng(37.49647708, 126.95684702),
      map: map.instance,
      icon: { content: [
        '<div class="container-marker">',
        '</div>'
        ].join(''),
        size: navermaps.Size(30, 30) }
    });
    let marker3 = new navermaps.Marker({
      title: 'Soongsil',
      position: new navermaps.LatLng(37.4975267, 126.97154758),
      map: map.instance,
      icon: { content: [
        '<div class="container-marker">',
        '</div>'
        ].join(''),
        size: navermaps.Size(30, 30) }
    });
    let marker4 = new navermaps.Marker({
      title: 'Soongsil',
      position: new navermaps.LatLng(37.48833503, 126.966259305),
      map: map.instance,
      icon: { content: [
        '<div class="container-marker">',
        '</div>'
        ].join(''),
        size: navermaps.Size(30, 30) }
    });
    markerList.push(marker1, marker2, marker3, marker4);
  }, [])

  return <div className='map'>
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      naverRef={ref => { map = ref }}
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