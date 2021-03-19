import PropTypes from 'prop-types';

export const FormatDate = (dateString) => {
  const dateObj = new Date(dateString);
  let dayNumber = dateObj.getDay(); // trả về thứ dưới dạng một số từ 0 > 6
  const dateNowFormat = new Date().toISOString().slice(0, 10);
  const dateObjFormat = dateObj.toISOString().slice(0, 10);

  if (dayNumber === 0) {
    dayNumber = "Chủ nhật";
  }
  if (dayNumber === 1) {
    dayNumber = "Thứ hai";
  }
  if (dayNumber === 2) {
    dayNumber = "Thứ ba";
  }
  if (dayNumber === 3) {
    dayNumber = "Thứ tư";
  }
  if (dayNumber === 4) {
    dayNumber = "Thứ năm";
  }
  if (dayNumber === 5) {
    dayNumber = "Thứ sáu";
  }
  if (dayNumber === 6) {
    dayNumber = "Thứ bảy";
  }
  if (dateNowFormat === dateObjFormat) {
    dayNumber = "Hôm nay";
  }
  // const thuNgay = dayNumber + ' ' + dateObjFormat;

  return { dayString: dayNumber, dateString: dateObjFormat };
};

FormatDate.propTypes = {
  dateString: PropTypes.string.isRequired,
};