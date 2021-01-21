import React, { useState, useEffect } from 'react';
import axios from "axios";

//custom hook, Gọi Api lấy danh sách khóa học
export default function UseAPICourses() {
  
  const [coursetList, setCoursetList] = useState([]); 

  useEffect(() => { 
    axios.get('https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .then((result) => {
        setCoursetList(result.data)
      })
  }, [])

  return [coursetList]
}
