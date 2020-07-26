import React from 'react';
import { ContainerFilter, ContainerItem } from 'components';
import './ContainerList.css';

function ContainerList() {
  let item1 = {
    title: '개인용 창고',
    location: '서울특별시 동작구 상도로 369',
    imgName: 'sample_preview1.jpg',
    fulfillment: 'pallet',
    size: 1000,
    rate: 3.5,
  }
  let item2 = {
    title: '화물 선박 창고',
    location: '서울특별시 동작구 상도로 369',
    imgName: 'sample_preview2.jpg',
    fulfillment: 'carton',
    size: 500,
    rate: 4.5,
  }
  let item3 = {
    title: '해상 거치 창고',
    location: '서울특별시 동작구 상도로 369',
    imgName: 'sample_preview3.jpg',
    fulfillment: 'unit',
    size: 70,
    rate: 4.0,
  }
  let itemList = [item1, item2, item3, item1, item2, item3];

  return <div className='container-list'>
    <ContainerFilter />
    {itemList.map((item, index) => <ContainerItem itemInfo={item} key={index} />)}
  </div>
}

export default ContainerList;