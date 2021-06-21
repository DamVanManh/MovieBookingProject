import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  theater: {
    display: props => props.isMobileTheater ? "block" : "flex",
    maxWidth: 940,
    maxHeight: 705,
    margin: 'auto',
    border: "1px solid #ebebec",
    borderRadius: 4,
  },
  taps: { // dường line phần chia khi horizontal
    borderBottom: 'none',
    flexBasis: 92,
  },
  cumRap: {
    flexBasis: "calc(100% - 92px)"
  },
  tabs__indicator: {
    backgroundColor: '#fa5238',
    boxShadow: "0 -3px 10px 0 #fb4226",
  },
  tap: props => ({
    padding: 20,
    minWidth: 92,
    margin: 'auto',
    ...props.underLine,
  }),
  textColorInherit: {
    opacity: 0.3,
    '&:hover': {
      transition: "all .2s",
      opacity: 1,
    },
  },

});
export default useStyles
