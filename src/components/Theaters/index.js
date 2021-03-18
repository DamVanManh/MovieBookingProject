import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from 'react-redux';
import { getTheaters } from '../../reducers/actions/Movie';
import { Link } from "react-router-dom";
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
                    <Typography>{children}</Typography>
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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '500px',
        padding: 0,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));


const theme = createMuiTheme({
    overrides: {
        MuiBox: {
            root: {
                padding: 0,
            }
        },
        MuiButtonBase: {
            padding: 0,
            height: '100px'
        }
    }
});

export default function Theaters() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [value1, setValue1] = React.useState(0);
    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTheaters())
    }, [])

    const { theaterList, loading, error } = useSelector((state) => state.theaterReducer);
    if (loading) {
        return <h1>loading</h1>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="container mt-5 ">
            <div className="row position-relative">
                <MuiThemeProvider theme={theme}>
                    <div className="col-sm-2 pl-0 pr-0">
                        <div className={classes.root}>
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                className={classes.tabs}
                                value={value}
                                onChange={handleChange}
                                aria-label="simple tabs example">

                                {theaterList?.map((item, index) => {
                                    return (
                                        // SỬA LẠI ĐỂ RENDER RA LOGO
                                        <Tab style={{ padding: 0, height: '70px', border: 'none' }} label={<img style={{ width: '50px', height: '50px' }} src={item.logo} />} {...a11yProps(index)} />
                                    )
                                })}
                            </Tabs>
                        </div>
                    </div>

                    <div className="col-sm-10 pl-0 pr-0" >
                        {theaterList?.map((item, index) => {
                            // TRẢ VỀ 6 CON LẦN 1

                            return (
                                <TabPanel value={value} index={index} >
                                    <div className="row">
                                        <div className="col-sm-3 pl-0 pr-0">
                                            <div className={classes.root}>
                                                <Tabs orientation="vertical"
                                                    variant="scrollable"
                                                    className={classes.tabs}
                                                    value={value1}
                                                    onChange={handleChange1}
                                                    aria-label="simple tabs example">

                                                    {item.lstCumRap?.map((item1, index1) => {
                                                        return (
                                                            // label={item1.tenCumRap}
                                                            <Tab label={
                                                                <div className="row">
                                                                    <div className="col-sm-3">
                                                                        <img src="" alt="IMG" />
                                                                    </div>
                                                                    <div className="col-sm-9">
                                                                        {item1.tenCumRap}
                                                                    </div>
                                                                </div>
                                                            }  {...a11yProps(index1)} />
                                                        )
                                                    })}
                                                </Tabs>
                                            </div>
                                        </div>

                                        <div className="col-sm-9 pl-0 pr-0" >
                                            {item.lstCumRap?.map((item2, index2) => {
                                                return (
                                                    <TabPanel value={value1} index={index2} style={{ overflowY: 'scroll', height: '500px' }}>

                                                        {item2.danhSachPhim?.map((item3, index3) => {
                                                            return (
                                                                <div>
                                                                    <div className="row" style={{ alignItems: 'center', width: '100%', margin: 0 }}>
                                                                        <div className="col-sm-2">
                                                                            <img style={{ width: '60px', height: '60px', margin: '20px' }} src={item3.hinhAnh} alt="IMG" />
                                                                        </div>
                                                                        <div className="col-sm-10">
                                                                            <h3 className="mb-0">{item3.tenPhim}</h3>
                                                                        </div>

                                                                    </div>

                                                                    <div className="row pl-0 pr-0 " style={{ width: '100%', margin: 0 }}>
                                                                        {item3.lstLichChieuTheoPhim?.map((item4, index4) => {
                                                                            const temp = item4.ngayChieuGioChieu.split('T', 2)
                                                                            return (
                                                                                // {item4.ngayChieuGioChieu.split('T', 1)}
                                                                                <div className="col-sm-3">
                                                                                    <Link to={`/datve/${item4.maLichChieu}`} className="btn mb-2 " style={{ fontSize: '15px', color: 'green', backgroundColor: 'gray', fontWeight: 'bold' }}>{temp[1]}</Link>
                                                                                </div>

                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>

                                                            )
                                                        })}

                                                    </TabPanel>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </div>
                </MuiThemeProvider>
            </div>
        </div >
    );
}
