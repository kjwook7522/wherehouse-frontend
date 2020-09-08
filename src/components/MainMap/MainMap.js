import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { NaverMap, Marker } from 'react-naver-maps';
import './MainMap.css';

function MainMap() {
  const navermaps = window.naver.maps;
  const [map, setMap] = useState(null);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const nmap = new navermaps.Map('map', {
      center: new navermaps.LatLng(37.4566526, 126.705052),
      zoom: 8
    });
    setMap(nmap);
  }, [])

  useEffect(() => {
    let markerList = [];
    warehouses.forEach(warehouse => {
      console.log(warehouse);
      const marker = new navermaps.Marker({
        title: warehouse.name,
        position: new navermaps.LatLng(warehouse.location.latitude, warehouse.location.longitude),
        map: map,
        icon: { content: [
          '<div class="container-marker">',
          '</div>'
          ].join(''),
          size: navermaps.Size(30, 30) }
      });

      const contentString = `
        <div class='info-window'>
          <h1>${warehouse.name}</h1>
          <p>주소: 서울특별시 동작구 상도로 369</p>
        </div>
      `;

      const infowindow = new navermaps.InfoWindow({
        content: contentString,
        maxWidth: 300,
        disableAnchor: true,
        borderWidth: 0,
        backgroundColor: 'transparent',
        pixelOffset: new navermaps.Point(0, -20)
      });

      navermaps.Event.addListener(marker, 'click', e => {
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(map, marker);
        }
      });

      markerList.push(marker)
    });

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
  }, [warehouses, navermaps])

  useEffect(() => {
    if (map === null) return;
    // get warehouse list //
    axios
      .get('/warehouses')
      .then(res => {
        setWarehouses(res.data.warehouses);
      })
      .catch(error => {
        throw error;
      });

    ////////////////////////
  }, [map]);

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