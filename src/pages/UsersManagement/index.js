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

import { getUsersList } from "../../reducers/actions/UsersList";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
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
  }
});

export default function UsersManagement() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // usersList chứa toàn bộ tài khoản
  const { usersList, loading, error } = useSelector((state) => state.usersList);
  const dispatch = useDispatch();
  // thực hiện lấy tài khoản về hiển thị
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

  return (

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
              {usersList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.taiKhoan}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {/* nếu không tồn tại props thì in ra hành động xóa và chỉnh sửa */}
                          { typeof value !== "undefined" ? value :
                            <Grid container direction="row" justify="space-around" alignItems="center" >
                              <IconButton color="primary" aria-label="upload picture" component="span">
                                <EditIcon color="primary" />
                              </IconButton>
                              <IconButton color="primary" aria-label="upload picture" component="span">
                                <DeleteForeverIcon color="primary" />
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
  );
}
