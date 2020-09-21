import React from 'react'
import { Nav, MainSearch, MainDescription, Footer, Banner } from 'components';
import './Main.css';

function Main({ history }) {
  return <div>
    <Nav type={'transparent'} />
    <MainSearch push={history.push} />
    <Banner source="/banner2.png" link="https://ezkeep.modoo.at" />
    <MainDescription />
    <Footer />
  </div>
}

export default Main