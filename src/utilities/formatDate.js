
export const formatDate = (ngay) => {
  const ngayInput = new Date(ngay);
  let thuOutput = ngayInput.getDay(); // trả về thứ dưới dạng một số từ 0 > 6
  const ngayHienTaiFormat = new Date().toISOString().slice(0, 10);
  const ngayInputFormat = ngayInput.toISOString().slice(0, 10);

  if (thuOutput === 0) {
    thuOutput = "Chủ nhật";
  }
  if (thuOutput === 1) {
    thuOutput = "Thứ hai";
  }
  if (thuOutput === 2) {
    thuOutput = "Thứ ba";
  }
  if (thuOutput === 3) {
    thuOutput = "Thứ tư";
  }
  if (thuOutput === 4) {
    thuOutput = "Thứ năm";
  }
  if (thuOutput === 5) {
    thuOutput = "Thứ sáu";
  }
  if (thuOutput === 6) {
    thuOutput = "Thứ bảy";
  }
  if (ngayHienTaiFormat === ngayInputFormat) {
    thuOutput = "Hôm nay";
  }
  const thuNgay = thuOutput + ' ' + ngayInputFormat;
  return thuNgay;
};
