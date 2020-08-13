import React from 'react';
import { Nav, Footer, ContainerInfo, ContainerDetail, ContainerRating } from 'components';
import './Container.css';

function Container({ match }) {
  return <div>
    <Nav type={'fixed'} />
    <ContainerInfo containerid={match.params.id} />
    <ContainerDetail />
    <ContainerRating />
    <Footer />
  </div>
}

export default Container;