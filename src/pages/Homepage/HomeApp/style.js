import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({

  mobileApp: {
    backgroundImage: 'url("/img/mobile/backapp.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "fit-content",
    color: 'white',
    [theme.breakpoints.down("lg")]: {
      height: "auto",
    },
  },

  mainMaxWidth: {
    maxWidth: 940,
    margin: 'auto',
    paddingTop: 60,
    paddingBottom: 60,
    height: "fit-content",
  },
  mobileApp__left: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      color: 'white',
    },
  },
  textLeft: {
    fontWeight: 700,
    fontSize: 30,
  },

  mobileApp__right: {
    position: "relative",
    padding: 0,
  },
  bgmobile: {
    padding: "0 28%",
    width: "100%",
    display: "block",
    height: "auto",
  },
  'slick-mobile': {
    position: "absolute !important",
    padding: "1.5% 29.1% 1.3% 29.3%",
    top: "0",
    left: "0",
    width: "100%",
    height: "99%",
    "& > div": {
      borderRadius: "7%",
      backgroundColor: "#fff",
      width: "100%",
      height: "100%",
      '& img': {
        width: '100%',
        height: '100%',
        display: 'block',
      },
    },

  },
}))
export default useStyle