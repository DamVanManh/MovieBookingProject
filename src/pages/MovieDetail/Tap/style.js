import { makeStyles } from "@material-ui/core"
import { customScrollbar } from '../../../styles/materialUi';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 870,
    margin: "auto",
  },
  appBarRoot: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  indicator: {
    backgroundColor: "transparent"
  },
  tapRoot: {
    color: "#fff",
    opacity: 1,
    fontSize: 16,
    "&:hover": {
      fontSize: 18,
    },
    transition: "all .2s"
  },
  selectedTap: {
    color: "#fb4226",
    fontSize: 18,
  },
  noname: {
    '& .MuiBox-root': {
      paddingTop: props => props.isMobile ? 0 : 24,
    }
  },
  detailMovie: {
    fontSize: 14,
  },
  contentTitle: {
    width: "30%",
    fontWeight: 500,
    fontSize: 15,
  },
  contentInfo: {
    width: "70%",
    paddingLeft: 10,
  },

  movieDetail: {
    color: "#e9e9e9"
  },
  danhGia: {
    marginBottom: 15,
  },
  inputRoot: {
    maxWidth: "580px",
    margin: "auto",
    padding: "0",
    position: "relative",
    cursor: "pointer",
    width: "100%",
  },
  avatarReviewer: {
    position: "absolute", top: "20%", left: "3%",
  },
  avatar: {
    display: "inline-block",
    float: "left",
  },
  avatarImg: {
    height: "36px",
    width: "36px",
    borderRadius: "25px",

  },
  inputReviwer: {
    cursor: "pointer",
    padding: "10px 10px 10px 60px",
    width: "100%",
    height: "60px",
    borderRadius: "4px",
    border: "1px solid #e8e8e9",
    background: "#fff",
    color: "#9b9b9b",
    fontSize: "14px",
    "&:focus": {
      outline: "none",
    }
  },
  imgReviewerStar: {
    position: "absolute", top: "50%", right: "3%",
    transform: "translateY(-50%) ",
    display: "flex",
    margin: "auto",
  },

  itemDis: {
    padding: "20px 20px 12px",
    border: "1px solid #e6e6e6",
    borderBottom: "none",
    borderRadius: "3px",
    backgroundColor: "#fff",
    maxWidth: "580px",
    width: "100%",
    margin: "auto",
    color: "#4a4a4a",
    marginBottom: 15,
  },
  infoUser: {
  },
  liveUser: {
    marginLeft: 10,
    display: "inline-block",
  },
  userName: {
    color: "#000",
    fontWeight: 500,
    fontSize: 14,
    textTransform: "capitalize",
  },
  timePost: {
    color: "#9b9b9b",
    fontSize: 12,
  },

  left: {
    float: "left",
  },
  right: {
    textAlign: "center",
    float: "right",
  },
  btnDang: {
    backgroundColor: '#fb4226',
    borderColor: '#fb4226',
    color: "#fff",
    padding: "7px 25px",
    margin: "0px 0px 7px 0px",
    '&:hover': {
      backgroundColor: '#fb4226',
      borderColor: '#fb4226',
    },
  },
  dialogContent: {
    minHeight: props => props.isMobile ? 70 : 95,
  },
  textField: {
    '& .MuiInputLabel-root': {
      transform: "translate(18px, 29px) scale(1)",
      color: "#4a4a4a",
      right: 18,
      top: props => props.isMobile ? -15 : 0,
    },
    '& label.Mui-focused': {
      display: "none",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'purple',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        top: 0,
        '& legend': {
          display: "none"
        },
      },
      '&:hover fieldset': {
        borderColor: "rgba(0, 0, 0, 0.23)",
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fb4226',
        boxShadow: "inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(251 66 38 / 60%)",
        borderWidth: 1,

      },
      '& input': {
        padding: props => props.isMobile ? "20px 20px" : "30px 20px",
      }
    },
  },
  starPopup: {
    fontSize: props => props.isMobile ? 27 : 40,
  },
  pointPopup: {
    color: "#7ed321",
    fontSize: props => props.isMobile ? 27 : 40,
  },
  dialog: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        ...customScrollbar
      }
    }
  },
  rootcloseButton: {
    margin: 0,
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  moreMovie: {
    margin: "30px auto",
    textAlign: "center",
    display: props => props.hideBtn ? "none" : "block",
  },
  moreMovieButton: {
    color: "#949494",
    borderColor: "#949494",
    padding: "7px 25px",
    backgroundColor: "transparent",
    '&:hover': {
      backgroundColor: "#fb4226",
      borderColor: "#fb4226",
      color: "#fff",
    },
    "@media (hover: none)": {
      '&:hover': {
        color: "#949494",
        borderColor: "#949494",
        backgroundColor: "transparent",
      }
    },
  },
}))
export default useStyles