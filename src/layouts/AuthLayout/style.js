import { makeStyles } from "@material-ui/core"
import { underLine } from '../../styles/materialUi';

const useStyles = makeStyles({

  cumRapItem: {
    padding: "20px 20px 10px",
    transition: "height .2s",
    overflowY: "hidden",
    ...underLine
  },
  topInfo: {
    paddingBottom: 20,
    cursor: "pointer",
  },
  imgTheater: {
    width: 50,
    float: "left",
    display: "inline-block",
    border: "1px solid #ebebec",
  },
  nameTheater: {

  },
  wrapInfo: {
    paddingLeft: 58
  },

  digital: {
    marginBottom: 5,
    fontWeight: 500,
  },

});

export { useStyles }