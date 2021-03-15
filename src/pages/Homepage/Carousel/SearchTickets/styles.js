import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(footer => ({
  root: {
    display: 'flex',

    maxWidth: "940px",
    margin: "auto",
    height: "80px",
    position: "absolute",
    bottom: "0",
    width: "100%",
    left: "50%",
    transform: "translate(-50%,50%)",

    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: '0 0 10px rgb(0 0 0 / 30%)',

    alignItems: "center",
  },
  selectFilm: {
    flex: '30%'
  },
  item: {
    flex: "calc(70% / 4)"
  },
  label: {
    display: 'none'
  },

  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
}))
export default useStyle