import React, { useEffect, useState } from 'react'
import Axios from "axios";
export default function ThoiLuongDanhGia(props) {
  const [data, setData] = useState({ thoiLuong: '120 ', danhGia: '..' })
  const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${props.maPhim}`
  const style = {
    fontSize: 12,
    color: "#9b9b9b",
  }
  useEffect(() => {
    let getInfoFlimCancel = Axios.CancelToken.source(); // Axios cung cấp, để cancel gọi api khi component bị hủy(bấm chuyển cụm rạp khác)
    const loadData = async () => {
      try { // bắt lỗi khi get API, nếu có lỗi thì vào catch
        const response = await Axios.get(url, {
          cancelToken: getInfoFlimCancel.token
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
      getInfoFlimCancel.cancel(); // unmounting thì cancel request axios
    };
  }, [])
  return (
    <>
      <span style={{ style }}>
        {`${data.thoiLuong} phút - TXT Đánh giá ${data.danhGia}`}
      </span>
    </>
  )
}
