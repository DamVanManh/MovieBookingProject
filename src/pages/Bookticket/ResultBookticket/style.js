import { makeStyles } from "@material-ui/core"
import { underLineDashed } from '../../../styles/materialUi';

const useStyles = makeStyles({
  resultBookticket: {
    textAlign: 'left',
    lineHeight: '30px',
    padding: 40,
  },
  infoTicked: {
    display: 'flex',
    gap: '5%',
  },
  infoTicked__img: props => ({
    flex: "30%",
    width: 600,
    backgroundImage: `url(${props.thongTinPhim?.hinhAnh})`,
    borderRadius: "4px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

  }),

  infoTicked__txt: {
    flex: "70%",
  },
  tenPhim: {
    fontSize: 19,
    ...underLineDashed
  },
  text__first: props => ({
    color: `${props.color}`,
    fontWeight: "500",
  }),
  text__second: {
    color: "#000",
    fontWeight: "500",
  },
  diaChi: {
    color: '#9B9B9B'
  },
  table: {
    marginTop: 10,

  },
  paymentColor: {
    color: '#f79320'
  },
  errorColor: {
    color: '#fb4226'
  },
  noteresult: {
    fontStyle: 'italic',
    fontWeight: 500,
  },

})
export default useStyles