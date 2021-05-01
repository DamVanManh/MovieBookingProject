import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({

  logo: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  },

  footer: {
    backgroundColor: '#222',
    color: 'white',
    fontSize: '12px',
    padding: '20px 0',
    '& a': {
      color: '#949494',
      display: 'block',
    }
  },

  footer__up: {
    maxWidth: '940px',
    margin: 'auto',
    paddingBottom: 20,
  },
  tix__text: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  company__logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    width: '75%',
    justifyContent: 'space-between',
    '& img': {
      backgroundColor: 'white',
      borderRadius: '50%'
    }
  },
  social__width: {
    width: '50%'
  },
  footer__social: {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
  },


  footer__down: {
    maxWidth: '940px',
    margin: 'auto',
  },

  logoCompany: {
    width: 80,
    borderRadius: 8,
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },

  gvm: {
    width: 130,
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  }
}))
export default useStyle