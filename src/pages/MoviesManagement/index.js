import React, { useEffect, useState, useRef } from 'react';

import { DataGrid, GridToolbar, GridOverlay } from '@material-ui/data-grid';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Dialog from '@material-ui/core/Dialog';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RenderCellExpand from './RenderCellExpand';

import { useStyles, DialogContent, DialogTitle } from './styles';
import { getMovieListManagement, deleteMovie, updateMovieUpload, resetMoviesManagement, updateMovie, addMovieUpload } from "../../reducers/actions/Movie";
import Action from './Action';
import ThumbnailYoutube from './ThumbnailYoutube';
import Form from './Form';

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <CircularProgress style={{ margin: "auto" }} />
      </div>
    </GridOverlay>
  );
}

export default function MoviesManagement() {
  const [movieListDisplay, setMovieListDisplay] = useState([])
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { movieList2, loadingMovieList2, loadingDeleteMovie, errorDeleteMovie, successDeleteMovie, successUpdateMovie, errorUpdateMovie, loadingUpdateMovie, loadingAddUploadMovie, successAddUploadMovie, errorAddUploadMovie, loadingUpdateNoneImageMovie, successUpdateNoneImageMovie, errorUpdateNoneImageMovie } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  const newImageUpdate = useRef("")
  const callApiChangeImageSuccess = useRef(false)
  const [valueSearch, setValueSearch] = useState("")
  const clearSetSearch = useRef(0)
  const [openModal, setOpenModal] = React.useState(false);
  const selectedPhim = useRef(null)
  useEffect(() => {
    if (!movieList2 || successUpdateMovie || successUpdateNoneImageMovie || successDeleteMovie || successAddUploadMovie) {
      dispatch(getMovieListManagement())
    }
    return () => dispatch(resetMoviesManagement())
  }, [successUpdateMovie, successUpdateNoneImageMovie, successDeleteMovie, successAddUploadMovie])

  useEffect(() => {
    if (movieList2) {
      let newMovieListDisplay
      newMovieListDisplay = movieList2.map(movie => ({ ...movie, xoa: "", id: movie.maPhim, }))
      setMovieListDisplay(newMovieListDisplay)
    }
  }, [movieList2])

  useEffect(() => { // delete movie xong thì thông báo
    if (successDeleteMovie) {
      enqueueSnackbar(successDeleteMovie, { variant: 'success', })
    }
    if (errorDeleteMovie) {
      enqueueSnackbar(errorDeleteMovie, { variant: 'error', })
    }
    dispatch(resetMoviesManagement())
  }, [errorDeleteMovie, successDeleteMovie])

  useEffect(() => {
    if (successUpdateMovie || successUpdateNoneImageMovie) {
      callApiChangeImageSuccess.current = true
      enqueueSnackbar(`Update thành công phim: ${successUpdateMovie.tenPhim ?? ""}${successUpdateNoneImageMovie.tenPhim ?? ""}`, { variant: 'success', })
    }
    if (errorUpdateMovie || errorUpdateNoneImageMovie) {
      callApiChangeImageSuccess.current = false
      enqueueSnackbar(`${errorUpdateMovie ?? ""}${errorUpdateNoneImageMovie ?? ""}`, { variant: 'error', })
    }
    dispatch(resetMoviesManagement())
  }, [successUpdateMovie, errorUpdateMovie, successUpdateNoneImageMovie, errorUpdateNoneImageMovie])

  useEffect(() => {
    if (successAddUploadMovie) {
      enqueueSnackbar(`Thêm thành công phim: ${successAddUploadMovie.tenPhim}`, { variant: 'success', })
    }
    if (errorAddUploadMovie) {
      enqueueSnackbar(errorAddUploadMovie, { variant: 'error', })
    }
    dispatch(resetMoviesManagement())
  }, [successAddUploadMovie, errorAddUploadMovie])

  // xóa một phim
  const handleDeleteOne = (maPhim) => {
    if (loadingDeleteMovie) { // nếu click xóa liên tục một user
      return undefined
    }
    dispatch(deleteMovie(maPhim))
  }
  const handleEdit = (phimItem) => {
    selectedPhim.current = phimItem
    setOpenModal(true)
  }

  const onUpdate = (movieObj, hinhAnh, fakeImage) => {
    if (loadingUpdateMovie || loadingUpdateNoneImageMovie) {
      return undefined
    }
    setOpenModal(false);
    newImageUpdate.current = fakeImage
    if (typeof hinhAnh === "string") { // nếu dùng updateMovieUpload sẽ bị reset danhGia về 10
      const movieUpdate = movieListDisplay.find(movie => movie.maPhim === fakeImage.maPhim) // lẩy ra url gốc, tránh gửi base64 tới backend
      movieObj.hinhAnh = movieUpdate.hinhAnh
      dispatch(updateMovie(movieObj))
      return undefined
    }
    dispatch(updateMovieUpload(movieObj))
  }
  const onAddMovie = (movieObj) => {
    if (loadingAddUploadMovie) {
      return undefined
    }
    setOpenModal(false);
    dispatch(addMovieUpload(movieObj))
  }
  const handleAddMovie = () => {
    const emtySelectedPhim = {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      maNhom: '',
      ngayKhoiChieu: "",
      danhGia: 10,
    }
    selectedPhim.current = emtySelectedPhim
    setOpenModal(true)
  }

  const handleInputSearchChange = (props) => {
    clearTimeout(clearSetSearch.current);
    clearSetSearch.current = setTimeout(() => {
      setValueSearch(props)
    }, 500);
  }

  const onFilter = () => { // dùng useCallback
    function removeAccents(str) { // bỏ dấu tiếng việt
      return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }
    let searchMovieListDisplay = movieListDisplay.filter(movie => {
      const matchTenPhim = removeAccents((movie.tenPhim ?? "")?.toLowerCase())?.indexOf(removeAccents(valueSearch.toLowerCase())) !== -1
      const matchMoTa = removeAccents((movie.moTa ?? "")?.toLowerCase())?.indexOf(removeAccents(valueSearch.toLowerCase())) !== -1
      const matchNgayKhoiChieu = removeAccents((movie.ngayKhoiChieu ?? "")?.toLowerCase())?.indexOf(removeAccents(valueSearch.toLowerCase())) !== -1
      return matchTenPhim || matchMoTa || matchNgayKhoiChieu
    })
    if (newImageUpdate.current && callApiChangeImageSuccess.current) { // hiển thị hình bằng base64 thay vì url, lỗi react không hiển thị đúng hình mới cập nhật(đã cập hình thanh công nhưng url backend trả về giữ nguyên đường dẫn)
      searchMovieListDisplay = searchMovieListDisplay.map(movie => {
        if (movie.maPhim === newImageUpdate.current.maPhim) {
          return { ...movie, hinhAnh: newImageUpdate.current.srcImage }
        }
        return movie
      })
    }
    return searchMovieListDisplay
  }

  const columns =
    [
      { field: 'xoa', headerName: 'Hành Động', width: 130, renderCell: (params) => <Action onEdit={handleEdit} onDeleted={handleDeleteOne} phimItem={params.row} />, headerAlign: 'center', align: "left", headerClassName: 'custom-header', },
      { field: 'tenPhim', headerName: 'Tên phim', width: 250, headerAlign: 'center', align: "left", headerClassName: 'custom-header', renderCell: RenderCellExpand },
      {
        field: 'trailer', headerName: 'Trailer', width: 130, renderCell: (params) => <div style={{ display: "inline-block" }}>
          <ThumbnailYoutube urlYoutube={params.row.trailer} />
        </div>, headerAlign: 'center', align: "center", headerClassName: 'custom-header',
      },
      { field: 'hinhAnh', headerName: 'Hình ảnh', width: 200, headerAlign: 'center', align: "center", headerClassName: 'custom-header', renderCell: RenderCellExpand },
      { field: 'moTa', headerName: 'Mô Tả', width: 200, headerAlign: 'center', align: "left", headerClassName: 'custom-header', renderCell: RenderCellExpand },
      { field: 'ngayKhoiChieu', headerName: 'Ngày khởi chiếu', width: 160, type: 'date', headerAlign: 'center', align: "center", headerClassName: 'custom-header', valueFormatter: (params) => params.value.slice(0, 10), },
      { field: 'danhGia', headerName: 'Đánh giá', width: 120, headerAlign: 'center', align: "center", headerClassName: 'custom-header', },
      { field: 'maPhim', hide: true, width: 130 },
      { field: 'maNhom', hide: true, width: 130 },
      { field: 'biDanh', hide: true, width: 200, renderCell: RenderCellExpand },
    ]

  return (
    <div style={{ height: "80vh", width: '100%' }}>
      <div className={classes.control}>
        <Button
          variant="contained"
          color="primary"
          className={classes.addMovie}
          onClick={handleAddMovie}
          disabled={loadingAddUploadMovie}
          startIcon={<AddBoxIcon />}
        >Add movie</Button>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={(evt) => handleInputSearchChange(evt.target.value)}
          />
        </div>
      </div>
      <DataGrid
        className={classes.rootDataGrid}
        rows={onFilter()}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[10, 25, 50]}
        // hiện loading khi
        loading={loadingUpdateMovie || loadingDeleteMovie || loadingMovieList2 || loadingUpdateNoneImageMovie}
        components={{ LoadingOverlay: CustomLoadingOverlay }}
        // sort
        sortModel={[{ field: 'tenPhim', sort: 'asc', },]}
        // hiện thị GridToolbar
        components={{ Toolbar: GridToolbar, }}
      />
      <Dialog open={openModal}>
        <DialogTitle onClose={() => setOpenModal(false)}>{selectedPhim?.current?.tenPhim ? `Sửa phim: ${selectedPhim?.current?.tenPhim}` : "Thêm Phim"}</DialogTitle>
        <DialogContent dividers>
          <Form selectedPhim={selectedPhim.current} onUpdate={onUpdate} onAddMovie={onAddMovie} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
