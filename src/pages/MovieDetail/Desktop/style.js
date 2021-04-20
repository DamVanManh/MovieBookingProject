import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  desktop: {
    color: "#e9e9e9",
    backgroundColor: "rgb(10, 32, 41)",
  },
  top: {
    width: "100%",
    height: "41vw",
    position: "relative",
  },

  bannerBlur: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundImage: props => `url(${props.bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(15px)",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)"
  },
  topInfo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
    maxWidth: 870,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

  },
  imgTrailer: {
    width: "25%",
  },
  img: {
    width: "100%",
  },
  shortInfo: {
    width: "59%",
    padding: "0px 15px"
  },
  movieName: {
    fontSize: 24,
  },
  c18: {
    marginRight: "6px",
    verticalAlign: "13%",
    backgroundColor: "#fb4226",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "4px",
    padding: "0 5px",
    display: "inline-block",
    textAlign: "center",
    minWidth: "33px"
  },
  btnMuaVe: {
    fontSize: "16px",
    borderRadius: "4px",
    background: "0 0",
    padding: "11px 25px",
    transition: "all .2s",
    marginTop: "25px",
    marginBottom: "20px",
    backgroundColor: "#fb4226",
    border: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#b42a14",
    }
  },

  rate: {
    width: "16%",
    textAlign: "center",
  },
  rateStar: {
    margin: "auto",
    width: "fit-content"
  }

})
export default useStyles