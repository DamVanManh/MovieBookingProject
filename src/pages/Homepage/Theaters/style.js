import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  theater: {
    display: "flex",
    flexDirection: props => props.horizontal && 'column',
    maxHeight: props => props.horizontal ? 'none' : '705px',
    maxWidth: 940,
    margin: 'auto',

    border: "1px solid #ebebec",
    borderRadius: 4,
  },
  taps: {
    borderBottom: props => props.horizontal ? '3px solid #ebebec' : 'none',
  },
  tabs__indicator: {
    backgroundColor: 'transparent',
    borderBottom: props => props.horizontal && '2px solid #fb4226',
    borderRight: props => props.horizontal || '2px solid #fb4226',
  },
  tap: props => ({
    padding: 20,
    minWidth: 92,
    margin: 'auto',
    ...props.underLine,
  }),
  "tap--selected": {
    opacity: 1,
  },
  textColorInherit: {
    opacity: 0.5,
    '&:hover': {
      transition: "all .2s",
      opacity: 1,
    },
  },

});
export default useStyles
