import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  carousel: {
    position: 'relative',
  },
  a: {
    position: 'relative'
  },
  img: { height: "100%", width: "100%" },
  backgroundLinear: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top,#000,transparent 20%)",
    top: "0"
  },
  button: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

    zIndex: 1,
    opacity: 0,

    background: "0 0",
    border: "none",

    height: 70,
    width: 70,
    transition: "all .2s",

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
    transition: "all .2s",
    '&:hover': { color: '#fb4226 !important' }
  },
  imgPlay: {
    height: "100%",
    width: "100%",
    transition: "all .2s",
    '&:hover': { opacity: 0.7 }
  },


  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: "translate(50%,-50%)",

    border: '2px solid white',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': { opacity: 0.7 },
    transition: "all .2s",
  },

  iframe: {
    width: "898px",
    height: "505px",
    [theme.breakpoints.down(992)]: {
      width: "598px",
      height: "336px"
    },
  },

  paper: {
    overflowY: "visible",
    backgroundColor: "black",
    color: 'red'
  },
}))
export default useStyles
