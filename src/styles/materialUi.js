
const customScrollbar = {
  "&::-webkit-scrollbar": {
    width: 4,
    backgroundColor: "#e8e3e3",
    borderRadius: 4,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: 4,
    "-webkit-box-shadow": "inset 0 0 6px rgb(0 0 0 / 30%)",
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: 4,
  }
}
const underLine = {
  position: "relative",
  '&:after': {
    content: "''",
    position: "absolute",
    bottom: "0",
    left: "50%",
    width: "calc(100% - 40px)",
    transform: "translateX(-50%)",
    borderBottom: "1px solid rgba(238,238,238,.88)",
  }
}

const underLineDashed = {
  position: "relative",
  '&:after': {
    content: "''",
    position: "absolute",
    bottom: "0",
    left: "50%",
    width: "100%",
    transform: "translateX(-50%)",
    borderBottom: "1px dashed #e9e9e9;",
  }
}

export { customScrollbar, underLine, underLineDashed };

