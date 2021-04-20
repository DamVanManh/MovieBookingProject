import React, { Fragment } from 'react'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import useStyles from './style'
import { DISPLAY_MOBILE_THEATER } from '../../../constants/config'
import RightSection from './RightSection';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      {...other}
    >
      {value === index &&
        children
      }
    </div>
  );
}

export default function HeThongRap({ data }) {
  const isMobileTheater = useMediaQuery(DISPLAY_MOBILE_THEATER);
  const classes = useStyles();

  console.log("data tổng: ", data);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        classes={{ root: classes.leftSection, indicator: classes.indicator }}
      >
        {data?.heThongRapChieu?.map(theater => (
          <Tab disableRipple key={theater.maHeThongRap} classes={{ wrapper: classes.wrapper, root: classes.tabRoot }} label={
            <>
              <img className={classes.logo} src={theater.logo} alt="logoTheater" />
              <span>{theater.tenHeThongRap}</span>
            </>
          } />
        ))}
      </Tabs>
      <div className={classes.rightSection}>
        {data?.heThongRapChieu?.length === 0 && <p style={{ padding: 10 }}>Hiện tại chưa có lịch chiếu cho phim này</p>}
        {data?.heThongRapChieu?.map((theater, i) => (
          <Fragment key={theater.maHeThongRap}>
            <TabPanel value={value} index={i} >
              {/* currentSelectedHeThongRapChieu: chỉ truyền vào heThongRapChieu đã chọn */}
              <RightSection currentSelectedHeThongRapChieu={theater} maHeThongRap={theater.maHeThongRap} />
            </TabPanel>
          </Fragment>
        ))}

      </div>

    </div >
  );
}


