
import { useEffect, useState } from 'react'
import Axios from "axios";
import PropTypes from 'prop-types';

CheckIsUserBooking.propTypes = {
  taiKhoan: PropTypes.string.isRequired,
};
export default function CheckIsUserBooking(taiKhoan) {
  const [isUserBooking, setisUserBooking] = useState(true)
  const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan"
  useEffect(() => {
    let cancel = Axios.CancelToken.source(); // Axios cung cấp, để cancel gọi api khi component bị hủy(bấm chuyển cụm rạp khác)
    const loadData = async () => {
      try { // bắt lỗi khi get API, nếu có lỗi thì vào catch
        const response = await Axios.post(url, { taiKhoan }, { cancelToken: cancel.token })
        const isUserBooking = response.data.thongTinDatVe.length > 0 ? true : false
        setisUserBooking(isUserBooking);
      } catch (error) { // vào đây khi có lỗi get api hoặc khi cancel thành công
        if (Axios.isCancel(error)) { // cancel request thành công
          console.log("AxiosCancel: caught cancel");
        } else {
          throw error; // báo lỗi get api
        }
      }
    };
    loadData();
    setTimeout(() => cancel.cancel(), 5000)
    return () => {
      cancel.cancel(); // unmounting thì cancel request axios
    };
  }, [])

  return isUserBooking
}
