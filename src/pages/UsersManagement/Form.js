import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { addUser, putUserUpdate } from '../../reducers/actions/UsersList';
const useStyles = makeStyles({

    downRangeSm: {
        width: "598px",
        height: "336px"
    },
    upKeyMd: {
        width: "898px",
        height: "505px"
    },
});
export default function Form(props) {
    const classes = useStyles()
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));

    // lấy biến loading để set disable cho các button và error để show vào TH FAIL
    const { loading, error } = useSelector((state) => state.usersList);

    const dispatch = useDispatch()


    // giá trị user và biến set TH disabled cái tài khoản hay không, nhận từ component cha
    const { userUpdate, onChangeTK } = props

    const [user, setUser] = useState({
        taiKhoan: userUpdate.taiKhoan || "",
        matKhau: userUpdate.matKhau || "",
        email: userUpdate.email || "",
        soDt: userUpdate.soDt || "",
        maNhom: userUpdate.maNhom || "GP01",
        maLoaiNguoiDung: userUpdate.maLoaiNguoiDung || "KhachHang",
        hoTen: userUpdate.hoTen || "",
    });


    useEffect(() => {
        setUser(userUpdate)
    }, [userUpdate])

    // hàm thay đổi user khi điền vào form ngay lập tức
    const handleChange = evt => {
        const { name, value } = evt.target;
        setUser((currentForm) => ({ ...currentForm, [name]: value }))
    }

    const handleUser = (user) => {
        //  Ở đây xài cùng 1 form cho cả update và add, nên ta kiểm tra biến onChangeTK, nếu là true ( TH taiKhoan bị disabled thì nghĩa là đang cập nhập, và gọi api CapNhap. Nêú onChangeTK là false thì nghĩa là đang thêm vào mới, và gọi api ThemMoi)
        console.log(user)
        let typeOfUserAction = user
        if (onChangeTK) {
            dispatch(putUserUpdate(user))
            typeOfUserAction = { ...typeOfUserAction, type: 'update' }
        }
        else {

            dispatch(addUser(user))
            typeOfUserAction = { ...typeOfUserAction, type: 'add' }
        }

        // truyền user đã update lên và tiến hành đóng form lại
        props.onClose(typeOfUserAction)
        // thay đổi giá trị set biến để disable cái tài khoản hay không
        props.onChangeIsActive()


    }

    return (
        <div className={`${sm && classes.downRangeSm} ${md && classes.upKeyMd} w-100 h-100`} >
            <div className="mx-3 text-light">
                <div className="d-flex">
                    <div>
                        <div className="form-group">
                            <label htmlFor="taiKhoan">Tài Khoản</label>
                            <input
                                type="text"
                                className="form-control"
                                id="taiKhoan"
                                name="taiKhoan"
                                value={user.taiKhoan} // khi đăng ký không thành công thì page sẽ load lại > dữ liệu cũ đã ghi sẽ bị xóa > thao tác này sẽ lấy giữ lại đúng giá trị cũ
                                onChange={handleChange}
                                disabled={onChangeTK}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="matKhau">Mật Khẩu</label>
                            <input
                                type="text"
                                className="form-control"
                                id="matKhau"
                                name="matKhau"
                                value={user.matKhau}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="matKhau">email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="soDt">Số Điện Thoại</label>
                            <input
                                type="number"
                                className="form-control"
                                id="soDt"
                                name="soDt"
                                value={user.soDt}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="form-group">
                            <label htmlFor="hoTen">Họ Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                id="hoTen"
                                name="hoTen"
                                value={user.hoTen}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maNhom">Mã Nhóm</label>
                            <select
                                className="form-control"
                                id="maNhom"
                                name="maNhom"
                                value={user.maNhom}
                                onChange={handleChange}
                            >
                                <option value="GP01">GP01</option>
                                <option value="GP02" >GP02</option>
                                <option value="GP03">GP03</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="maLoaiNguoiDung">Mã Loại Người Dùng</label>
                            <select
                                className="form-control"
                                id="maLoaiNguoiDung"
                                name="maLoaiNguoiDung"
                                value={user.maLoaiNguoiDung}
                                onChange={handleChange}
                            >
                                <option value="KhachHang">Khách Hàng</option>
                                <option value="QuanTri" >Quản Trị</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className="btn btn-success" onClick={() => handleUser(user)} disabled={loading}>
                    {onChangeTK ? "Cập nhập" : "Thêm vào"}

                </button>



                {/* nếu tồn tại lỗi thì hiện lỗi */}
                {/* {error ? <div className="alert alert-danger"><span> {error}</span></div> : null} */}
            </div>
        </div>
    )
}