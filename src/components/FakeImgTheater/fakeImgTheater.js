import React from 'react'

import { dataFakeImgTheater, returnRandomItem } from '../../constants/theaterData';

export default function FakeImgTheater({ nameTheater, imgStyle }) {
  let imgTheater

  // ứng với mỗi nameTheater chỉ xuất 1 hình ảnh duy nhất
  // dataFakeImgTheater: [{nameTheater: "", img: "/img/cumRap/lotte-cinema-thu-duc-15383864347748.jpg"},]

  // tìm xem đã lưu hình tương ứng với nameTheater hay chưa
  const itemData = dataFakeImgTheater?.find(item => item.nameTheater === nameTheater)
  if (!itemData?.nameTheater) { // nếu chưa lưu thì push img ngẫu nhiên vào
    let img = returnRandomItem()
    dataFakeImgTheater.push({ nameTheater, img })
    imgTheater = img
  } else { // ngược lại lấy ra sử dụng
    imgTheater = itemData.img
  }

  return (
    <img className={imgStyle} src={imgTheater} alt="theater" />
  )
}
