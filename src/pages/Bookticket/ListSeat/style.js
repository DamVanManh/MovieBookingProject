import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  listSeat: props => ({
    position: 'relative',
    padding: '0 10%',
    marginLeft: props.isMobile ? '0%' : '10%',
  }),

  info_CountDown: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2% 0%',
  },
  infoTheater: {
    display: 'flex',
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
    textAlign: "center",
  },
  timeTitle: {
    fontSize: "12px",
    color: "#9b9b9b",
  },
  timeCount: {
    fontWeight: 500,
    fontSize: 34,
    color: "#fb4226",
    lineHeight: '39px',
  },

  screen: {
    width: '100%',
  },

  seatSelect: {
    padding: '0% 10%',
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
    fontSize: "1.5vw",
    cursor: "default",
  },
  seatName: {
    position: 'absolute',
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.4vw",
  },
  seatLocked: {
    position: 'absolute',
    top: "31%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "2vw",
    color: '#fff',
  },
  seatIcon: {
    width: '100%',
    height: '100%',
  },
  viewCenter: {
    zIndex: 1,
    background: "0 0",
    position: "absolute",
    width: '18vw',
    height: '9vw',
    top: "55%",
    left: "55.5%",
    transform: "translate(-42.5%,-42%)"
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
    padding: '2% 10% 0',
  },
  typeSeats: {
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'center',
  },
  posiX: {
    position: 'absolute',
    top: "17%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 18,
    color: '#fff',
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
    verticalAlign: "super",
    marginRight: 8,
  },
  linebeautiful: {
    display: "inline-block",
    borderBottom: "2px solid #fa7f6c",
    width: 28,
    verticalAlign: "super",
    marginRight: 8,
  },

  modalleft: props => ({
    display: props.isMobile ? 'none' : 'block',
    left: 0,
    top: 100,
    height: "calc(100% - 100px)",
    width: "7.5%",
    position: "fixed",
    backgroundImage: `url(${props.modalLeftImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }),

  opacity: {
    height: '100%',
    width: '100%',
    background: "#000",
    opacity: 0.7
  }

})
export default useStyles