import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  text__first: props => ({
    color: props.color ? `${props.color}` : '#000',
    fontWeight: "500",
    fontSize: props.testSize ? props.testSize : 14,
  }),
  text__second: {
    color: "#000",
    fontWeight: "500",
  },
});
export default useStyles