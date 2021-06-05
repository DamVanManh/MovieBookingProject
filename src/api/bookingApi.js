import axiosClient from "./axiosClient";
const bookingApi = {
  //lấy thông tin phòng vé của 1 bộ phim
  getDanhSachPhongVe: (maLichChieu) => {
    const path = `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return axiosClient.get(path);
  },

  postDatVe: (data) => {
    const path = `/QuanLyDatVe/DatVe`;

    return axiosClient.post(path, data);
  },

  postTaoLichChieu: (data) => {
    const path = `/QuanLyDatVe/TaoLichChieu`;
    return axiosClient.post(path, data);
  },
};

export default bookingApi;
