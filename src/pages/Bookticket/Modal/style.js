import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  modal: {
    padding: 40,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 500,
  },
  spaceEvenly: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  txtClick: {
    color: "#fb4226",
    cursor: 'pointer',
    '&:hover': {
      color: "#0056b3",
      textDecoration: "initial",
    }
  },

  imgFlim: props => ({
    backgroundImage: `url("${props.thongTinPhim?.hinhAnh}")`,
    float: "left",
    width: "30%",
    borderRadius: "4px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }),

  paymentColor: {
    color: '#f79320'
  },
  errorColor: {
    color: '#fb4226'
  },



})
export default useStyles