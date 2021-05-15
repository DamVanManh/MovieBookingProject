import axiosClient from "./axiosClient";

const usersApi = {
  //post user:object gồm taiKhoan, matKhau, email,...
  postDangKy: (user) => {
    const path = "/QuanLyNguoiDung/DangKy";
    return axiosClient.post(path, user);
  },

  //post user:object taiKhoan, matKhau => nhận về data có accessToken
  postDangNhap: (user) => {
    const path = "/QuanLyNguoiDung/DangNhap";
    return axiosClient.post(path, user);
  },

  getDanhSachNguoiDung: () => {
    const path = "/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09";
    return axiosClient.get(path);
  },

  // https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=2&soPhanTuTrenTrang=2
  getDanhSachNguoiDungPhanTrang: (soTrang, soPhanTuTrenTrang) => {
    const path = "/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09";
    return axiosClient.get(path, { soTrang, soPhanTuTrenTrang });
  },

  postThemNguoiDung: (user) => {
    const path = "/QuanLyNguoiDung/ThemNguoiDung";

    return axiosClient.post(path, user);
  },

  deleteUser: (taiKhoan) => {
    const path = `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;

    return axiosClient.delete(path);
  },

  // {
  //   "taiKhoan": "boyz",
  //   "matKhau": "123456",
  //   "email": "DuyQuang@gmail.com",
  //   "soDt": "123456",
  //   "maNhom": "GP09",
  //   "maLoaiNguoiDung": "QuanTri",
  //   "hoTen": "Duy Quang"
  // }
  editTaiKhoan: (user) => {
    const path = `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`;
    return axiosClient.put(path, user);
  },

  //info= {taiKhoan: '' }
  getThongTinTaiKhoan: (info) => {
    const path = `/QuanLyNguoiDung/ThongTinTaiKhoan`;
    return axiosClient.post(path, info);
  },
};

export default usersApi;
