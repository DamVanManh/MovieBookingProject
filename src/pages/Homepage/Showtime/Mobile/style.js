import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
  movieItem: {
    padding: "20px 10px 0px",
  },
  movieContent: {
    position: "relative",
    width: "100%",
    height: "45vw",
  },
  bgImg: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    borderRadius: 4,
  },
  moreMovie: {
    margin: "30px auto",
    textAlign: "center",
    display: props => props.openMore ? "none" : "block",
  },
  moreMovieButton: {
    color: "#949494",
    borderColor: "#949494",
    padding: "7px 25px",
    '&:hover': {
      backgroundColor: "#fb4226",
      borderColor: "#fb4226",
      color: "#fff !important"
    },
  },
  c18: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "#fb4226",
    color: "#fff",
    fontSize: "14px",
    borderRadius: "4px",
    textAlign: "center",
    minWidth: "33px",
  },

}))

export default useStyles
