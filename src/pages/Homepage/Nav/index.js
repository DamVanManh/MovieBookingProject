import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DailyMovieList from './DailyMovieList';
import ComingMovieList from './ComingMovieList';
import useStyles from './style';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{ paddingTop: "80px" }}
      className="container">
      <div>
        <AppBar className={classes.appBar} position="static">
          <Tabs classes={{ root: classes.tabBar, flexContainer: classes.flexContainer, indicator: classes.indicator }} value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab classes={{ wrapper: classes.wrapper }} className={classes.tabButton} label="Đang chiếu" {...a11yProps(0)} />
            <Tab classes={{ wrapper: classes.wrapper }} className={classes.tabButton} label="Sắp chiếu" {...a11yProps(1)} />
          </Tabs>

        </AppBar>

        <TabPanel value={value} index={0}>
          <div >
            <DailyMovieList />
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div >
            <ComingMovieList />
          </div>
        </TabPanel>

      </div >
    </div >

  );
}

