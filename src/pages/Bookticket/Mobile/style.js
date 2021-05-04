import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  top: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    height: 60,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
    backgroundColor: '#fff',
  },
  topLeft: {
    padding: 22.5,
  },
  imgCancel: {
    width: 15,
    height: 15,
    cursor: 'pointer'
  },
  stepName: {
    fontWeight: 500,
  },
  avatar: {
    display: "inline-block",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: 15,
  },

  empty: {
    height: 60,
  },

  bottom: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 10,
    height: 70,
    width: '100%',
    textAlign: 'center',
  },
  btnBottom: {
    display: 'inline-block',
    width: '50%',
    height: '100%',
    verticalAlign: 'top',
    border: 'none',
    fontWeight: 500,
    borderTop: '1px solid #dadada',
    borderBotom: '1px solid #dadada',
  },
  btnLeft: {
    color: "#44c020",
    fontSize: 15,
    backgroundColor: '#fff',
    padding: 10,
  },
  btnRight: props => ({
    color: "#e9e9e9",
    backgroundColor: props.isDisableBtnRight ? "#afafaf" : "#44c020",
    fontSize: 15,
  }),


})
export default useStyles