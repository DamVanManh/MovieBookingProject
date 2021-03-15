import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import theatersApi from "../../../../api/theatersApi";
import useStyles from "./styles";
import { formatDate } from "../../../../utilities/formatDate";

export default function ControlledOpenSelect() {
  const { movieList: movieRender, loading, error } = useSelector((state) => state.movieReducer);
  const classes = useStyles();
  const [dataSelected, setDataSelected] = useState({
    // handleSelectPhim
    setPhim: '',
    rapRender: [],
    cumRapChieuData: [],

    // handleSelectRap
    setRap: '',
    ngayChieuRender: [],
    lichChieuPhimData: [],

    // handleSelectNgayXem
    setNgayXem: '',
    xuatChieuRender: [],
    lichChieuPhimDataSelected: [],

    // handleSelectXuatChieu
    setXuatChieu: '',
    maLichChieu: '',

  });
  const [autoOpen, setAutoOpen] = useState({ phim: false, rap: false, ngayXem: false, xuatChieu: false, });

  // sau khi click chọn phim, cần duyệt lấy tất cả cumRapChieu lưu vào cumRapChieuData để xử lý
  // input: maPhim
  // output: setPhim(maPhim), rapRender(maPhim)[tenCumRap], cumRapChieuData(maPhim)[{lichChieuPhim}],
  const handleSelectPhim = (e) => {
    setAutoOpen(autoOpen => ({ ...autoOpen, rap: true }));
    setDataSelected(dataSelected => ({
      ...dataSelected, setPhim: e.target.value,  // setPhim giúp "Phim" xác định phim nào đã chọn và hiển thị
      // reset  
      rapRender: [], cumRapChieuData: [], setRap: '', ngayChieuRender: [], lichChieuPhimData: [], setNgayXem: '', xuatChieuRender: [], lichChieuPhimDataSelected: [], setXuatChieu: '', maLichChieu: ''
    }))

    theatersApi.getThongTinLichChieuPhim(e.target.value).then(
      result => {
        const cumRapChieuData = result.data.heThongRapChieu.reduce((colect, item) => { return [...colect, ...item.cumRapChieu] }, [])
        // console.log("data get from API ", result.data.heThongRapChieu)
        // console.log("cumRapChieuData ", cumRapChieuData)
        const rapRender = cumRapChieuData.map(item => item.tenCumRap)
        // console.log("rapRender ", rapRender)

        setDataSelected(dataSelected => ({
          ...dataSelected, rapRender, cumRapChieuData,
        }));
      }
    )
  };
  // sau khi click chọn Rạp, cần lấy ra prop lichChieuPhim của Rạp đã chọn
  // input: tenCumRap, cumRapChieuData
  // output: setRap(tenCumRap), ngayChieuRender(tenCumRap,cumRapChieuData)[ngayChieu], lichChieuPhimData(tenCumRap,cumRapChieuData)[{ngayChieuGioChieu: "2019-01-01T10:10:00"}]
  const handleSelectRap = (e) => {
    setAutoOpen(autoOpen => ({ ...autoOpen, ngayXem: true }));
    setDataSelected(dataSelected => ({
      ...dataSelected, setRap: e.target.value,
      // reset
      ngayChieuRender: [], lichChieuPhimData: [], setNgayXem: '', xuatChieuRender: [], lichChieuPhimDataSelected: [], setXuatChieu: '', maLichChieu: ''
    }))

    const indexSelect = dataSelected.cumRapChieuData.findIndex(item => item.tenCumRap === e.target.value) // lấy ra lichChieuPhimData của một cụm rạp đã chọn, item lichChieuPhimData có thể giống ngày nhưng khác giờ chiếu
    const lichChieuPhimData = dataSelected.cumRapChieuData[indexSelect]?.lichChieuPhim
    // console.log("lichChieuPhimData ", lichChieuPhimData)

    const ngayChieuRender = lichChieuPhimData?.map(item => {
      return item.ngayChieuGioChieu.slice(0, 10);// tạo mảng mới với item là "2020-12-17" cắt ra từ 2020-12-17T10:10:00
    })
    const ngayChieuRenderRemoveDuplicates = [...(new Set(ngayChieuRender))] // xóa đi phần tử trùng lặp để hiển thị
    // console.log("removeDuplicatesNgayChieu: ", ngayChieuRenderRemoveDuplicates)

    setDataSelected(dataSelected => ({
      ...dataSelected, ngayChieuRender: ngayChieuRenderRemoveDuplicates, lichChieuPhimData
    }));

  };
  // sau khi click chọn ngày, cần lọc ra lịch chiếu tương ứng, thêm giờ để render
  // input: ngayChieu, lichChieuPhimData
  // output: setNgayXem(ngayChieu), xuatChieuRender(lichChieuPhimDataSelected)[xuatChieu], lichChieuPhimDataSelected(ngayChieu,lichChieuPhimData)[{ngayChieuGioChieu: "2019-01-01T10:10:00", maLichChieu: "16099"}], 
  const handleSelectNgayXem = (e) => {
    setAutoOpen(autoOpen => ({ ...autoOpen, xuatChieu: true }));
    setDataSelected(dataSelected => ({
      ...dataSelected, setNgayXem: e.target.value,
      // reset
      xuatChieuRender: [], lichChieuPhimDataSelected: [], setXuatChieu: '', maLichChieu: ''
    }))

    const lichChieuPhimDataSelected = dataSelected.lichChieuPhimData.filter(item => { // lấy tất cả item có ngày chiếu giống với ngày chiếu đã chọn
      if (item.ngayChieuGioChieu.slice(0, 10) === e.target.value) {
        return true
      }
      return false
    })
    // console.log("lichChieuPhimDataSelected: ", lichChieuPhimDataSelected)

    const xuatChieuRender = lichChieuPhimDataSelected.map(item => {  // ["20:00", "14:00"]
      return item.ngayChieuGioChieu.slice(11, 16)
    })
    // console.log("xuatChieuRender: ", xuatChieuRender)

    setDataSelected(dataSelected => ({
      ...dataSelected, xuatChieuRender, lichChieuPhimDataSelected,
    }));
  }

  // input: xuatChieu
  // output: setXuatChieu(xuatChieu), maLichChieu(xuatChieu)[maLichChieu]
  const handleSelectXuatChieu = (e) => {
    // console.log("xuatChieu: ", e.target.value)
    setDataSelected(dataSelected => ({
      ...dataSelected, setXuatChieu: e.target.value,
      // reset
      maLichChieu: ''
    }));

    const indexMaLichChieuSelect = dataSelected.lichChieuPhimDataSelected.findIndex(item => item.ngayChieuGioChieu.slice(11, 16) === e.target.value)
    const maLichChieu = dataSelected.lichChieuPhimDataSelected[indexMaLichChieuSelect]?.maLichChieu
    // console.log("maLichChieu: ", maLichChieu)
    setDataSelected(dataSelected => ({ ...dataSelected, maLichChieu }));
  }

  const handelMuaVe = (e) => {
    console.log("chuyển sang trang mua vé với malichchieu: ", dataSelected.maLichChieu)
  }

  const handleClosePhim = () => { setAutoOpen(autoOpen => ({ ...autoOpen, phim: false })) };
  const handleOpenPhim = () => { setAutoOpen(autoOpen => ({ ...autoOpen, phim: true })) };
  const handleCloseRap = () => { setAutoOpen(autoOpen => ({ ...autoOpen, rap: false })) };
  const handleOpenRap = () => { setAutoOpen(autoOpen => ({ ...autoOpen, rap: true })) };
  const handleCloseNgayXem = () => { setAutoOpen(autoOpen => ({ ...autoOpen, ngayXem: false })) };
  const handleOpenNgayXem = () => { setAutoOpen(autoOpen => ({ ...autoOpen, ngayXem: true })) };
  const handleCloseXuatChieu = () => { setAutoOpen(autoOpen => ({ ...autoOpen, xuatChieu: false })) };
  const handleOpenXuatChieu = () => { setAutoOpen(autoOpen => ({ ...autoOpen, xuatChieu: true })) };

  return (
    <div className={classes.root}>
      <FormControl className={classes.selectFilm} focused={false}>
        <Select
          open={autoOpen.phim}
          onClose={handleClosePhim}
          onOpen={handleOpenPhim}
          onChange={handleSelectPhim} // value={phim.maPhim} tự động truyền vào handleSelectPhim sau khi chọn phim
          value={dataSelected.setPhim}
          displayEmpty
        >
          <MenuItem value='' style={{ display: autoOpen.phim ? 'none' : 'inline' }}>Phim</MenuItem>
          {movieRender.map(phim => (<MenuItem value={phim.maPhim}>{phim.tenPhim}</MenuItem>))}
        </Select>
      </FormControl>

      <FormControl className={classes.item} focused={false}>
        <Select
          open={autoOpen.rap}
          onClose={handleCloseRap}
          onOpen={handleOpenRap}
          onChange={handleSelectRap}
          value={dataSelected.setRap}
          renderValue={(value) => `${value ? value : 'Rạp'}`}
          displayEmpty
        >
          <MenuItem value='' style={{ display: dataSelected.rapRender.length > 0 ? 'none' : 'inline' }}>Vui lòng chọn phim</MenuItem>
          {dataSelected.rapRender.map(item => (<MenuItem value={item}>{item}</MenuItem>))}
        </Select>
      </FormControl>

      <FormControl className={classes.item} focused={false}>
        <Select
          open={autoOpen.ngayXem}
          onClose={handleCloseNgayXem}
          onOpen={handleOpenNgayXem}
          onChange={handleSelectNgayXem}
          value={dataSelected.setNgayXem}
          renderValue={(value) => `${value ? value : 'Ngày xem'}`}
          displayEmpty
        >
          <MenuItem value='' style={{ display: dataSelected.ngayChieuRender.length > 0 ? 'none' : 'inline' }}>Vui lòng chọn phim và rạp</MenuItem>
          {dataSelected.ngayChieuRender.map(ngayChieu => (
            <MenuItem value={ngayChieu}>
              {formatDate(ngayChieu)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.item} focused={false}>
        <Select
          open={autoOpen.xuatChieu}
          onClose={handleCloseXuatChieu}
          onOpen={handleOpenXuatChieu}
          onChange={handleSelectXuatChieu}
          value={dataSelected.setXuatChieu}
          renderValue={(value) => `${value ? value : 'Xuất chiếu'}`}
          displayEmpty
        >
          <MenuItem value='' style={{ display: dataSelected.xuatChieuRender.length > 0 ? 'none' : 'inline' }}>Vui lòng chọn phim, rạp và ngày xem</MenuItem>
          {dataSelected.xuatChieuRender.map(xuatChieu => (<MenuItem value={xuatChieu}>{xuatChieu}</MenuItem>))}
        </Select>
      </FormControl>

      <FormControl className={classes.item} focused={false}>
        <button onClick={handelMuaVe}>mua vé ngay</button>
      </FormControl>
    </div >
  );
}

// XỬ LÝ data
// mỗi hệ thống rạp BHDStar, Galaxy... có nhiều điểm chiếu phim ở nhiều vị trí trong thành phố
// từ mã phim đã có > getThongTinLichChieuPhim trả về mảng chứa nhiều obj, mỗi obj đại diện cho một hệ thống rạp(ví dụ BHDStar) với nhiều điểm chiếu phim lưu trong cumRapChieu
// ta cần gom hết tất cả cumRapChieu của mỗi item(BHDStar, Galaxy) về chung một mảng để hiển thị ở "Rạp"

// HIỆN 'Xuất chiếu' CÓ ĐIỀU KIỆN
// value truyền vào Select sẽ truyền tiếp vào renderValue để hiển thị, nếu value '' thì hiện 'Xuất chiếu', khi chọn item, value của MenuItem được truyền vào renderValue để hiển thị
// displayEmpty giúp luôn hiển thị giá trị mặc định khi value truyền vào Select là ''

// HIỆN 'Vui lòng chọn phim, rạp và ngày xem' CÓ ĐIỀU KIỆN dựa trên dataSelected.xuatChieuRender
