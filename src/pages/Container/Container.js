import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Nav, Footer, ContainerInfo, ContainerDetail, ContainerRating } from 'components';
import './Container.css';

function Container({ history, match }) {
  let containerDetail;
  const [containerInfo, setContainerInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('AccessToken');
    const header = {
      headers: {
        Authorization: "Bearer " + token,
      }
    }
    axios
      .get(`/warehouses/${match.params.id}`, header)
      .then(res => {
        containerDetail = res.data.warehouse;
        setContainerInfo({
          id: match.params.id,
          title: containerDetail.name,
          address: containerDetail.address,
          location: containerDetail.location,
          type: containerDetail.additionalInfo.type,
        });
      });
  }, []);

  return <div>
    <Nav type={'fixed'} />
    <ContainerInfo goBack={history.goBack} info={containerInfo} />
    {/* <ContainerDetail /> */}
    {/* <ContainerRating /> */}
    <Footer />
  </div>
}

export default Container;