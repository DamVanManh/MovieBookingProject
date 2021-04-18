import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(news => ({
  seperate: {
    paddingTop: "120px",
    background: "url(img/back-news.png)",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"
  },
  root: {
    flexGrow: 1,
    backgroundColor: news.palette.background.paper,
  },

  fullImg: {
    width: '100%',
    height: '100%',
  },

  appBar: {
    backgroundColor: 'transparent',
    color: 'black',
    boxShadow: 'none',
    justifyContent: 'center',
    alignItem: 'center',
  },

  tabBar: {
    justifyContent: 'space-evenly',
    width: '50%',
    margin: '0 auto',
  },

  tabButton: {
    width: '33%'
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
  }
}))
export default useStyle