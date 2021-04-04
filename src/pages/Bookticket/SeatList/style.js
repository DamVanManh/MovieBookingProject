import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 5%'
  },
  infoTheater: {
    display: 'flex',
    fontSize: 16,
  },
  text: {
    paddingTop: 5,
    paddingLeft: 13,
  },
  text__first: props => ({
    color: `${props.color}`,
    fontWeight: "500",
  }),
  text__second: {
    color: "#000",
    fontWeight: "500",
  },
  textTime: {
    color: "#9b9b9b",
  },
  countDown: {
    textAlign: "center"
  },
  timeTitle: {
    fontSize: "10px",
    color: "#9b9b9b",
  },
  timeCount: {
    fontWeight: 500,
    fontSize: "29px",
    color: "#fb4226",
  },

  screen: {
    textAlign: "center",
  },
  logo: {
    width: '90%',
  },

  listSeat: {
    padding: '0% 12% 0% 12%',
    position: 'relative',
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none"
  },
  seat: {
    position: 'relative',
    width: 'calc(100%/16)',
    display: 'inline-block',
    cursor: 'pointer',
  },
  label: {
    position: 'absolute',
    top: "50%",
    left: "-100%",
    transform: "translate(-50%, -50%)",
    fontWeight: 500,
    fontSize: "1vw",
    cursor: "default",
  },
  seatName: {
    position: 'absolute',
    top: "44%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: 'none',
    fontSize: "1vw",
  },
  seatIcon: {
    width: '100%',
    height: '100%',
  },
  viewCenter: {
    zIndex: 1,
    background: "0 0",
    position: "absolute",
    width: '12vw',
    height: '6vw',
    top: "60%",
    left: "55.5%",
    transform: "translate(-42.5%,-40%)"
  },
  areaClick: {
    width: '100%',
    height: '100%',
    color: 'red',
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
  },

  noteSeat: {
    padding: '5% 10% 0',
  },
  typeSeats: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    gap: 20,
  },
  positionView: {
    textAlign: 'center',
    marginTop: 5,
    paddingBottom: 20,
  },
  line: {
    marginLeft: 19,
  },
  linecenter: {
    display: "inline-block",
    borderBottom: "2px dashed #fa7f6c",
    width: 28,
    verticalAlign: "middle",
    marginRight: 8,
  },
  linebeautiful: {
    display: "inline-block",
    borderBottom: "2px solid #fa7f6c",
    width: 28,
    verticalAlign: "super",
    marginRight: 8,
  },

  popup: {
    padding: 40,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 500,
  },
  refresh: {
    color: "#fb4226",
    cursor: 'pointer'
  }

})
export default useStyles