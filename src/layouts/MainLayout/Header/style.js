import { makeStyles } from "@material-ui/core"

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
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
  spaceBetween: {
    justifyContent: 'space-between',
  },
  logo: {
    cursor: "pointer",
  },
  linkTobody: {
    display: props => props.isDesktop ? "block" : "none",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    paddingLeft: 10,
    paddingRight: 10,
    width: "auto",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "transparent",
      color: "#fb4226",
      transition: "all .2s",
    }
  },
  user: {
    display: props => props.isDesktop ? "block" : "none",
  },
  auth: {
    display: "flex",
    color: props => props.isDesktop ? "#9b9b9b" : "#000",
  },
  itemAuth: {
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: "fit-content",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  divide: {
    "&::after": {
      content: "''",
      position: "absolute",
      right: "0",
      height: "30px",
      top: "50%",
      transform: "translateY(-50%)",
      borderRight: props => props.isDesktop ? "1px solid #e9e9e9" : "none",
    }
  },
  icon: {
    minWidth: 41,
    color: "#9b9b9b",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  listItem: {
    "&:hover > a": {
      color: "#fb4226",
    },
    "&:hover > div": {
      color: "#fb4226",
    },
    "&:hover > span": {
      color: "#fb4226",
    },
  },
  menuIcon: {
    display: props => (props.isDesktop || props.openDrawer) ? "none" : "block",
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
    justifyContent: 'space-between',
  },

}))
export default useStyles