import React, { useEffect, useState } from 'react'
import Axios from "axios";
export default function Thoiluong_Danhgia(props) {
  const [data, setData] = useState({ thoiLuong: '120 ', danhGia: '..' })
  const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${props.maPhim}`
  useEffect(() => {
    let source = Axios.CancelToken.source(); // Axios cung cấp, để cancel gọi api khi component bị hủy(bấm chuyển cụm rạp khác)
    const loadData = async () => {
      try { // bắt lỗi khi get API, nếu có lỗi thì vào catch
        const response = await Axios.get(url, {
          cancelToken: source.token
        });
        setData({
          thoiLuong: response.data.heThongRapChieu?.[0].cumRapChieu?.[0].lichChieuPhim?.[0].thoiLuong, // tách ra thời lượng phim
          danhGia: response.data.danhGia
        });
      } catch (error) { // vào đây khi có lỗi get api hoặc khi cancel thành công
        if (Axios.isCancel(error)) { // cancel request thành công
          console.log("AxiosCancel: caught cancel");
        } else {
          throw error; // báo lỗi get api
        }
      }
    };
    loadData();
    return () => {
      source.cancel(); // unmounting thì cancel request axios
    };
  }, [])
  return (
    <>
      <span className={props.injectCss}>
        {`${data.thoiLuong} phút - TXT Đánh giá ${data.danhGia}`}
      </span>
    </>
  )
}
