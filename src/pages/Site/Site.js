import React from 'react';
import { MainMap } from 'components';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import './Site.css';

function Site() {
  return <div>
    <RenderAfterNavermapsLoaded ncpClientId={"f4fm9664il"} error={<p>Maps Load Error</p>} loading={<p>Maps Loading...</p>}>
      <MainMap />
    </RenderAfterNavermapsLoaded>
  </div>
}
export default Site;