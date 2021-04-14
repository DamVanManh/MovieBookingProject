import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  modal: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 500,
  },
  timeOut: {
    padding: 40,
  },
  txtClick: {
    color: "#f79320",
    cursor: 'pointer',
    '&:hover': {
      color: "#0056b3",
      textDecoration: "initial",
    }
  },
  spaceEvenly: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingBottom: 30,
  },

})
export default useStyles