import { makeStyles } from "@material-ui/core"
const useStyle = makeStyles((theme) => ({
  // search bar
  search: {
    display: "flex",
    [theme.breakpoints.down(992)]: {
      display: "none",
    },
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

  // popup menu
  menu: theme => ({ maxHeight: 300, ...theme.customScrollbar }),
  'menu__item': {
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
      backgroundColor: "#60c5ef",
      color: "#fff",
      '& li ~ li': {
        color: '#fff',
      }
    },
  },
  'menu__item--selected': {
    backgroundColor: "#60c5ef !important",
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
  }

}))
export default useStyle