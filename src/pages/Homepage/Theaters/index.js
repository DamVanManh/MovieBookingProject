import React, { useEffect } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';

import LstCumRap from './LstCumRap'
import useStyles from './style'
import { underLine } from '../../../styles/materialUi'
import { colorTheater } from '../../../constants/theaterData'
import Seperate from '../../../components/Seperate'
import { DISPLAY_MOBILE_THEATER } from '../../../constants/config'

export default function HeThongRap() {
  const isMobileTheater = useMediaQuery(DISPLAY_MOBILE_THEATER);
  const { theaterList, errorTheaterList } = useSelector((state) => state.theaterReducer);
  const [valueHeThongRap, setValueHeThongRap] = React.useState(0);
  const classes = useStyles({ isMobileTheater, underLine });
  const dispatch = useDispatch()

  const handleChangeHeThongRap = (e, indexSelected) => {
    setValueHeThongRap(indexSelected);
  };

  if (errorTheaterList) {
    return <div>{errorTheaterList}</div>
  }
  return (
    <div id="cumrap">
      <Seperate />
      <div className={classes.theater}>{/* div root theater */}
        <Tabs
          variant={isMobileTheater ? "scrollable" : 'standard'}
          scrollButtons="on"
          orientation={`${isMobileTheater ? "horizontal" : "vertical"}`}
          value={valueHeThongRap} // giúp nhận diện tap đã click
          onChange={handleChangeHeThongRap}
          classes={{ indicator: classes.tabs__indicator, root: classes.taps }}
        >
          {theaterList.map((theater) => (<Tab disableRipple classes={{ root: classes.tap, selected: classes['tap--selected'], textColorInherit: classes.textColorInherit }} key={theater.maHeThongRap} label={<img style={{ width: '50px', height: '50px' }} src={theater.logo} alt="theaterLogo" />} />))}
        </Tabs>
        {theaterList.map((theater, index) => (valueHeThongRap === index && <LstCumRap lstCumRap={theater.lstCumRap} color={colorTheater[theater.lstCumRap[0].tenCumRap.slice(0, 3).toUpperCase()]} maHeThongRap={theater.maHeThongRap} key={theater.maHeThongRap} isMobileTheater={isMobileTheater} />))}
      </div >
    </div>
  );
}


