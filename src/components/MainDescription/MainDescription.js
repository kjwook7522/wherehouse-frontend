import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import './MainDescription.css';

function MainDescription() {
  return <div className="description">
    <h1>저희는 이렇습니다.</h1>
    <div className="content">
      <ul className="item-name">
        <li>
          <FontAwesomeIcon icon={faClipboard} color="#07689f" size="6x" />
          <h2>철저한 분석 제공</h2>
          <p>
            그들의 있음으로써 소리다.이것은 천지는 가장 사라지지 교향악이다. 따뜻한 사람은 이것은 따뜻한 되려니와, 간에 속에 구할 없으면 사막이다. 싹이 목숨을 과실이 이것이다. 인간이 목숨을 우리의 자신과 풍부하게 같이, 속잎나고, 가는 풍부하게 위하여서. 품에 일월과 부패를 쓸쓸하랴? 목숨이 낙원을 위하여 말이다. 청춘 위하여서 품에 교향악이다.
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faBox} color="#07689f" size="6x" />
          <h2>알찬 창고 정리</h2>
          <p>
            그들의 있음으로써 소리다.이것은 천지는 가장 사라지지 교향악이다. 따뜻한 사람은 이것은 따뜻한 되려니와, 간에 속에 구할 없으면 사막이다. 싹이 목숨을 과실이 이것이다. 인간이 목숨을 우리의 자신과 풍부하게 같이, 속잎나고, 가는 풍부하게 위하여서. 품에 일월과 부패를 쓸쓸하랴? 목숨이 낙원을 위하여 말이다. 청춘 위하여서 품에 교향악이다.
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faTruckLoading} color="#07689f" size="6x" />
          <h2>최신 자동회된 기술</h2>
          <p>
            그들의 있음으로써 소리다.이것은 천지는 가장 사라지지 교향악이다. 따뜻한 사람은 이것은 따뜻한 되려니와, 간에 속에 구할 없으면 사막이다. 싹이 목숨을 과실이 이것이다. 인간이 목숨을 우리의 자신과 풍부하게 같이, 속잎나고, 가는 풍부하게 위하여서. 품에 일월과 부패를 쓸쓸하랴? 목숨이 낙원을 위하여 말이다. 청춘 위하여서 품에 교향악이다.
          </p>
        </li>
      </ul>
    </div>
  </div>
}

export default MainDescription;