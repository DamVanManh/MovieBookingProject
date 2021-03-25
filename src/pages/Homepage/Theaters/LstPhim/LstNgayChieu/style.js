import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  lstNgayChieu: {
    paddingTop: 15,
  },
  ngayChieu: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 500,
  },
  button: {
    width: "calc(25% - 10px)",
    fontWeight: 400,
    margin: "0 10px 10px 0",
    padding: "5px 0",
    transition: "all .2s",
    backgroundColor: "rgba(246,246,246,.5)",
    borderRadius: "7px",
    color: "#9b9b9b",
    border: "1px solid #e4e4e4",
    '&:hover :first-child': {
      color: "#fb4226",
    }
  },
  inTime: {
    fontSize: 18,
    fontWeight: 500,
    color: "#108f3e",
  },
  outTime: {

  },
});
export default useStyles