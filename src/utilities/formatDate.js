import PropTypes from 'prop-types';

const formatDate = (dateIn) => { // ISODate ~ 2021-3-31
  if (dateIn.indexOf("/") !== -1) { // input 31/3/2021 > output 2021-3-31
    const arr = dateIn.split('/')
    dateIn = `${arr[2]}-${arr[1]}-${arr[0]}`
  }
  const dateObj = new Date(dateIn);
  const dayNumber = dateObj.getDay(); // trả về thứ dưới dạng một số từ 0 > 6
  const dateNowFormat = new Date().toString().slice(0, 10);
  const dateObjFormat = dateObj.toString().slice(0, 10);

  let dayToday = '';
  if (dayNumber === 0) {
    dayToday = "Chủ nhật";
  }
  if (dayNumber === 1) {
    dayToday = "Thứ hai";
  }
  if (dayNumber === 2) {
    dayToday = "Thứ ba";
  }
  if (dayNumber === 3) {
    dayToday = "Thứ tư";
  }
  if (dayNumber === 4) {
    dayToday = "Thứ năm";
  }
  if (dayNumber === 5) {
    dayToday = "Thứ sáu";
  }
  if (dayNumber === 6) {
    dayToday = "Thứ bảy";
  }
  if (dateNowFormat === dateObjFormat) {
    dayToday = "Hôm nay";
  }

  const date = dateObj.getDate();

  const month = dateObj.getMonth() + 1;

  const year = dateObj.getFullYear();

  const dateFull = dayToday + ', ' + date + ' tháng ' + month + ', ' + year;

  return { dayToday, dateShort: dateIn, dateFull };
};

export default formatDate
formatDate.propTypes = {
  ISODate: PropTypes.string.isRequired,
};