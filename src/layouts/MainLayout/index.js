
import React from 'react'
import Header from '../../components/Header'
import Ads from '../../components/Ads'
import News from '../../components/News'
import Footer from "../../components/Footer";
export default function MainLayout(props) {
  return (
    <>
      <Header />
      {props.children}

      <Ads />
      <Footer />

    </>
  )
}

