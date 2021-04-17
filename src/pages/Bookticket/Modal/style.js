import { makeStyles } from "@material-ui/core"
import { underLine } from '../../../styles/materialUi'

const useStyles = makeStyles({
  modal: {
    textAlign: 'center',
    fontSize: 17,
    width: "fit-content",
    borderRadius: "20px",
    alignItems: "center",
    overflowX: "hidden",
  },
  padding: {
    padding: 40,
  },

  over10: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-evenly",
    padding: 10,
    maxWidth: props => props.isMobile ? "auto" : "480px",
    alignItems: 'center',
  },
  notification: {
    width: 80,
    marginLeft: 29,
    marginTop: 10,
  },
  textOver: {
    padding: "10px 20px",
    width: '100%',
    ...underLine
  },
  btnOver: {
    color: "#fb4226",
    border: "1.2px solid #fb4226",
    borderRadius: "20px",
    marginTop: 10,
    '&:hover': {
      color: "#fff",
      backgroundColor: "#fb4226",
    },
  },

  spaceEvenly: {
    width: "100%",
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingBottom: 30,
  },
  btnResult: {
    color: "#fff",
    padding: "6px 17px",
    borderRadius: "20px",
    backgroundImage: "linear-gradient(223deg,#b4ec51 0,#429321 100%)",
    '&:hover': {
      color: "#fff",
      backgroundImage: "linear-gradient(223deg,#5d9004 0,#1f5f04 100%)",
    },
  },

  txtClick: {
    color: "#f79320",
    cursor: 'pointer',
    '&:hover': {
      color: "#0056b3",
      textDecoration: "initial",
    }
  },


})
export default useStyles