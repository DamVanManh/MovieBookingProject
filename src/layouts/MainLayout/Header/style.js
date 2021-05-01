import { makeStyles } from "@material-ui/core"

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  //reponsive hidden
  linkTobody: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: 'none',
    },
  },
  user: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    },
  },
  menuIcon: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: 'none',
    },
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  auth: {
    display: "flex",
    color: "#9b9b9b",
  },
  itemAuth: {
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: "fit-content",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,.95)"
    }
  },
  icon: {
    minWidth: 41,
    color: "#9b9b9b"
  },
  divide: {
    "&::after": {
      content: "''",
      position: "absolute",
      right: "0",
      height: "30px",
      top: "50%",
      transform: "translateY(-50%)",
      borderRight: "1px solid #fff",
      borderRightColor: "#e9e9e9"
    }
  },



  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: "rgba(255,255,255,.95)",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },

  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  // class tự thêm
  spaceBetween: {
    justifyContent: 'space-between',
  },
  link: {
    margin: '0 10px',
    cursor: 'pointer',
    "&:hover": {
      color: "#fb4226",
      transition: "all .2s",
    }
  },
}))
export default useStyles