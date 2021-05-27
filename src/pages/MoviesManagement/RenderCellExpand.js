import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { isOverflown } from '@material-ui/data-grid';
import { useStyles } from './styles';
import Fade from '@material-ui/core/Fade';
import Slider from '@material-ui/core/Slider';

const GridCellExpand = function GridCellExpand(props) {
  const { width, value, field, forceMount, maPhim } = props;
  const [key, setkey] = useState(maPhim)
  const classes = useStyles({ field });
  const wrapper = React.useRef(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);
  const [widthImage, setwidthImage] = React.useState({ widthImage: 200, value: 20 })



  const handleMouseEnter = () => {
    let isCurrentlyOverflown = isOverflown(cellValue.current);
    if (field === "hinhAnh") {
      isCurrentlyOverflown = true
    }
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  React.useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        setShowFullCell(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);

  const handleChangeSize = (event, newValue) => {
    let width = (200 * newValue + 12000) / 80
    setwidthImage({ widthImage: width, value: newValue })
  }
  useEffect(() => {
    if (maPhim === forceMount) {
      setkey(maPhim + "f")
    }
  })

  return (
    <div
      ref={wrapper}
      className={classes.rootCellExpand}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cellDiv}
        style={{
          height: 1,
          width,
          display: 'block',
          position: 'absolute',
          top: 0,
        }}
      />
      <div ref={cellValue} className="cellValue">
        {field !== "hinhAnh" ? value :
          <>
            <img style={{ width: 50, height: 50, borderRadius: 4, marginRight: 15, }} key={key} src={`${value}?${maPhim}`} alt="image" />
            <Slider value={widthImage.value} classes={{ root: classes.rootSlider }} onChange={handleChangeSize} />
          </>

        }
      </div>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width: field === "hinhAnh" ? widthImage.widthImage : width, marginLeft: -17 }}
          placement="right"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              {field === "hinhAnh" ? <img style={{ width: "100%", height: "100%", borderRadius: 4, }} key={key} src={`${value}?${maPhim}`} alt="image" /> : <Paper
                elevation={1}
                style={{ minHeight: wrapper.current.offsetHeight - 3, backgroundColor: "#00fff3" }}
              >
                <Typography variant="body2" style={{ padding: 8 }}>
                  {value}
                </Typography>
              </Paper>}
            </Fade>
          )}
        </Popper>
      )}
    </div>
  );
};

GridCellExpand.propTypes = {
  value: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default function renderCellExpand({ params, forceMount }) {
  return (
    <GridCellExpand
      forceMount={forceMount}
      maPhim={params.row.maPhim}
      field={params.field}
      value={params.value ? params.value.toString() : ''}
      width={params.colDef.width}
    />
  );
}

renderCellExpand.propTypes = {
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: PropTypes.any.isRequired,
  /**
   * The cell value, but if the column has valueGetter, use getValue.
   */
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
};
