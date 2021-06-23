import { fade, makeStyles } from '@material-ui/core/styles'
import { customScrollbar } from '../../styles/materialUi';
import { createMuiTheme } from "@material-ui/core";

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

    search__item: {
      color: 'black',
      padding: 11,
      '& > div > div': {
        color: 'black',
        fontSize: 14,
        padding: '18px 0px',
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '& ~ svg': {
          fontSize: 19,
          color: 'rgba(0, 0, 0, 0.3)',
          top: '36%',
        }
      },
      '&:after': {
        content: "''",
        position: "absolute",
        right: "0",
        height: "62%",
        top: "50%",
        transform: "translateY(-50%)",
        borderRight: "1px solid",
        borderRightColor: "rgba(238,238,238,.88)"
      }
    },
    'search__item--first': {
      flex: '30%',
      paddingLeft: '2%',

    },
    'search__item--next': {
      flex: "calc(70% / 4)",
    },
    paddingBtn: {
      padding: '18.4px 11px 18.4px'
    },
    // popup menu
    menu: { maxHeight: 300, ...customScrollbar },
    menu__item: {
      width: '100%',
      minHeight: "auto",
      display: 'block',
      padding: '3px 20px',
      fontSize: '14px',
      color: '#333',
      '&:focus': {
        backgroundColor: 'transparent',
      },
      '& li ~ li': {
        fontSize: 11,
        color: '#aaa',
      },
      // màu nền và chữ khi hover
      '&:hover': {
        backgroundColor: "#fb4226",
        color: "#fff",
        '& li ~ li': {
          color: '#fff',
        }
      },
    },
    'menu__item--selected': {
      backgroundColor: "#fb4226 !important",
      color: "#fff",
      '& li ~ li': {
        color: '#fff',
      }
    },
    // button
    btn: { // css áp dụng khi disabled = false
      backgroundColor: '#fb4226',
      margin: 'auto',
      '&:hover': {
        backgroundColor: "#b30000",
      },
      '&:focus': {
        outline: "none",
      },
      "&$btn": {// css áp dụng khi disabled button
        color: '#fff',
        padding: "8px 23px",
      }
    },
    btnDisabled: {// css áp dụng khi disabled button
      backgroundColor: "#4a4a4a",
      border: "none",
      textTransform: "uppercase",
      borderRadius: "4px",
      padding: "8px 23px",
    },
  };
});

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#fb4226',
      },
    },
    MuiPickerDTTabs: {
      tabs: {
        backgroundColor: '#fb4226',
      },
    },
    MuiPickersDay: {
      day: {
        color: '#fb4226',
      },
      daySelected: {
        backgroundColor: '#fb4226',
      },
    },
    MuiButton: {
      textPrimary: {
        color: '#fb4226',
      }
    },
    PrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: '#3f51b5',
      }
    },
    MuiInputBase: {
      input: {
        padding: 1.4,
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          content: ""
        }
      }
    },
  },
})
export { useStyles, materialTheme }