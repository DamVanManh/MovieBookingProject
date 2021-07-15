import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    control: {
      margin: "11px 0",
    },
    addMovie: { width: "100%" },
    itemCtro: {
      paddingRight: 16,
      paddingLeft: 16,
      [theme.breakpoints.up("md")]: {
        paddingRight: 32,
        paddingLeft: 32,
      },
    },
    search: {
      verticalAlign: "bottom",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.info.light, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.info.light, 0.25),
      },
      [theme.breakpoints.down("md")]: {
        marginTop: 11,
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
      textOverflow: "ellipsis",
      overflow: "hidden",
      display: "flex",
    },
    inputInput: {
      padding: "8.5px 8.5px 8.5px 0px",
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
    rootDataGrid: {
      "& .Mui-odd": {
        backgroundColor: "rgb(166, 213, 250)",
        "&:hover": {
          backgroundColor: "rgb(144, 202, 249) !important",
        },
      },
      "& .MuiDataGrid-overlay": {
        zIndex: 100,
      },
      "& .Mui-even": {
        backgroundColor: "rgb(183, 223, 185)",
        "&:hover": {
          backgroundColor: "rgb(165, 215, 167)",
        },
      },
      "& .MuiDataGrid-columnsContainer": {
        backgroundColor: "rgb(255, 213, 153)",
      },
      "& .custom-header": {
        backgroundColor: "rgb(255, 213, 153)",
        "&:hover": {
          backgroundColor: "rgb(255, 203, 127)",
        },
      },
      "& .MuiDataGrid-colCellCheckbox": {
        width: 48,
        height: 55,
        minWidth: 48,
        maxHeight: 55,
        backgroundColor: "rgb(255, 213, 153)",
        "&:hover": {
          backgroundColor: "rgb(255, 203, 127)",
        },
      },
    },
    button: {
      margin: theme.spacing(1),
      width: 270,
    },

    rootTrailer: {
      cursor: "pointer",
      display: "inline-block",
      width: 50,
      height: 50,
      position: "relative",
      "&:hover > div": {
        opacity: 1,
      },
      "& > div > img": {
        verticalAlign: "top",
      },
    },
    imgTrailer: {
      width: "100%",
      height: "100%",
      borderRadius: 4,
    },

    rootCellExpand: {
      alignItems: "center",
      lineHeight: "24px",
      width: "100%",
      height: "100%",
      position: "relative",
      display: "flex",
      "& .cellValue": {
        width: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
    contentImage: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    divImage: {
      flex: "50%",
    },
    image: {
      width: "auto",
      maxWidth: 50,
      height: 50,
      borderRadius: 4,
    },
    rootSlider: {
      flex: "50%",
      verticalAlign: "middle",
    },
    formControl: {
      display: "block",
      width: "100%",
      height: "calc(1.5em + .75rem + 2px)",
      padding: ".375rem .75rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "#495057",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
      border: "1px solid #ced4da",
      borderRadius: ".25rem",
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      "& > div": {
        display: "block",
      },
    },
  };
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#fb4226",
      },
    },
    MuiPickerDTTabs: {
      tabs: {
        backgroundColor: "#fb4226",
      },
    },
    MuiPickersDay: {
      day: {
        color: "#fb4226",
      },
      daySelected: {
        backgroundColor: "#fb4226",
      },
    },
    MuiButton: {
      textPrimary: {
        color: "#fb4226",
      },
    },
    PrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: "#3f51b5",
      },
    },
    MuiInputBase: {
      input: {
        padding: "3px 0 2px",
      },
    },
    MuiInput: {
      underline: {
        display: "flex",
        "&:before": {
          content: "",
        },
        "&:after": {
          content: "",
        },
      },
    },
  },
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export { useStyles, DialogContent, DialogTitle, materialTheme };
