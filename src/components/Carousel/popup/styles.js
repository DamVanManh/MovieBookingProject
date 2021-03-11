import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
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
  downRangeSm: {
    width: "598px",
    height: "336px"
  },
  upKeyMd: {
    width: "898px",
    height: "505px"
  },




}))
export default useStyles
