import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import './ContainerItem.css';

function ContainerItem({itemInfo}) {
  return <div className='container-item'>
    <div className='preview-image'>
      <img src={'/asset/images/preview-image/' + itemInfo.imgName} alt="preview"/>
    </div>
    <div className='content'>
      <h1>
        {itemInfo.title}
      </h1>
      <h2>
        {itemInfo.location}
      </h2>
      <div className='type-and-size'>
        <span><b>종류</b> : {itemInfo.fulfillment}</span><span><b>크기</b> : {itemInfo.size}m2</span>
      </div>
      <div className='rate'>
        평점 .
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
    
  </div>
}

export default ContainerItem;