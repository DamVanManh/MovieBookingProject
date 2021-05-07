// import React, { useEffect, useState } from 'react';

// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import PropTypes from 'prop-types';
// import Fade from '@material-ui/core/Fade';
// import AppBar from '@material-ui/core/AppBar';
// import Rating from '@material-ui/lab/Rating';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import { useParams } from "react-router-dom";
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import { withStyles } from "@material-ui/core"
// import Grid from '@material-ui/core/Grid';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid'

// import { FAKE_AVATAR, avtIdUser } from '../../../constants/config';
// import useStyles from './style';
// import scroll from '../../../utilities/scroll';
// import LichChieuDesktop from './LichChieuDesktop';
// import LichChieuMobile from './LichChieuMobile';
// import discussionData from '../../../constants/discussionData';
// import commentApi from '../../../api/commentApi';

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//     padding: 4,
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const RatingStyle = withStyles({
//   iconFilled: {
//     color: '#ff6d75',
//   },
//   iconHover: {
//     color: '#ff3d47',
//   },
//   iconEmpty: {
//     color: 'green',
//   }
// })(Rating);

// function TabPanel(props) {
//   const { isMobile, children, value, index, ...other } = props;
//   return (<div hidden={value !== index}  {...other} >
//     <Box p={(isMobile && index === 0) ? 0 : 3}>
//       {children}
//     </Box>
//   </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// export default function CenteredTabs({ data, onClickBtnMuave, isMobile, onIncreaseQuantityComment }) {
//   const { currentUser } = useSelector((state) => state.authReducer);
//   const classes = useStyles()
//   const [value, setValue] = useState(0)
//   const [croll, setCroll] = useState(0)
//   const param = useParams() // mã phim lấy từ url trên trình duyệt
//   const [open, setOpen] = useState(false);
//   const [warningtext, setwarningtext] = useState(false)
//   const [commentMovie, setCommentMovie] = useState(discussionData)
//   const [dataComment, setdataComment] = useState({
//     avtId: avtIdUser,
//     username: currentUser.hoTen,
//     point: 2.5,
//     post: "",
//     likes: 0,
//     isLiked: false,
//     maPhim: param.maPhim,
//     dataTest: false,
//   })

//   useEffect(() => {
//     window.scrollTo(0, 0) // ngăn window.history.scrollRestoration = 'auto';
//     setValue(() => 0)
//     setCroll(() => onClickBtnMuave)
//   }, [onClickBtnMuave]) // khi click muave thì mới mở tap 0 > đổi giá trị croll để scroll tới TapMovieDetail

//   useEffect(() => {
//     if (onClickBtnMuave !== 0) { // không scroll khi mới load topDesktopMovieDetail
//       scroll("TapMovieDetail")
//     }
//   }, [croll]) // khi nhấn muave và đã hoàn thành mở tap 0 thì scroll

//   useEffect(() => {
//     onIncreaseQuantityComment(commentMovie.length)
//   }, [commentMovie])

//   useEffect(() => { // lấy bình luận về khi mới load
//     commentApi.getComment(dataComment)
//       .then(result => {
//         // const commentExisted = result.data.filter(item => item.maPhim === param.maPhim)
//         const commentExisted = result.data.filter(item => item.maPhim === param.maPhim)
//         setCommentMovie((data) => ([...commentExisted, ...data]))
//       }
//       )
//       .catch(
//         error => {
//           console.log("get lỗi,  ", error)
//         }
//       )
//   }, [])

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleClickComment = (params) => {
//     setOpen(true);
//     setwarningtext(false)
//   }

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handlePostComment = () => {
//     if (dataComment.post.length < 61) {
//       setwarningtext(true)
//       return
//     }
//     setwarningtext(false)
//     commentApi.postComment(dataComment)
//       .then(result => {
//         setOpen(false);
//         setdataComment(data => ({ ...data, post: "" }))
//         setCommentMovie((data) => ([result.data, ...data]))
//       }
//       )
//       .catch(
//         error => {
//           setdataComment(data => ({ ...data, post: "" }))
//         }
//       )
//   }
//   const handletyping = (event) => {
//     setdataComment(data => ({ ...data, post: event.target.value }))
//   }

//   // console.log(" param ", param.maPhim, commentMovie);

//   return (
//     <div className={classes.root} id="TapMovieDetail">
//       <AppBar position="static" color="default" classes={{ root: classes.appBarRoot }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           centered
//           classes={{ indicator: classes.indicator }}
//         >
//           <Tab disableRipple label="Lịch Chiếu" classes={{ selected: classes.selectedTap, root: classes.tapRoot }} />
//           <Tab disableRipple label="Nội Dung" classes={{ selected: classes.selectedTap, root: classes.tapRoot }} />
//           <Tab disableRipple label="Đánh Giá" classes={{ selected: classes.selectedTap, root: classes.tapRoot }} />
//         </Tabs>
//       </AppBar>
//       <Fade timeout={400} in={value === 0}>
//         <TabPanel value={value} index={0} isMobile={isMobile}>
//           {isMobile ? <LichChieuMobile /> : <LichChieuDesktop data={data} isMobile={isMobile} />}
//         </TabPanel>
//       </Fade>
//       <Fade timeout={400} in={value === 1}>
//         <TabPanel value={value} index={1}>
//           <div className="text-light">{data.moTa}</div>
//         </TabPanel>
//       </Fade>
//       <Fade timeout={400} in={value === 2}>
//         <TabPanel value={value} index={2}>
//           <div className={classes.danhGia}>
//             <div className={classes.inputRoot} onClick={handleClickComment}>
//               <span className={classes.avatarReviewer}>
//                 <img src={FAKE_AVATAR} alt="avatar" className={classes.avatar} />
//               </span>
//               <input className={classes.inputReviwer} type="text" placeholder="Bạn nghĩ gì về phim này?" readOnly="readonly" />

//               <span className={classes.imgReviewerStar}>
//                 <Rating value={5} size={isMobile ? "small" : "medium"} readOnly />
//               </span>
//             </div>
//           </div>
//           {commentMovie.map((item, i) => (
//             <div key={`${item.avtId}${i}`} className={classes.itemDis}>
//               <div className={classes.infoUser}>
//                 <div className={classes.left}>
//                   <span className={classes.ghi}>
//                     <img src={`https://i.pravatar.cc/150?u=${item.avtId}`} alt="avatar" className={classes.avatar} />
//                   </span>
//                   <span className={classes.username}>{item.username}</span>
//                 </div>
//                 <div className={classes.right}>
//                   <p className="text-success">{item.point}</p>
//                   <Rating value={(item.point * 5) / 10} precision={0.5} readOnly />
//                 </div>
//               </div>
//               <div className="py-3 border-bottom">
//                 <p className="text-break">{item.post}</p>
//               </div>
//               <div className="pt-3">
//                 <span className="mr-2">
//                   <ThumbUpIcon color="disabled" />
//                 </span>
//                 <span><strong>{item.likes}</strong> Thích</span>
//               </div>
//             </div>
//           ))}
//         </TabPanel>
//       </Fade>


//       <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}></DialogTitle>
//         <Grid
//           container
//           direction="column"
//           justify="center"
//           alignItems="center"
//         >
//           <span className={classes.pointPopup}>{dataComment.point * 2}</span>
//           <Rating
//             name="customStar"
//             size="large"
//             precision={0.5}
//             value={dataComment.point}
//             className={classes.startPopup}
//             emptyIcon={<StarBorderIcon fontSize="inherit" />}
//             onChange={(event, newValue) => {
//               setdataComment(data => ({ ...data, point: newValue }));
//             }}
//           />
//         </Grid>
//         <DialogContent className={classes.dialogContent}>
//           <DialogContentText></DialogContentText>
//           <TextField
//             className={classes.textField}
//             onChange={(event) => handletyping(event)}
//             fullWidth
//             value={dataComment.post}
//             variant="outlined"
//             label={dataComment.post ? "" : "Nói cho mọi người biết bạn nghĩ gì về phim này..."}
//           />
//         </DialogContent>
//         <DialogActions className="justify-content-center flex-column px-4">
//           {warningtext && <DialogContentText className="text-danger">Phim đem đến cảm xúc tuyệt vời cho bạn chứ? Chia sẻ thêm nữa đi bạn ơi và nhớ gõ trên 60 kí tự nhé.
//           </DialogContentText>}
//           <Button onClick={handlePostComment} variant="contained" className={classes.btnDang}>
//             Đăng
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// console.log("dem ", dem);

// commentApi.postComment(discussionData[dem])
//   .then(result => {
//     console.log("post comment thanh cong,  ", result.data)
//   }
//   )
//   .catch(
//     error => {
//       console.log("post comment lỗi,  ", error)
//     }
//   )

// setdem(dem => dem + 1)



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
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'
import Swal from "sweetalert2";
import { useLocation, useHistory } from "react-router-dom";

import { FAKE_AVATAR, avtIdUser, UNKNOW_USER } from '../../../constants/config';
import useStyles from './style';
import scroll from '../../../utilities/scroll';
import LichChieuDesktop from './LichChieuDesktop';
import LichChieuMobile from './LichChieuMobile';
import discussionData from '../../../constants/discussionData';
import commentApi from '../../../api/commentApi';
import formatDate from '../../../utilities/formatDate';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    padding: 4,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const sortByTime = (arr) => {
  return arr.sort((a, b) => {
    return formatDate(b.createdAt).getTime - formatDate(a.createdAt).getTime
  })

}

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

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
  const { currentUser } = useSelector((state) => state.authReducer);
  const classes = useStyles()
  let location = useLocation();
  const history = useHistory();
  const [value, setValue] = useState(0)
  const [croll, setCroll] = useState(0)
  const [dem, setdem] = useState(0)
  const param = useParams() // mã phim lấy từ url trên trình duyệt
  const [open, setOpen] = useState(false);
  const [warningtext, setwarningtext] = useState(false)
  const [commentMovie, setCommentMovie] = useState([])
  const [dataComment, setdataComment] = useState({
    avtId: avtIdUser,
    username: currentUser?.hoTen,
    point: 2.5,
    post: "",
    likes: 0,
    isLiked: false,
    maPhim: param.maPhim,
    dataTest: false,
    createdAt: "",
    idComment: ""
  })

  useEffect(() => {
    window.scrollTo(0, 0) // ngăn window.history.scrollRestoration = 'auto';
    setValue(() => 0)
    setCroll(() => onClickBtnMuave)
  }, [onClickBtnMuave]) // khi click muave thì mới mở tap 0 > đổi giá trị croll để scroll tới TapMovieDetail

  useEffect(() => {
    if (onClickBtnMuave !== 0) { // không scroll khi mới load topDesktopMovieDetail
      scroll("TapMovieDetail")
    }
  }, [croll]) // khi nhấn muave và đã hoàn thành mở tap 0 thì scroll

  useEffect(() => { // lấy bình luận từ mockapi mỗi khi mount component
    commentApi.getComment(dataComment)
      .then(result => {
        // lấy item.dataTest hoặc item trùng mã phim
        const commentFilter = result.data.filter(item => item.dataTest || (item.maPhim === param.maPhim))
        const arrSortByTime = sortByTime(commentFilter)
        console.log(" có voo đâu ", result.data, commentFilter, arrSortByTime);
        setCommentMovie(() => ([...arrSortByTime]))
      }
      )
      .catch(
        error => {
          console.log("get lỗi,  ", error)
        }
      )
  }, [])

  console.log("text day ", dataComment.point);

  useEffect(() => { // khi commentMovie lấy về thành công thì cập nhật số người bình luận
    onIncreaseQuantityComment(commentMovie.length)
  }, [commentMovie])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickComment = () => {
    console.log("currentUser ", currentUser);
    if (!currentUser) {// nếu chưa đăng nhập
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bạn đã đăng ký thành công',
        showConfirmButton: true,
        timer: 2000
      })
      // history.push("/dangnhap", location.pathname);
      return
    }
    setOpen(true);
    setwarningtext(false)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handlePostComment = () => {


    if (dataComment.post.length < 61) { // nếu comment quá ngắn
      setwarningtext(true)
      return
    }
    setwarningtext(false)
    const currentISOString = new Date().toISOString();
    commentApi.postComment({ ...dataComment, createdAt: currentISOString, point: dataComment.point * 2, idComment: nanoid(10) })
      .then(result => {
        setOpen(false);
        // console.log("post comment thanh cong,  ", result.data)
        // const arrSortByTime = sortByTime(commentFilter)
        setdataComment(data => ({ ...data, post: "", point: 0 })) // reset data
        setCommentMovie((data) => ([result.data, ...data]))
      }
      )
      .catch(
        error => {
          console.log("post comment lỗi,  ", error)
          setdataComment(data => ({ ...data, post: "" }))
        }
      )
  }
  const handletyping = (event) => {
    setdataComment(data => ({ ...data, post: event.target.value }))
  }

  // console.log(" param ", param.maPhim, commentMovie);

  return (
    <div className={classes.root} id="TapMovieDetail">
      <AppBar position="static" color="default" classes={{ root: classes.appBarRoot }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          classes={{ indicator: classes.indicator }}
        >
          <Tab disableRipple label="Lịch Chiếu" classes={{ selected: classes.selectedTap, root: classes.tapRoot }} />
          <Tab disableRipple label="Nội Dung" classes={{ selected: classes.selectedTap, root: classes.tapRoot }} />
          <Tab disableRipple label="Đánh Giá" classes={{ selected: classes.selectedTap, root: classes.tapRoot }} />
        </Tabs>
      </AppBar>
      <Fade timeout={400} in={value === 0}>
        <TabPanel value={value} index={0} isMobile={isMobile}>
          {isMobile ? <LichChieuMobile /> : <LichChieuDesktop data={data} isMobile={isMobile} />}
        </TabPanel>
      </Fade>
      <Fade timeout={400} in={value === 1}>
        <TabPanel value={value} index={1}>
          <div className="text-light"><p>{data.moTa}</p></div>
        </TabPanel>
      </Fade>
      <Fade timeout={400} in={value === 2}>
        <TabPanel value={value} index={2}>
          <div className={classes.danhGia}>
            <div className={classes.inputRoot} onClick={handleClickComment}>
              <span className={classes.avatarReviewer}>
                <img src={currentUser ? FAKE_AVATAR : UNKNOW_USER} alt="avatar" className={classes.avatar} />
              </span>
              <input className={classes.inputReviwer} type="text" placeholder="Bạn nghĩ gì về phim này?" readOnly="readonly" />

              <span className={classes.imgReviewerStar}>
                <Rating value={5} size={isMobile ? "small" : "medium"} readOnly />
              </span>
            </div>
          </div>
          {commentMovie?.map((item, i) => (
            <div key={`${item.avtId}${i}`} className={classes.itemDis}>
              <div className={classes.infoUser}>
                <div className={classes.left}>
                  <span className={classes.ghi}>
                    <img src={`https://i.pravatar.cc/150?u=${item.avtId}`} alt="avatar" className={classes.avatar} />
                  </span>
                  <span className={classes.username}>{item.username}</span>
                </div>
                <div className={classes.right}>
                  <p className="text-success">{item.point}</p>
                  <Rating value={(item.point * 5) / 10} precision={0.5} readOnly />
                </div>
              </div>
              <div className="py-3 border-bottom">
                <p className="text-break">{item.post}</p>
              </div>
              <div className="pt-3">
                <span className="mr-2">
                  <ThumbUpIcon color="disabled" />
                </span>
                <span><strong>{item.likes}</strong> Thích</span>
              </div>
            </div>
          ))}
        </TabPanel>
      </Fade>


      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}></DialogTitle>
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
          <DialogContentText></DialogContentText>
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
