import { makeStyles } from "@material-ui/core"
import { customScrollbar } from '../../../../styles/materialUi';
const useStyle = makeStyles({
  // search bar
  search: {
    display: props => props.down992px ? "none" : 'flex',
    maxWidth: "940px",
    margin: "auto",
    height: "83px",
    position: "absolute",
    bottom: "0",
    width: "100%",
    left: "50%",
    transform: "translate(-50%,50%)",

    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: '0 0 10px rgb(0 0 0 / 30%)',

    alignItems: "center",
  },
  itemFirst: {
    padding: '1%',
    flex: "30%",
    '&:after': {
      content: "''",
      position: "absolute",
      right: "0",
      height: "62%",
      top: "50%",
      transform: "translateY(-50%)",
      borderRight: "1px solid",
      borderRightColor: "rgba(238,238,238,.88)"
    },
    '& > div': {
      width: "auto !important",
    },
  },

  textField: {
    '& > div': {
      marginTop: 0,
      paddingBottom: "0px !important",
      '& > input': {
        padding: "18px 0px !important",
        paddingLeft: "20px !important",
        fontSize: 14,
      },
      '&:before': {
        borderBottom: "none !important"
      },
      '&:after': {
        borderBottom: "none"
      },
      '& > div:hover:not(.Mui-disabled):before': {
        borderBottom: 'none',
      },
    },
    '& > label': {
      color: "#000",
      fontSize: 14,
      top: -3,
      left: 20,
      display: props => props.openPhim ? "none" : "block"
    },
    '& > label.Mui-focused': {
      display: "none"
    },
  },
  popupIndicator: {
    '& > span': {
      marginTop: 0,
      '& > svg': {
        color: "rgba(0, 0, 0, 0.3)",
        fontSize: "19px !important",
      },
    },
  },
  listbox: {
    ...customScrollbar,
    '& .MuiAutocomplete-option[aria-selected="true"]': {
      backgroundColor: "#fb422685",
      color: "#fff",
    }
  },
  paper: {
    boxShadow: "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
  },
  noOptions: {
    color: "#000",
    fontSize: 14,
    padding: "9.5px 20px 9.5px 20px",
  },

  search__item: {
    color: 'black',
    padding: '1%',
    '& > div:before': {
      borderBottom: 'none',
    },
    '& > div:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
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
        top: '33%',
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
    backgroundColor: "#fb422685 !important",
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
      backgroundColor: "#d01414",
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
  }

})
export default useStyle