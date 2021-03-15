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
  }
}))
export default useStyle