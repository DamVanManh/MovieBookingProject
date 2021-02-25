//get information of ticket depend on input type
export const layThongTinVe = (danhSachVe = [], type) => {
  if (danhSachVe && danhSachVe.length > 0) {
    switch (type) {
      case "codeGhe":
        //return list code of selecting tickets
        return danhSachVe.map((item) => {
          return item.codeGhe;
        });
      case "giaVe":
        //return total money of selecting tickets
        return danhSachVe.reduce((acc, item) => {
          return acc + item.giaVe;
        }, 0);

      default:
        break;
    }
  }
};

// A01, B10, C09, C10
export const renderGheDangChon = (danhSachVe = []) => {
  let dsVe = layThongTinVe(danhSachVe, "codeGhe");
  if (dsVe && dsVe.length > 0) {
    return dsVe.sort().join(", ");
  } else {
    return "Vui lòng chọn ghế";
  }
};

// render style: 12034000 => 12,034,000
export const renderGiaTien = (danhSachVe = []) => {
  let giaTien = layThongTinVe(danhSachVe, "giaVe");
  if (danhSachVe && danhSachVe.length > 0) {
    return giaTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return 0;
  }
};

// Tên viết tắt - tên dài. VD: CGV - Nguyễn Du
export const renderTenCumRap = (thongTinPhim = {}) => {
  let ten = thongTinPhim.tenCumRap || "CGV - Nguyễn Du";
  if (ten.includes("Cineplex")) {
    return ten.split("Cineplex -");
  }
  return ten.split("-");
};

export const chunkArray = (myArray = [], chunk_size = 8) => {
  let results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
  // var result = chunkArray([1,2,3,4,5,6,7,8], 3);
  //  Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
};

//helper function transform image url from http to https
export const prefixHttp = (urlString = "") => {
  if (!urlString.includes("https://")) {
    return urlString.replace("http://", "https://");
  }
  return urlString;
};
