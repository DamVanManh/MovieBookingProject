import axiosClient from "./axiosClient";
const theatersApi = {
  //lấy thông tin toàn bộ danh sách hệ thống rạp
  getThongTinHeThongRap: () => {
    const path = "/QuanLyRap/LayThongTinHeThongRap";
    return axiosClient.get(path);
  },

  //lấy toàn bộ thông tin lịch chiếu của tất cả hệ thống
  getThongTinLichChieuHeThongRap: () => {
    const path = "/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09";
    return axiosClient.get(path);
  },

  //thông tin của 1 bộ phim, kèm theo thông tin các rạp có chiếu phim đó
  getThongTinLichChieuPhim: (maPhim) => {
    const path = `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return axiosClient.get(path);
  },

  //lấy thông tin các cum rap của 1 hệ thống
  getListCumRapTheoHeThong: (maHeThongRap) => {
    const path = `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`;
    return axiosClient.get(path);
  },

};

export default theatersApi;
