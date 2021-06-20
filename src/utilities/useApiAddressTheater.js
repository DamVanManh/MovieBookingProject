import { useEffect, useState } from 'react'
import Axios from "axios";
export default function UseThoiLuongDanhGia(maLichChieu) {
  const [data, setData] = useState({ diaChi: 'loading...' })
  const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
  useEffect(() => {
    if (!maLichChieu) {
      return
    }
    let getInfoFlimCancel = Axios.CancelToken.source(); // Axios cung cấp, để cancel gọi api khi component bị hủy(bấm chuyển cụm rạp khác)
    const loadData = async () => {
      try { // bắt lỗi khi get API, nếu có lỗi thì vào catch
        const response = await Axios.get(url, {
          cancelToken: getInfoFlimCancel.token
        });
        setData({
          diaChi: response.data?.thongTinPhim?.diaChi, // tách ra địa chỉ
        });
      } catch (error) { // vào đây khi có lỗi get api hoặc khi cancel thành công
        if (Axios.isCancel(error)) { // cancel request thành công
          // console.log("AxiosCancel: caught cancel");
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
  return { diaChi: data.diaChi }
}
