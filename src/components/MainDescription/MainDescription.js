import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import './MainDescription.css';

function MainDescription() {
  return <div className="description">
    <h1>저희는 이렇습니다.</h1>
    <div className="content">
      <ul>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
      </ul>
    </div>
  </div>
}

export default MainDescription;