import React from 'react';
import { useEffect } from 'react';
// import { NaverMap, Marker } from 'react-naver-maps';
import './MainMap.css';

function MainMap() {
  const navermaps = window.naver.maps;
  let map = null;
  let markerList = [];

  useEffect(() => {
    let map = new navermaps.Map('map', {
      center: new navermaps.LatLng(37.3595704, 127.105399),
      zoom: 10
    });

    let marker1 = new navermaps.Marker({
      title: 'Soongsil',
      position: new navermaps.LatLng(37.49517411, 126.9541566),
      map: map,
      icon: { content: [
        '<div class="container-marker">',
        '</div>'
        ].join(''),
        size: navermaps.Size(30, 30) }
    });
    let marker2 = new navermaps.Marker({
      title: 'Soongsil',
      position: new navermaps.LatLng(37.49647708, 126.95684702),
      map: map,
      icon: { content: [
        '<div class="container-marker">',
        '</div>'
        ].join(''),
        size: navermaps.Size(30, 30) }
    });
    let marker3 = new navermaps.Marker({
      title: 'Soongsil',
      position: new navermaps.LatLng(37.4975267, 126.97154758),
      map: map,
      icon: { content: [
        '<div class="container-marker">',
        '</div>'
        ].join(''),
        size: navermaps.Size(30, 30) }
    });
    let marker4 = new navermaps.Marker({
      title: 'Soongsil',
      position: new navermaps.LatLng(37.48833503, 126.966259305),
      map: map,
      icon: { content: [
        '<div class="container-marker">',
        '</div>'
        ].join(''),
        size: navermaps.Size(30, 30) }
    });
    markerList.push(marker1, marker2, marker3, marker4);

    const contentString = `
      <div class='info-window'>
        <h1>창고 제목</h1>
        <p>주소: 서울특별시 동작구 상도로 369</p>
      </div>
    `

    let infowindow = new navermaps.InfoWindow({
      content: contentString,
      maxWidth: 300,
      disableAnchor: true,
      borderWidth: 0,
      backgroundColor: 'transparent',
      pixelOffset: new navermaps.Point(0, -20)
    })

    markerList.forEach(marker => {
      navermaps.Event.addListener(marker, 'click', e => {
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
            infowindow.open(map, marker);
        }
      })
    })

    let htmlMarker1 = {
      content: '<div id="cluster"></div>',
      size: window.N.Size(50, 50),
      anchor: window.N.Point(25, 25)
    };

    let markerClustering = new window.MarkerClustering({
      minClusterSize: 2,
      maxZoom: 13,
      map: map,
      markers: markerList,
      disableClickZoom: false,
      gridSize: 120,
      icons: [htmlMarker1],
      indexGenerator: [10],
      stylingFunction: function(clusterMarker, count) {
        // $(clusterMarker.getElement()).find('div:first-child').text(count);
        clusterMarker.getElement().firstChild.innerText = count;
        // document.getElementById('map').firstChild
    }
    });

  }, [])

  return <div id='map'>
    {/* <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      naverRef={ref => { map = ref }}
      style={{
        width: '100%',
        height: '100%'
      }}
      defaultCenter={{ lat: 37.49647708, lng: 126.95684702 }}
      defaultZoom={14}
    /> */}
  </div>
}

export default MainMap;