
import React from 'react'
import Header from '../../components/Header'
import Ads from '../../components/Ads'
import Footer from "../../components/Footer";
import Theaters from '../../components/Theaters';
export default function MainLayout(props) {
  return (
    <>
      <Header />
      {props.children}

      <Theaters />
      <Ads />
      <Footer />

    </>
  )
}

