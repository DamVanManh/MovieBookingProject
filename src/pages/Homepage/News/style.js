import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  root: {
    maxWidth: 940,
    margin: "auto",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  fullImg: {
    width: '100%',
    height: 'auto',
    borderRadius: 5,
  },

  appBar: {
    backgroundColor: 'transparent',
    color: 'black',
    boxShadow: 'none',
    '& .MuiTabs-indicator': {
      height: 0, // ẩn gạch dưới
    }
  },

  tabButton: {
    opacity: 1,
    color: "#000",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    '& > span': {
      transition: "all 0.2s",
      '&:hover': {
        fontSize: "16px",
      },
    }
  },

  tabSelected: {
    color: "#fa5238",
  },

  news: {
    color: 'black',
    '&:hover': {
      color: 'black',
      textDecoration: 'none',
    },
    '& div': {
      '& h4': {
        fontSize: '17px',
        fontWeight: 'bold'
      },
      '& p': {
        fontSize: '13px'
      }
    },


  },

  bonusNews: {
    color: 'black',
    '&:hover': {
      color: 'black',
      textDecoration: 'none',
    },
    '& p': {
      fontSize: '13px',
    }
  },
  repons: {
    paddingLeft: 16,
    flex: "0 0 50%",
    maxWidth: "50%",
    [theme.breakpoints.down(579)]: {
      flex: "0 0 100%",
      maxWidth: "100%",
      paddingLeft: 0,
    },
  },

}))
export default useStyle