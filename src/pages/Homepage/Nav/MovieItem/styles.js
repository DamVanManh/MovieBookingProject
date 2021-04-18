import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles( (theme) => ({
    // flim: {
    //     '&:hover film__button': {
    //         opacity: 1, transition: "all 0.2s"
    //     },
    //     '&:hover film__name ': {
    //         opacity: 1, transition: "all 0.2s"
    //     },
    //     '&:hover  play__trailer': {
    //         opacity: 1, transition: "all 0.2s"
    //     },
    //     '&:hover  film__overlay': {
    //         opacity: 1, transition: "all 0.2s"
    //     },
    // },
    // flim__poster: {
    //     position: "relative"
    // },
    // poster: {
    //     width: "100%", height: "318px", borderRadius: "3%"
    // },
    // film__overlay: {
    //     position: "absolute",
    //     width: "100%",
    //     height: "100%",
    //     top: "0",
    //     background: "linear-gradient(to top, #000, transparent 100%)",
    //     opacity: 0,
    //     transition: "all 0.2 s 0.2 s"
    // },
    // play__trailer: {
    //     position: "absolute",
    //     top: "50%",
    //     left: "50%",
    //     transform: "translate(-50%, -50%)",
    //     width: "60px",
    //     height: "60px",
    //     fontSize: "20px",
    //     borderRadius: "50px",
    //     border: "3px solid white",
    //     lineHeight: "60px",
    //     cursor: "pointer",
    //     transition: "all 0.2 s",
    //     opacity: 0
    // },
    // play: {
    //     position: "absolute",
    //     color: "white",
    //     fontSize: "20px",
    //     top: "50%",
    //     left: "50%",
    //     transform: "translate(-50%, -50%)",
    //     textAlign: "center"
    // },
    // flim__point: {
    //     fontFamily: '"SF Medium"',
    //     backgroundColor: "rgba(12, 27, 54, 0.8)",
    //     border: "1px solid #1f2e46",
    //     borderRadius: "4px",
    //     padding: "2px",
    //     position: "absolute",
    //     top: "12px",
    //     right: "12px",
    //     color: "#fff",
    //     width: "54px",
    //     textAlign: "center",
    //     lineHeight: 1.1
    // },
    // point: { margin: "0 !important", fontWeight: 600, fontSize: "20px" },
    // star: {
    //     margin: "0 !important",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     maxWidth: "8px"
    // },
    // flim__content: {
    //     position: "relative", paddingTop: "10px"
    // },
    // green: {
    //     fontSize: "14px",
    //     backgroundColor: "#00ac4d",
    //     borderRadius: "4px",
    //     padding: "0 5px",
    //     color: "#fff",
    //     minWidth: "33px",
    //     textAlign: "center",
    //     display: "inline-block",
    //     marginRight: "8px"
    // },
    // film__name: {
    //     display: "inline-block",
    //     fontWeight: 600,
    //     maxHeight: "42px",
    //     fontSize: "16px",
    //     color: "black",
    //     marginBottom: "0px",
    //     textOverflow: "ellipsis",
    //     overflow: "hidden",
    //     WebkitLineClamp: "2",
    //     minHeight: "100px",
    //     WebkitBoxOrient: "vertical",
    //     wordWrap: "break-word"
    // },
    // flim__button: {
    //     position: "absolute",
    //     top: "7px",
    //     left: "0",
    //     display: "block",
    //     width: "100%",
    //     borderRadius: "4px",
    //     color: "#fff",
    //     fontSize: "20px",
    //     padding: "10px",
    //     textAlign: "center",
    //     background: [
    //         "#fb4226",
    //         "-webkit-linear-gradient(to left, #fb4226, #ce3017 100%)",
    //         "-o-linear-gradient(to left, #fb4226, #ce3017 100%)",
    //         "-moz-linear-gradient(to left, #fb4226, #ce3017 100%)",
    //         "linear-gradient(to left, #fb4226, #ce3017 100%)"
    //     ],
    //     textDecoration: "none",
    //     fontWeight: 600,
    //     opacity: 0,
    //     transition: "all 0.2 s"
    // }
    iframe: {
        width: "898px",
        height: "505px",
        [theme.breakpoints.down(992)]: {
          width: "598px",
          height: "336px"
        },
      },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: '-200px',
        transform: "translate(50%,-50%)",

        border: '2px solid white',
        '&:focus': {
            outline: 'none'
        },
        '&:hover': { opacity: 0.7 },
        transition: "all .2s",

    },
    downRangeSm: {
        width: "598px",
        height: "336px"
    },
    upKeyMd: {
        width: "898px",
        height: "505px"
    },
    paper: {
        overflowY: "visible",
        backgroundColor: "black",
        color: 'red',
        
      },


}))

export default useStyles
