import React from 'react'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import useStyles from './style'
import RightSection from './RightSection';

export default function LichChieuDesktop({ data }) {
  const classes = useStyles();

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
          <div key={theater.maHeThongRap} style={{ display: value === i ? "block" : "none" }}>
            <RightSection currentSelectedHeThongRapChieu={theater} />
          </div>
        ))}
      </div>
    </div >
  );
}


