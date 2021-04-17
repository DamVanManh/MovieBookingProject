import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
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
  }

})
export default useStyles