import React from 'react';
import { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { Slider } from 'antd';
import './ContainerFilter.css';

function ContainerFilter() {
  useEffect(() => {
    //** fulfillment button selector **//
    const allBtn = document.querySelector('#all-btn');
    const othersBtn = document.querySelectorAll('#others-btn');

    allBtn.addEventListener('click', () => {
      othersBtn.forEach(btn => {
        if (btn.classList.contains('active'))
          btn.classList.remove('active');
      });
      allBtn.classList.add('active');
    });

    othersBtn.forEach(otherBtn => {
      otherBtn.addEventListener('click', () => {
        if (otherBtn.classList.contains('active'))
          otherBtn.classList.remove('active');
        else
          otherBtn.classList.add('active');
        
        if (allBtn.classList.contains('active'))
          allBtn.classList.remove('active');
      });
    });
    //********************************//
  }, [])

  return <div className='container-filter'>
    <div className='form-wrap'>
      {/* <form>
        <input type="text" placeholder='장소를 검색해주세요' />
        <FontAwesomeIcon icon={faSearch} />
      </form> */}
    </div>
    <div className='fulfillment'>
      <button className='active' id='all-btn'>All</button>
      <button id='others-btn'>일반 창고</button>
      <button id='others-btn'>물류 대행</button>
    </div>
    {/* <div style={{margin: 30}}>
      <Slider range step={5} defaultValue={[20, 100]} marks={{0: '0m2', 100: '100m2'}} />
    </div> */}
  </div>
}

export default ContainerFilter;