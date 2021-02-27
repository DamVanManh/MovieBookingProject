
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import News from '../../components/News'

export default function MainLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <News />
      <Footer />

    </>
  )
}

