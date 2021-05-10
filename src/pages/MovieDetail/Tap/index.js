import React, { useEffect, useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Rating from '@material-ui/lab/Rating';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { useLocation, useHistory } from "react-router-dom";

import { FAKE_AVATAR, avtIdUser, UNKNOW_USER } from '../../../constants/config';
import useStyles from './style';
import scroll from '../../../utilities/scroll';
import LichChieuDesktop from './LichChieuDesktop';
import LichChieuMobile from './LichChieuMobile';
import { getComment, postComment, likeComment } from '../../../reducers/actions/MovieDetail';
import { selectCommentByMaPhimAndCommentTest } from '../../../reducers/selector/MovieDetail';
import moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi');


function TabPanel(props) {
  const { isMobile, children, value, index, ...other } = props;
  return (<div hidden={value !== index}  {...other} >
    <Box p={(isMobile && index === 0) ? 0 : 3}>
      {children}
    </Box>
  </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


export default function CenteredTabs({ data, onClickBtnMuave, isMobile, onIncreaseQuantityComment }) {
  const param = useParams() // mã phim lấy từ url trên trình duyệt
  const { currentUser } = useSelector(state => state.authReducer);
  const { loadingPostComment, postCommentObj, loadingLikeComment, likeCommentObj } = useSelector(state => state.movieDetailReducer);
  const { commentList } = useSelector(state => selectCommentByMaPhimAndCommentTest(state, param.maPhim));
  const classes = useStyles()
  const dispatch = useDispatch()
  let location = useLocation();
  const history = useHistory();
  const [valueTab, setValueTab] = useState(0)
  const [croll, setCroll] = useState(0)
  const [openComment, setOpenComment] = useState(false);
  const [warningtext, setwarningtext] = useState(false)
  // const [commentList, setCommentList] = useState([])
  const [dataComment, setdataComment] = useState({
    avtId: avtIdUser,
    username: currentUser?.hoTen,
    point: 2.5,
    post: "",
    likes: 0,
    maPhim: param.maPhim,
    dataTest: false,
    createdAt: "",
    userLikeThisComment: [],
  })

  // phục vụ kh nhấp btn mua vé
  useEffect(() => {
    window.scrollTo(0, 0) // ngăn window.history.scrollRestoration = 'auto';
    setValueTab(() => 0)
    setCroll(() => onClickBtnMuave)
  }, [onClickBtnMuave]) // khi click muave thì mới mở tap 0 > đổi giá trị croll để scroll tới TapMovieDetail

  useEffect(() => {
    if (onClickBtnMuave !== 0) { // không scroll khi mới load topDesktopMovieDetail
      scroll("TapMovieDetail")
    }
  }, [croll]) // khi nhấn muave và đã hoàn thành mở tap 0 thì scroll

  useEffect(() => { // khi commentList lấy về thành công thì cập nhật số người bình luận
    if (commentList?.length && !isMobile) {
      onIncreaseQuantityComment(commentList?.length)
    }
  }, [commentList])

  const handlePostComment = () => {
    if (loadingPostComment) {
      return
    }
    if (dataComment.post.length < 61) { // nếu comment quá ngắn
      setwarningtext(true)
      return
    }
    setwarningtext(false)
    const currentISOString = new Date().toISOString();
    // xử lý delay: update thông tin ảo trước khi postComment
    // setOpenComment(false);
    // setCommentList(commentList => [{ ...dataComment, createdAt: currentISOString, point: dataComment.point * 2 }, ...commentList])
    // setdataComment(data => ({ ...data, post: "", point: 2.5 })) // reset data

    setOpenComment(false);
    dispatch(postComment({ ...dataComment, createdAt: currentISOString, point: dataComment.point * 2 }))
  }
  useEffect(() => { // mỗi khi mount component, postComment, likeComment thành công thì call api lấy comment mới
    dispatch(getComment())
  }, [postCommentObj, likeCommentObj])

  const handleLike = (id) => {
    if (loadingLikeComment) {
      return
    }
    if (!currentUser) {
      isLogin()
      return
    }
    // tăng giảm số lượng like và add/remove email đã like
    const commentUserLiked = commentList.find(item => item.id === id)
    if (commentUserLiked.userLikeThisComment.includes(currentUser.email)) { // xóa user khỏi danh sách liked comment, trừ số lượng like
      commentUserLiked.userLikeThisComment = commentUserLiked.userLikeThisComment.filter((item) => {
        return item !== currentUser.email
      })
      commentUserLiked.likes = commentUserLiked.likes - 1
    } else {
      commentUserLiked.userLikeThisComment.push(currentUser.email)
      commentUserLiked.likes = commentUserLiked.likes + 1
    }
    // const newCommentList = commentList.map(item => {
    //   if (item.id === id) {
    //     return commentUserLiked
    //   } return item
    // })
    // setCommentList(newCommentList) // hiện giá trị ảo ngay lập tức

    dispatch(likeComment(id, commentUserLiked))
  }

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };
  const handletyping = (event) => {
    if (event.target.value.length >= 61) { // nếu comment quá ngắn
      setwarningtext(false)
    }
    setdataComment(data => ({ ...data, post: event.target.value }))
  }
  const handleClose = () => {
    setOpenComment(false);
  };
  const isLogin = () => {
    if (!currentUser) {// nếu chưa đăng nhập
      Swal.fire({
        title: 'Bạn cần phải đăng nhập',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Đăng nhập',
        cancelButtonText: 'Không',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/dangnhap", location.pathname);
        }
      })
    }
  }
  const handleClickComment = () => {
    if (!currentUser) {
      isLogin()
      return
    }
    setOpenComment(true);
    setwarningtext(false)
  }

  return (
    <div className={classes.root} id="TapMovieDetail">
      <AppBar position="static" color="default" classes={{ root: classes.appBarRoot }}>
        <Tabs
          value={valueTab}
          onChange={handleChange}
          centered
          classes={{ indicator: classes.indicator }}
        >
          <Tab disableRipple label="Lịch Chiếu" classes={{ selected: classes.selectedTap, root: classes.tapRoot }} />
          <Tab disableRipple label="Nội Dung" classes={{ selected: classes.selectedTap, root: classes.tapRoot }} />
          <Tab disableRipple label="Đánh Giá" classes={{ selected: classes.selectedTap, root: classes.tapRoot }} />
        </Tabs>
      </AppBar>
      <Fade timeout={400} in={valueTab === 0}>
        <TabPanel value={valueTab} index={0} isMobile={isMobile}>
          {isMobile ? <LichChieuMobile /> : <LichChieuDesktop data={data} isMobile={isMobile} />}
        </TabPanel>
      </Fade>
      <Fade timeout={400} in={valueTab === 1}>
        <TabPanel value={valueTab} index={1}>
          <div className="text-light"><p>{data.moTa}</p></div>
        </TabPanel>
      </Fade>
      <Fade timeout={400} in={valueTab === 2}>
        <TabPanel value={valueTab} index={2}>
          <div className={classes.danhGia}>
            <div className={classes.inputRoot} onClick={handleClickComment}>
              <span className={classes.avatarReviewer}>
                <img src={currentUser ? FAKE_AVATAR : UNKNOW_USER} alt="avatar" className={classes.avatarImg} />
              </span>
              <input className={classes.inputReviwer} type="text" placeholder="Bạn nghĩ gì về phim này?" readOnly="readonly" />

              <span className={classes.imgReviewerStar}>
                <Rating value={5} size={isMobile ? "small" : "medium"} readOnly />
              </span>
            </div>
          </div>
          {commentList?.map((item, i) => (
            <div key={`${item.avtId}${i}`} className={classes.itemDis}>
              <div className={classes.infoUser}>
                <div className={classes.left}>
                  <span className={classes.avatar}>
                    <img src={`https://i.pravatar.cc/150?u=${item.avtId}`} alt="avatar" className={classes.avatarImg} />
                  </span>
                  <span className={classes.liveUser}>
                    <p className={classes.userName}>{item.username}</p>
                    <p className={classes.timePost}>{moment(item.createdAt).fromNow()}</p>
                  </span>
                </div>
                <div className={classes.right}>
                  <p className="text-success">{item.point}</p>
                  <Rating value={(item.point * 5) / 10} precision={0.5} size={isMobile ? "small" : "medium"} readOnly />
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="py-3 mb-3 border-bottom">
                <p className="text-break">{item.post}</p>
              </div>
              <span className="d-inline-block" style={{ cursor: "pointer" }} onClick={() => handleLike(item.id)}>
                <span className="mr-2">
                  {((userLikeThisComment) => {
                    return <ThumbUpIcon style={{ color: userLikeThisComment.includes(currentUser?.email) ? "#fb4226" : "#73757673" }} />
                  })(item.userLikeThisComment)}
                </span>
                <span style={{ color: "#737576" }}><span>{item.likes}</span> Thích</span>
              </span>
            </div>
          ))}
        </TabPanel>
      </Fade>


      <Dialog open={openComment} onClose={handleClose} maxWidth="sm" fullWidth className={classes.dialog}>
        <MuiDialogTitle disableTypography className={classes.rootcloseButton} >
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <span className={classes.pointPopup}>{dataComment.point * 2}</span>
          <Rating
            name="customStar"
            size="large"
            precision={0.5}
            value={dataComment.point}
            className={classes.startPopup}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            onChange={(event, newValue) => {
              setdataComment(data => ({ ...data, point: newValue }));
            }}
          />
        </Grid>
        <DialogContent className={classes.dialogContent}>
          <TextField
            className={classes.textField}
            onChange={(event) => handletyping(event)}
            fullWidth
            value={dataComment.post}
            variant="outlined"
            label={dataComment.post ? "" : "Nói cho mọi người biết bạn nghĩ gì về phim này..."}
          />
        </DialogContent>
        <DialogActions className="justify-content-center flex-column px-4">
          {warningtext && <DialogContentText className="text-danger">Phim đem đến cảm xúc tuyệt vời cho bạn chứ? Chia sẻ thêm nữa đi bạn ơi và nhớ gõ trên 60 kí tự nhé.
          </DialogContentText>}
          <Button onClick={handlePostComment} variant="contained" className={classes.btnDang}>
            Đăng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// commentApi.postComment(discussionData[dem])
// .then(result => {
//   console.log("post comment ok ,  ", result.data, result)
// }
// )
// .catch(
//   error => {
//     console.log("post comment lỗi,  ", error)
//   }
// )
// setdem(data => data + 1)

