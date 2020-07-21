import React from 'react';
import { ContainerFilter, ContainerItem } from 'components';
import './ContainerList.css';
import preview1 from '../../images/preview-image/sample_preview1.jpg';
import preview2 from '../../images/preview-image/sample_preview2.jpg';
import preview3 from '../../images/preview-image/sample_preview3.jpg';

function ContainerList() {
  let item1 = {
    title: '개인용 창고',
    location: '서울특별시 동작구 상도로 369',
    imgSource: preview1,
    fulfillment: 'pallet',
    size: 1000,
    rate: 3.5,
  }
  let item2 = {
    title: '화물 선박 창고',
    location: '서울특별시 동작구 상도로 369',
    imgSource: preview2,
    fulfillment: 'carton',
    size: 500,
    rate: 4.5,
  }
  let item3 = {
    title: '해상 거치 창고',
    location: '서울특별시 동작구 상도로 369',
    imgSource: preview3,
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