import { makeStyles, withStyles } from "@material-ui/core"
import StepConnector from '@material-ui/core/StepConnector';

const useStyles = makeStyles(theme => ({

  root: {
    width: '100%',
    boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    height: 100,
  },
  stepper: {
    padding: 0,
    flexBasis: '80%',
  },
  label: {
    marginTop: '7px !important',
    color: "#9b9b9b",
    fontSize: 16,
  },
  account: {
    cursor: "pointer",
    textAlign: 'center',
    textTransform: "uppercase",
    flex: "0 0 150px",
  },
  hoTen: {
    marginTop: 7,
    lineHeight: 1.43,
    color: "#9b9b9b",
  },
  avatar: {
    display: "inline-block",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },

  stepIcon: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepIconActive: {
    backgroundImage:
      'linear-gradient(223deg,#b4ec51 0,#429321 100%)',
    boxShadow: '0 0 11px 11px rgba(180, 236, 81,.25)',
  },
  stepIconCompleted: {
    backgroundImage: 'linear-gradient(223deg,#b4ec51 0,#429321 100%)',
  },
}))


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient(223deg,#b4ec51 0,#429321 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient(223deg,#b4ec51 0,#429321 100%)'
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

export { useStyles, ColorlibConnector }