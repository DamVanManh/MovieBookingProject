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
    marginBottom: 15,
  },
  inputRoot: {
    maxWidth: "580px",
    margin: "auto",
    padding: "0",
    position: "relative",
    cursor: "pointer",
    width: "100%",
    cursor: "pointer",
  },
  avatarReviewer: {
    position: "absolute", top: "20%", left: "3%"
  },
  avatar: {
    height: "36px", width: "36px", borderRadius: "25px"
  },
  inputReviwer: {
    cursor: "pointer",
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
    display: "flex",
    justifyContent: "space-between"
  },
  username: {
    marginLeft: 10,
    color: "#000",
    textTransform: "capitalize",
    fontWeight: 500,
  },


  right: {
    textAlign: "center",
  },
  // itemDis: {

  // },
  // itemDis: {

  // },
  // itemDis: {

  // },
  // itemDis: {

  // },

})
export default useStyles