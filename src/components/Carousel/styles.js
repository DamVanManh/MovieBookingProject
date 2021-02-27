import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  img: { height: "100%", width: "100%" },
  button: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 3,
    background: "0 0",
    border: "none"
  },
  bgl: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top,#000,transparent 20%)",
    top: "0"
  },
  Arrow: {
    color: "#d8d8d8 !important",
    position: "absolute",
    top: "48%",
    transform: "translateY(-50%)",
    width: "50px",
    height: "100px",
    zIndex: 2,
    cursor: "pointer",
    transition: "all .3s",
    '&:hover': { color: '#fb4226 !important' }
  },
}))
export default useStyles
