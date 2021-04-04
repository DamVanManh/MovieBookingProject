import React, { useEffect } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';

import { getTheaters } from '../../../reducers/actions/Movie';
import LstCumRap from './LstCumRap'
import useStyles from './style'
import { underLine } from '../../../styles/materialUi'
import { colorTheater } from '../../../constants/theaterData'
import Seperate from '../../../components/Seperate'

export default function HeThongRap() {
  const theme = useTheme();
  const horizontal = useMediaQuery(theme.breakpoints.down(678));
  const { theaterList, loading, error } = useSelector((state) => state.theaterReducer);
  const [valueHeThongRap, setValueHeThongRap] = React.useState(0);
  const classes = useStyles({ horizontal, underLine });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTheaters())
  }, [])
  const handleChangeHeThongRap = (e, indexSelected) => {
    setValueHeThongRap(indexSelected);
  };

  if (loading) {
    return <h1>loading</h1>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <div>
      <Seperate />
      <div className={classes.theater}>{/* div root theater */}
        <Tabs
          variant={horizontal ? "scrollable" : 'standard'}
          scrollButtons="on"
          orientation={`${horizontal ? "horizontal" : "vertical"}`}
          value={valueHeThongRap} // giúp nhận diện tap đã click
          onChange={handleChangeHeThongRap}
          classes={{ indicator: classes.tabs__indicator, root: classes.taps }}
        >
          {theaterList.map((theater) => (<Tab disableRipple classes={{ root: classes.tap, selected: classes['tap--selected'], textColorInherit: classes.textColorInherit }} key={theater.maHeThongRap} label={<img style={{ width: '50px', height: '50px' }} src={theater.logo} />} />))}
        </Tabs>
        {theaterList.map((theater, index) => (valueHeThongRap === index && <LstCumRap lstCumRap={theater.lstCumRap} color={colorTheater[theater.lstCumRap[0].tenCumRap.slice(0, 3).toUpperCase()]} maHeThongRap={theater.maHeThongRap} key={theater.maHeThongRap} horizontal={horizontal} />))}
      </div >
    </div>
  );
}


