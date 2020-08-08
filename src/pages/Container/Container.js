import React from 'react';
import { Nav, Footer, ContainerInfo, ContainerDetail } from 'components';
import './Container.css';

function Container({ match }) {
  return <div>
    <Nav type={'fixed'} />
    <ContainerInfo containerid={match.params.id} />
    <ContainerDetail />
    <Footer />
  </div>
}

export default Container;