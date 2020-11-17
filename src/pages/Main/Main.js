import React from 'react'
import { Nav, MainSearch, MainDescription, Footer, MainTitle, MainCategory } from 'components';
import './Main.css';

function Main({ history }) {
  return <div>
    <Nav type={'transparent'} />
    <MainTitle />
    <MainSearch />
    <MainCategory push={history.push} />
    <hr/>
    <MainDescription />
    <hr/>
    {/* <Banner source="/banner2.png" link="https://ezkeep.modoo.at" /> */}
    <Footer />
  </div>
}

export default Main