import React from 'react'
import { Nav, MainSearch, MainDescription, Footer } from 'components';
import './Main.css';

function Main() {
  return <div>
    <Nav type={'transparent'} />
    <MainSearch />
    <MainDescription />
    <Footer />
  </div>
}

export default Main