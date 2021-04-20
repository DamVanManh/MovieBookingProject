import { makeStyles } from "@material-ui/core"
import { customScrollbar, underLine } from '../../../styles/materialUi';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    minHeight: 713,
    borderRadius: "10px",
    color: "#000",
  },
  leftSection: {
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

  rightSection: {
    width: "72%",
  },
  listDay: {
    height: "90px",
    padding: "16px !important",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    backgroundColor: "#fff",
    borderRadius: 10,

    display: "flex",

    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    ...customScrollbar,
  },

  dayItem: {
    padding: 10,
    fontWeight: 500,
    textAlign: "center",
    cursor: "pointer",
  },
  cumRapItem: {
    padding: "20px 20px 10px",
    ...underLine
  },
  topInfo: {
    paddingBottom: 20,
  },
  imgTheater: {
    width: 50,
    float: "left",
    display: "inline-block",
    border: "1px solid #ebebec",
  },
  wrapInfo: {
    paddingLeft: 58
  },
  nameTheater: {
    fontWeight: 500,
  },
  digital: {
    marginBottom: 5,
    fontWeight: 500,
  },
  address: {
    fontSize: 14,
    color: "#9b9b9b"
  }

}));
export default useStyles
