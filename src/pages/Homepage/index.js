import React from 'react';

import News from "../../components/News";
import Carousel from "./Carousel";
import Ads from '../../components/Ads'
import Theaters from './Theaters'
// import useStyles from './style'
import Nav from './Nav'
import "slick-carousel/slick/slick.css"; // npm install slick-carousel --save
import "slick-carousel/slick/slick-theme.css";

export default function Homepage(props) {
  return (
    <div >
      <Carousel />
      <Nav />
      <Theaters />
      <News />
      <Ads />
    </div>
  )
}

