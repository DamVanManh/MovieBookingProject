import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import { deleteUser, getUsersList } from "../../reducers/actions/UsersList";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Form from './Form';
const columns = [
  { id: 'action', label: 'Hành Động', minWidth: 170 },
  { id: 'taiKhoan', label: 'Tài Khoản', minWidth: 170 },
  { id: 'matKhau', label: 'Mật khẩu', minWidth: 100 },
  {
    id: 'hoTen',
    label: 'Họ Tên',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'soDt',
    label: 'Số Điện Thoại',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'maLoaiNguoiDung',
    label: 'Loại Người Dùng',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  box: {
    backgroundColor: "#F4F6F8",
    minHeight: '90vh',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: "translate(50%,-50%)",

    border: '2px solid white',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': { opacity: 0.7 },
    transition: "all .2s",

  },
  downRangeSm: {
    width: "598px",
    height: "336px"
  },
  upKeyMd: {
    width: "898px",
    height: "505px"
  },
});

export default function UsersManagement() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // biến set đóng mở cái dialog
  const [open, setOpen] = useState(false);

  // biến chứa user được chọn để update
  const [userSelect, setUserSelect] = useState({})

  // biến set TH disable cái taiKhoan khi tiến hành update tài khoản
  const [isActive, setIsActive] = useState(false)

  // usersList chứa toàn bộ tài khoản
  const { usersList, loading, error } = useSelector((state) => state.usersList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList())
  }, [])

  // khi nhấn mũi tên tăng hoặc giảm số page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);// tự tăng số page lên 1 từ mặc định 0
    console.log('action 1')
  };
  // khi thay đổi Rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    console.log('action 2')
  };


  const handleDelete = (taiKhoan) => {
    dispatch(deleteUser(taiKhoan))

    const index = usersList.findIndex(user => user.taiKhoan === taiKhoan)
    usersList.splice(index, 1)
  }

  // TRUYỀN DATA XUỐNG FORM VÀ BUNG FORM RA: NHẤN VÀO NÚT EDIT
  const handleUpdate = (user) => {

    // thêm giá trị mã nhóm vào vì user đẩy lên ko có mã nhóm
    const updateUser = { ...user, maNhom: 'GP01' }

    setUserSelect(updateUser)

    handleButton()
    handleTaiKhoan()
  }

  // hàm thay đổi biến để set TH disable của input Tài Khoản (update ko đc sửa tài khoản, còn thêm mới thì đc)
  const handleTaiKhoan = () => {
    setIsActive(!isActive)
  }

  // hàm set đóng mở của dialog
  const handleButton = () => {
    setOpen(!open)
  }

  // hàm tiến hành mở dialog và thay đổi userList sau khi update
  const handleUpdateUser = (userUpdate) => {
    handleButton()

    // thay đổi bằng cách tìm vị trí của user đẩy lên và thay nó thành user đã update. userList lúc này vẫn chưa được gọi api lại nên chưa thay đổi
    const index = usersList.findIndex(user => user === userUpdate)
    usersList.splice(usersList[index - 1], 1, userUpdate)

  }

  return (

    <div>

      <Box px={3} className={classes.box}>
        {/* {console.log('page page ', usersList[0])} */}
        <Typography variant="h2" gutterBottom>
          Quản Lý Tài Khoản
      </Typography>
        <Paper className={classes.root}>

          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* cắt dữ liệu trong mảng ra */}
                {/* usersList */}
                {usersList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  // console.log(row.taiKhoan)
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.taiKhoan}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        // console.log(value)

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {/* nếu không tồn tại props thì in ra hành động xóa và chỉnh sửa */}
                            { typeof value !== "undefined" ? value :
                              <Grid container direction="row" justify="space-around" alignItems="center" >

                                {/* NÚT EDIT */}
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                  <EditIcon color="primary" onClick={() => handleUpdate(row)} />
                                </IconButton>

                                {/* NÚT DELETE */}
                                <IconButton color="primary" aria-label="upload picture" component="span">

                                  {/* onClick={() => dispatch(deleteUser(row.taiKhoan))} */}
                                  <DeleteForeverIcon color="primary" onClick={() => handleDelete(row.taiKhoan)} />

                                </IconButton>

                              </Grid>}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={usersList.length} // độ dài
            rowsPerPage={rowsPerPage}
            page={page}// trang hiện tại
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>

      </Box>

      <Dialog
        open={open}
        maxWidth='md'
      >
        <Form onClose={handleUpdateUser} userUpdate={userSelect} onChangeTK={isActive} onChangeIsActive={handleTaiKhoan} />

        <IconButton className={classes.closeButton} onClick={() => handleButton()}  >
          <CloseIcon style={{ color: 'red' }} fontSize='small' />
        </IconButton>

      </Dialog>
    </div>
  );
}
