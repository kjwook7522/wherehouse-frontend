import React from 'react';
import { Nav, Footer, ContainerInfo } from 'components';
import './Container.css';

function Container({ match }) {
  return <div>
    <Nav type={'fixed'} />
    <ContainerInfo containerid={match.params.id} />
    <Footer />
  </div>
}

export default Container;