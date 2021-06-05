import { fade, makeStyles, withStyles } from '@material-ui/core/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => {
  return {
    control: {
      height: "fit-content",
      width: '100%',
    },
    rootDataGrid: {
      '& .Mui-odd': {
        backgroundColor: "rgb(166, 213, 250)",
        '&:hover': {
          backgroundColor: "rgb(144, 202, 249) !important",
        },
      },
      '& .MuiDataGrid-overlay': {
        zIndex: 100
      },
      '& .Mui-even': {
        backgroundColor: "rgb(183, 223, 185)",
        '&:hover': {
          backgroundColor: "rgb(165, 215, 167)",
        },
      },
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: "rgb(255, 213, 153)",
      },
      '& .custom-header': {
        backgroundColor: "rgb(255, 213, 153)",
        '&:hover': {
          backgroundColor: "rgb(255, 203, 127)",
        },
      },
      '& .MuiDataGrid-colCellCheckbox': {
        backgroundColor: "red",
        width: 48,
        height: 55,
        minWidth: 48,
        maxHeight: 55,
        backgroundColor: "rgb(255, 213, 153)",
        '&:hover': {
          backgroundColor: "rgb(255, 203, 127)",
        },
      },
    },
    button: {
      margin: theme.spacing(1),
      width: 270,
    },

    addMovie: {
      margin: theme.spacing(1),
    },

    search: {
      verticalAlign: "bottom",
      display: "inline-block",
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.info.light, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.info.light, 0.25),
      },
      margin: theme.spacing(1),
      width: 'auto',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: "8.5px 8.5px 8.5px 0px",
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },

    rootTrailer: {
      cursor: "pointer",
      display: "inline-block",
      width: 50, height: 50, position: "relative",
      "&:hover > div": {
        opacity: 1,
      },
      '& > div > img': {
        verticalAlign: "top",
      }
    },
    imgTrailer: {
      width: "100%", height: "100%", borderRadius: 4
    },

    rootCellExpand: {
      alignItems: 'center',
      lineHeight: '24px',
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      '& .cellValue': {
        width: "100%",
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
    rootSlider: {
      width: 60,
      verticalAlign: "middle",
    },
  };
});


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
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
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export { useStyles, DialogContent, DialogTitle }