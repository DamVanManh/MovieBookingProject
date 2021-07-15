import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    control: {
      height: "fit-content",
      width: "100%",
    },
    rootDataGrid: {
      "& .MuiDataGrid-cellEditing": {
        backgroundColor: "rgb(255,215,115, 0.19)",
        color: "#1a3e72",
      },
      "& .Mui-error": {
        backgroundColor: `rgb(126,10,15,0.1})`,
        color: "#750f0f",
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

      "& .isadmin--true": {
        backgroundColor: "rgb(250, 179, 174)",
        "&:hover": {
          backgroundColor: "rgb(249, 161, 154)",
        },
      },
      "& .isadmin--false": {
        backgroundColor: "rgb(183, 223, 185)",
        "&:hover": {
          backgroundColor: "rgb(165, 215, 167)",
        },
      },
      "& .ismodify--true": {
        backgroundColor: "rgb(166, 213, 250)",
        "&:hover": {
          backgroundColor: "rgb(144, 202, 249) !important",
        },
      },
    },
    button: {
      width: "100%",
      height: "100%",
    },
    userQuanTri: {
      backgroundColor: "rgb(250, 179, 174)",
      "&:hover": {
        backgroundColor: "rgb(249, 161, 154)",
      },
    },
    userKhachHang: {
      backgroundColor: "rgb(183, 223, 185)",
      "&:hover": {
        backgroundColor: "rgb(165, 215, 167)",
      },
    },
    userModified: {
      backgroundColor: "rgb(166, 213, 250)",
      "&:hover": {
        backgroundColor: "rgb(144, 202, 249) !important",
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
  };
});
export default useStyles;
