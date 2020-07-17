import React from 'react';
import { ContainerFilter } from 'components';
import './ContainerList.css';

function ContainerList() {
  return <div className='container-list'>
    <ContainerFilter />
    <div>list</div>
    <div>list</div>
    <div>list</div>
    <div>list</div>
    <div>list</div>
  </div>
}

export default ContainerList;