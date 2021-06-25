import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  carousel: {
    position: 'relative',
    zIndex: 1,
  },
  itemSlider: {
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
    '&:hover': { color: '#fb4226 !important' },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

}))
export default useStyles
