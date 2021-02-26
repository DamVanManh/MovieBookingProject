import React, { useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import moviesApi from "../../api/moviesApi";


export default function Carousel() {
  const [danhSachPhim, setDanhs] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // lấy 3 phim ngẫu nhiên ra hiển thị
  useEffect(() => {
    let isMounted = true; // xử lý báo lỗi, nếu unmounted thì không thực hiện lệnh
    moviesApi.getDanhSachPhimTheoNgay("26/01/2021", "26/02/2021").then(
      result => {
        const max = result.data.length;
        const arrayRandom = [result.data[Math.floor(Math.random() * max)], result.data[Math.floor(Math.random() * max)], result.data[Math.floor(Math.random() * max)]]
        if (isMounted) setDanhs(arrayRandom);
      }
    )
      .catch(
        error => {
          if (isMounted) setDanhs(error.response.data);
        }
      )
    return () => { isMounted = false };
  }, [])

  return (
    <div>
      {console.log("danhs", danhSachPhim)}
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>{danhSachPhim[0]?.hinhAnh}</h3>
          <img src={danhSachPhim[0]?.hinhAnh} alt="hinhAnh" />
        </div>
        <div>
          <h3>{danhSachPhim[1]?.hinhAnh}</h3>
          <img src={danhSachPhim[1]?.hinhAnh} alt="hinhAnh" />
        </div>
        <div>
          <h3>{danhSachPhim[2]?.hinhAnh}</h3>
          <img src={danhSachPhim[2]?.hinhAnh} alt="hinhAnh" />
        </div>
      </Slider>
    </div>
  );
}
