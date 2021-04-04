
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";

import theatersApi from "../../../../api/theatersApi";
import useStyles from "./styles";
import formatDate from "../../../../utilities/formatDate";
import openInNewTab from '../../../../utilities/openNewTap'
import { customScrollbar } from '../../../../styles/materialUi'

export default function SearchStickets() {
  const { movieList: movieRender, loading, error } = useSelector((state) => state.movieReducer);
  const history = useHistory();
  const [data, setData] = useState({
    // handleSelectPhim
    setPhim: '',
    rapRender: [],
    cumRapChieuData: [],
    startRequest: false, // lựa chọn giữa hiện thị "đang tìm" hay "không tìm thấy"

    // handleSelectRap
    setRap: '',
    ngayChieuRender: [],
    lichChieuPhimData: [],

    // handleSelectNgayXem
    setNgayXem: '',
    suatChieuRender: [],
    lichChieuPhimDataSelected: [],

    // handleSelectSuatChieu
    setSuatChieu: '',
    maLichChieu: '',

    // handleOpen
    openCtr: { phim: false, rap: false, ngayXem: false, suatChieu: false }
  });
  const classes = useStyles({ customScrollbar });
  const handleOpenPhim = () => { setData(data => ({ ...data, openCtr: { ...data.openCtr, phim: true } })) };
  const handleOpenRap = () => { setData(data => ({ ...data, openCtr: { ...data.openCtr, rap: true } })) };
  const handleOpenNgayXem = () => { setData(data => ({ ...data, openCtr: { ...data.openCtr, ngayXem: true } })) };
  const handleOpenSuatChieu = () => { setData(data => ({ ...data, openCtr: { ...data.openCtr, suatChieu: true } })) };
  const handleClosePhim = () => { setData(data => ({ ...data, openCtr: { ...data.openCtr, phim: false, } })) };
  const handleCloseRap = () => { setData(data => ({ ...data, openCtr: { ...data.openCtr, rap: false, } })) };
  const handleCloseNgayXem = () => { setData(data => ({ ...data, openCtr: { ...data.openCtr, ngayXem: false, } })) };
  const handleCloseSuatChieu = () => { setData(data => ({ ...data, openCtr: { ...data.openCtr, suatChieu: false, } })) };

  // sau khi click chọn phim, cần duyệt lấy tất cả cumRapChieu lưu vào cumRapChieuData để xử lý
  // input: maPhim
  // output: setPhim(maPhim), rapRender(maPhim)[tenCumRap], cumRapChieuData(maPhim)[{lichChieuPhim}],
  const handleSelectPhim = (e) => {
    setData(data => ({
      ...data, setPhim: e.target.value,  // setPhim giúp "Phim" xác định phim nào đã chọn và hiển thị
      startRequest: true, openCtr: { ...data.openCtr, rap: true },
      // reset  
      rapRender: [], cumRapChieuData: [], setRap: '', ngayChieuRender: [], lichChieuPhimData: [], setNgayXem: '', suatChieuRender: [], lichChieuPhimDataSelected: [], setSuatChieu: '', maLichChieu: ''
    }))

    theatersApi.getThongTinLichChieuPhim(e.target.value).then(
      result => {
        setData(data => ({ ...data, startRequest: false }))
        const cumRapChieuData = result.data.heThongRapChieu.reduce((colect, item) => { return [...colect, ...item.cumRapChieu] }, [])
        const rapRender = cumRapChieuData.map(item => item.tenCumRap)
        // console.log('getThongTinLichChieuPhim', result.data)
        setData(data => ({
          ...data, rapRender, cumRapChieuData,
        }));
      }
    )
  };
  // sau khi click chọn Rạp, cần lấy ra prop lichChieuPhim của Rạp đã chọn > lọc ra ngày chiếu để hiển thị
  // input: tenCumRap, cumRapChieuData
  // output: setRap(tenCumRap), ngayChieuRender(tenCumRap,cumRapChieuData)[ngayChieu], lichChieuPhimData(tenCumRap,cumRapChieuData)[{ngayChieuGioChieu: "2019-01-01T10:10:00"}]
  const handleSelectRap = (e) => {
    setData(data => ({
      ...data, setRap: e.target.value, openCtr: { ...data.openCtr, ngayXem: true },
      // reset
      ngayChieuRender: [], lichChieuPhimData: [], setNgayXem: '', suatChieuRender: [], lichChieuPhimDataSelected: [], setSuatChieu: '', maLichChieu: ''
    }))
    const indexSelect = data.cumRapChieuData.findIndex(item => item.tenCumRap === e.target.value) // lấy ra lichChieuPhimData của một cụm rạp đã chọn, item lichChieuPhimData có thể giống ngày nhưng khác giờ chiếu
    const lichChieuPhimData = data.cumRapChieuData[indexSelect].lichChieuPhim
    const ngayChieuRender = lichChieuPhimData.map(item => {
      return item.ngayChieuGioChieu.slice(0, 10);// tạo mảng mới với item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
    })
    const ngayChieuRenderRemoveDuplicates = [...(new Set(ngayChieuRender))] // xóa đi phần tử trùng lặp để hiển thị
    setData(data => ({
      ...data, ngayChieuRender: ngayChieuRenderRemoveDuplicates, lichChieuPhimData
    }));

  };
  // sau khi click chọn ngày, cần lọc ra lịch chiếu tương ứng, thêm giờ để render
  // input: ngayChieu, lichChieuPhimData
  // output: setNgayXem(ngayChieu), suatChieuRender(lichChieuPhimDataSelected)[suatChieu], lichChieuPhimDataSelected(ngayChieu,lichChieuPhimData)[{ngayChieuGioChieu: "2019-01-01T10:10:00", maLichChieu: "16099"}], 
  const handleSelectNgayXem = (e) => {
    setData(data => ({
      ...data, setNgayXem: e.target.value, openCtr: { ...data.openCtr, suatChieu: true },
      // reset
      suatChieuRender: [], lichChieuPhimDataSelected: [], setSuatChieu: '', maLichChieu: ''
    }))

    const lichChieuPhimDataSelected = data.lichChieuPhimData.filter(item => { // lấy tất cả item có ngày chiếu giống với ngày chiếu đã chọn
      if (item.ngayChieuGioChieu.slice(0, 10) === e.target.value) {
        return true
      }
      return false
    })
    const suatChieuRender = lichChieuPhimDataSelected.map(item => {  // cắt lấy giờ chiếu trong ngayChieuGioChieu: "2019-01-01T20:00:00" > "20:00"
      return item.ngayChieuGioChieu.slice(11, 16)
    })
    setData(data => ({
      ...data, suatChieuRender, lichChieuPhimDataSelected,
    }));
  }

  // input: suatChieu
  // output: setSuatChieu(suatChieu), maLichChieu(suatChieu)[maLichChieu]
  const handleSelectSuatChieu = (e) => {
    setData(data => ({
      ...data, setSuatChieu: e.target.value,
      // reset
      maLichChieu: ''
    }));
    const indexMaLichChieuSelect = data.lichChieuPhimDataSelected.findIndex(item => item.ngayChieuGioChieu.slice(11, 16) === e.target.value)
    const maLichChieu = data.lichChieuPhimDataSelected[indexMaLichChieuSelect].maLichChieu
    setData(data => ({ ...data, maLichChieu }));
  }

  const menuProps = {  // props và class của menu(Popover)
    classes: { paper: classes.menu },
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
  }

  return (
    <div className={classes.search} >
      <FormControl className={`${classes['search__item--first']} ${classes.search__item}`} focused={false} >
        <Select
          open={data.openCtr.phim} // control open
          onClose={handleClosePhim}
          onOpen={handleOpenPhim}
          onChange={handleSelectPhim} // value={phim.maPhim} tự động truyền vào handleSelectPhim sau khi chọn phim
          value={data.setPhim} // chọn item trong danh sách để hiển thị , maPhim
          displayEmpty  // hiển thị item đầu tiên
          IconComponent={ExpandMoreIcon}
          MenuProps={menuProps}
        >
          <MenuItem value='' style={{ display: data.openCtr.phim ? 'none' : 'block' }} classes={{ root: classes.menu__item, selected: classes['menu__item--selected'] }}>Phim</MenuItem>
          {movieRender.map(phim => (<MenuItem value={phim.maPhim} key={phim.maPhim} classes={{ root: classes.menu__item, selected: classes['menu__item--selected'] }} >{phim.tenPhim}</MenuItem>))}
        </Select>
      </FormControl>

      <FormControl className={`${classes['search__item--next']} ${classes.search__item}`} focused={false}>
        <Select
          open={data.openCtr.rap}
          onClose={handleCloseRap}
          onOpen={handleOpenRap}
          onChange={handleSelectRap}
          value={data.setRap} // tenCumRap
          renderValue={(value) => `${value ? value : 'Rạp'}`} // hiển thị giá trị đã chọn
          displayEmpty
          IconComponent={ExpandMoreIcon}
          MenuProps={menuProps}
        >
          <MenuItem value='' style={{ display: data.rapRender.length > 0 ? 'none' : 'block' }} classes={{ root: classes.menu__item, selected: classes['menu__item--selected'] }}>{data.setPhim ? `${data.startRequest ? 'Đang tìm rạp' : 'Không tìm thấy, vui lòng chọn phim khác'}` : 'Vui lòng chọn phim'}</MenuItem>
          {data.rapRender.map(item => (<MenuItem value={item} key={item} classes={{ root: classes.menu__item, selected: classes['menu__item--selected'] }}>
            {item}
          </MenuItem>))}
        </Select>
      </FormControl>

      <FormControl className={`${classes['search__item--next']} ${classes.search__item}`} focused={false}>
        <Select
          open={data.openCtr.ngayXem}
          onClose={handleCloseNgayXem}
          onOpen={handleOpenNgayXem}
          onChange={handleSelectNgayXem}
          value={data.setNgayXem} // ngayChieu
          renderValue={(value) => `${value ? value : 'Ngày xem'}`}
          displayEmpty
          IconComponent={ExpandMoreIcon}
          MenuProps={menuProps}
        >
          <MenuItem value='' style={{ display: data.ngayChieuRender.length > 0 ? 'none' : 'block' }} classes={{ root: classes.menu__item, selected: classes['menu__item--selected'] }}>{data.setRap ? 'Đang tìm ngày xem' : 'Vui lòng chọn phim và rạp'}</MenuItem>
          {data.ngayChieuRender.map(ngayChieu => (
            <MenuItem value={ngayChieu} key={ngayChieu} classes={{ root: classes.menu__item, selected: classes['menu__item--selected'] }}>
              {console.log('ngay chiếu', ngayChieu)}
              <li>{formatDate(ngayChieu).dayToday}</li>
              <li>{formatDate(ngayChieu).dateShort}</li>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={`${classes['search__item--next']} ${classes.search__item}`} focused={false}>
        <Select
          open={data.openCtr.suatChieu}
          onClose={handleCloseSuatChieu}
          onOpen={handleOpenSuatChieu}
          onChange={handleSelectSuatChieu}
          value={data.setSuatChieu} // suatChieu
          renderValue={(value) => `${value ? value : 'Suất chiếu'}`}
          displayEmpty
          IconComponent={ExpandMoreIcon}
          MenuProps={menuProps}
        >
          <MenuItem value='' style={{ display: data.suatChieuRender.length > 0 ? 'none' : 'block' }} classes={{ root: classes.menu__item, selected: classes['menu__item--selected'] }}>{data.setNgayXem ? 'Đang tìm ngày xem' : 'Vui lòng chọn phim, rạp và ngày xem'}</MenuItem>
          {data.suatChieuRender.map(suatChieu => (<MenuItem value={suatChieu} key={suatChieu} classes={{ root: classes.menu__item, selected: classes['menu__item--selected'] }}>{suatChieu}</MenuItem>))}
        </Select>
      </FormControl>

      <FormControl className={classes['search__item--next']}>
        <Button
          disabled={!data.maLichChieu} // khi không có dữ liệu > disabled cần set true
          classes={{
            root: classes.btn,
            disabled: classes.btnDisabled,
          }}
          onClick={() => openInNewTab(`/datve/${data.maLichChieu}`)}
        >mua vé ngay</Button>
      </FormControl>
    </div >
  );
}

SearchStickets.propTypes = {
  smDown: PropTypes.bool,
};

// XỬ LÝ data
// mỗi hệ thống rạp BHDStar, Galaxy... có nhiều điểm chiếu phim ở nhiều vị trí trong thành phố
// từ mã phim đã có > getThongTinLichChieuPhim trả về mảng chứa nhiều obj, mỗi obj đại diện cho một hệ thống rạp(ví dụ BHDStar) với nhiều điểm chiếu phim lưu trong cumRapChieu
// ta cần gom hết tất cả cumRapChieu của mỗi item(BHDStar, Galaxy) về chung một mảng để hiển thị ở "Rạp"

// HIỆN 'Xuất chiếu' CÓ ĐIỀU KIỆN
// value truyền vào Select sẽ truyền tiếp vào renderValue để hiển thị, nếu value '' thì hiện 'Xuất chiếu', khi chọn item, value của MenuItem được truyền vào renderValue để hiển thị
// displayEmpty giúp luôn hiển thị giá trị mặc định khi value truyền vào Select là ''

// HIỆN 'Vui lòng chọn phim, rạp và ngày xem' CÓ ĐIỀU KIỆN dựa trên data.suatChieuRender
