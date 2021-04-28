import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  mobile: {
    color: "#e9e9e9",
    backgroundColor: "rgb(10, 32, 41)",
  },
  info: {
    width: "100%",
    height: "41vw",
    position: "relative",
  },

  banner: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundImage: props => `url(${props.bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)"
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: props => props.openVideo ? "block" : "none"
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
  btnPlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 80,
    height: 80,

  },

})
export default useStyles