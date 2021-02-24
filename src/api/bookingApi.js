import axiosClient from "./axiosClient";
const bookingApi = {
  //lấy thông tin phòng vé của 1 bộ phim
  getDanhSachPhongVe: (maLichChieu) => {
    const path = `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return axiosClient.get(path);
  },

  //post dat ve
  // data= {
  //   "maLichChieu": 0,
  //   "danhSachVe": [
  //     {
  //       "maGhe": 0,
  //       "giaVe": 0
  //     }
  //   ],
  //   "taiKhoanNguoiDung": "string"
  // }
  postDatVe: (data) => {
    const path = `/QuanLyDatVe/DatVe`;

    return axiosClient.post(path, data);
  },

  // {
  //   "maPhim": 0,
  //   "ngayChieuGioChieu": "string", // dd/mm/yyyy 10:10:00
  //   "maRap": 0,
  //   "giaVe": 0
  // }
  postTaoLichChieu: (data) => {
    const path = `/QuanLyDatVe/TaoLichChieu`;

    return axiosClient.post(path, data);
  },
};

export default bookingApi;
