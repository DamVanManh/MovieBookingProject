import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  text__first: props => ({
    color: `${props.color}`,
    fontWeight: "500",
    fontSize: 16,
  }),
  text__second: {
    color: "#000",
    fontWeight: "500",
    fontSize: 16,
  },
});
export default useStyles