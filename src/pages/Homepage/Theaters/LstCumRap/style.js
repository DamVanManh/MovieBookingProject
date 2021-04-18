import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  lstCumRap: props => ({
    flex: "30%",
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: props.isMobileTheater && 300,
    borderLeft: "1px solid #ebebec",
    borderBottom: props.isMobileTheater ? '3px solid #ebebec' : 'none',
    ...props.customScrollbar,
  }),

  cumRap: props => ({
    display: 'flex',
    cursor: "pointer",
    padding: "20px 15px 15px 20px",
    opacity: 0.5,
    transition: "all .2s",
    '&:hover': {
      opacity: [[1], '!important'],
    },
    ...props.underLine
  }),
  cumRap__img: {
    width: 50, height: 50,
  },
  cumRap__info: {
    paddingLeft: 10,
    width: 'calc(100% - 50px)',
  },
  'cumRap__name--first': props => ({
    color: `${props.color}`,
    fontWeight: "500",
  }),
  'cumRap__name--second': {
    color: "#000",
    fontWeight: "500",
  },
  cumRap__address: {
    fontSize: "12px",
    color: "#949494",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
});
export default useStyles