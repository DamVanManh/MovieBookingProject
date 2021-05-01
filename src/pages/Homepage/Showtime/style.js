import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    color: 'black',
    boxShadow: 'none',
    justifyContent: 'center',
    alignItem: 'center',
    marginBottom: 30,
  },
  tabBar: {
    alignItem: 'center',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    height: 50,
    margin: '0 auto',
    textTransform: "none",
  },
  tabButton: {

    opacity: 1,
    lineHeight: "24px",
    height: "24px",
    fontFamily: "'SF Medium'",
    color: 'black',
    boxShadow: 'none',
    justifyContent: 'center',
    alignItem: 'center',
    transition: "all 0.2s",
    fontSize: "20px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    "& + $tabButton": {
      marginLeft: 16,
    },
    '&:focus': {
      color: 'red', fontSize: "24px", backgroundColor: 'transparent',
      outlineStyle: "none", transition: 'none', fontWeight: "bold"
    },
    '&:hover': {
      fontSize: "24px",
      fontWeight: 500,
      color: "#fa5238",
    },
  },
  flexContainer: {
    display: 'block'
  },
  indicator: {
    backgroundColor: "transparent",
    transition: 'none',
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
  },

  listMovie: {
    position: "relative",
  },
  fade: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: props => props.fade ? -1 : 10,
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: props => props.fade ? "transparent" : "#fff"
  },
}))

export default useStyles
