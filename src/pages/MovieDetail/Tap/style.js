import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
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

  movieDetail: {
    color: "#e9e9e9"
  },
  danhGia: {
    marginTop: 40,
  },
  inputRoot: {
    maxWidth: "580px",
    margin: "auto",
    padding: "0",
    position: "relative",
    cursor: "pointer",
    width: "100%"
  },
  avatarReviewer: {
    position: "absolute", top: "20%", left: "3%"
  },
  avatar: {
    height: "36px", width: "36px", borderRadius: "25px"
  },
  inputReviwer: {
    padding: "10px 10px 10px 55px",
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
    position: "absolute", top: "30%", right: "3%"
  },

})
export default useStyles