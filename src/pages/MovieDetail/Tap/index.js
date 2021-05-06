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
import DialogTitle from '@material-ui/core/DialogTitle';
import { FAKE_AVATAR } from '../../../constants/config';
import useStyles from './style';
import scroll from '../../../utilities/scroll';
import LichChieuDesktop from './LichChieuDesktop';
import LichChieuMobile from './LichChieuMobile';
import discussionData from '../../../constants/discussionData';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';


const RatingStyle = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
  iconEmpty: {
    color: 'green',
  }
})(Rating);

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

export default function CenteredTabs({ data, onClickBtnMuave, isMobile }) {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [croll, setCroll] = useState(0)
  const param = useParams() // mã phim lấy từ url trên trình duyệt
  const mot = discussionData[0]
  const [open, setOpen] = React.useState(false);



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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleComment = (params) => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  console.log(" param ", param.maPhim);

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
          <div className="text-light">{data.moTa}</div>
        </TabPanel>
      </Fade>
      <Fade timeout={400} in={value === 2}>
        <TabPanel value={value} index={2}>
          <div className={classes.danhGia}>
            <div className={classes.inputRoot} onClick={handleComment}>
              <span className={classes.avatarReviewer}>
                <img src={FAKE_AVATAR} alt="avatar" className={classes.avatar} />
              </span>
              <input className={classes.inputReviwer} type="text" placeholder="Bạn nghĩ gì về phim này?" readOnly="readonly" />

              <span className={classes.imgReviewerStar}>
                <Rating value={5} readOnly />
              </span>
            </div>
          </div>
          {discussionData.map((item, i) => (
            <div key={item.id} className={classes.itemDis}>
              <div className={classes.infoUser}>
                <div className={classes.left}>
                  <span className={classes.ghi}>
                    <img src={`https://i.pravatar.cc/150?img=${i}`} alt="avatar" className={classes.avatar} />
                  </span>
                  <span className={classes.username}>{item.username}</span>
                </div>
                <div className={classes.right}>
                  <p className="text-success">{item.point}</p>
                  <Rating value={(item.point * 5) / 10} precision={0.5} size="small" readOnly />
                </div>
              </div>
              <div className="py-3 border-bottom">
                <p>{item.post}</p>
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


      <Dialog open={open} onClose={handleClose}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <span>Custom empty icon</span>
          <Rating
            name="customized-empty"
            defaultValue={2}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </Grid>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
