import { makeStyles } from "@material-ui/core"
import { customScrollbar, underLine } from '../../../styles/materialUi';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    minHeight: 713,
    borderRadius: "10px",
    color: "#000"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "28%",
  },
  indicator: {
    backgroundColor: "transparent",
  },
  tabRoot: {
    padding: 20,
    textAlign: "left",
    fontSize: 12,
    "&:hover": {
      opacity: 1,
    },
    transition: "all .2s",
    ...underLine
  },
  wrapper: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  logo: {
    width: 50,
    marginRight: 10,
  },

  RightSection: {
    width: "72%",
  },
  listDay: {
    height: "90px",
    padding: "16px !important",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    backgroundColor: "#fff",
    display: "flex",

    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    ...customScrollbar,

  },
  dayItem: {
    padding: 10,
    textAlign: "center",
    cursor: "pointer",
  },
  listCumRap: {

  },


  imgTheater: {
    width: 50,
    height: 50,
    display: "inline-block",
  },

  // logo: {

  // },
  // logo: {

  // },
  // logo: {

  // },
}));
export default useStyles
