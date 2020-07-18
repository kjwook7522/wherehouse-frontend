import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './ContainerFilter.css';

function ContainerFilter() {
  return <div className='container-filter'>
    <form>
      <input type="text" placeholder='장소를 검색해주세요' />
      <FontAwesomeIcon icon={faSearch} />
    </form>
  </div>
}

export default ContainerFilter;