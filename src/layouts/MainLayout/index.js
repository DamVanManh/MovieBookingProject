
import React from 'react'

import Header from '../../components/Header'
import Footer from "../../components/Footer";

export default function MainLayout(props) {
  return (
    <>
      <Header />
      <div style={{ marginTop: 64, }}></div>
      {props.children}
      <Footer />
    </>
  )
}

