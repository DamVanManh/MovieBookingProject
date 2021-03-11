import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles({
  a: {
    position: 'relative'
  },
  img: { height: "100%", width: "100%" },
  button: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

    zIndex: 1,
    display: 'none',

    background: "0 0",
    border: "none",

    height: 70,
    width: 70,
    transition: "all .3s",
    '&:hover': { opacity: 0.7 }
  },
  backgroundLinear: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top,#000,transparent 20%)",
    top: "0"
  },
  Arrow: {
    position: "absolute",
    top: "48%",
    transform: "translateY(-50%)",

    zIndex: 2,
    width: "50px",
    height: "100px",
    color: "#d8d8d8 !important",
    cursor: "pointer",
    transition: "all .3s",
    '&:hover': { color: '#fb4226 !important' }
  },
})
export default useStyles
