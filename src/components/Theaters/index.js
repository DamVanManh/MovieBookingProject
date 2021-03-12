import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
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

export default function Theaters() {

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
        <div className="container">
            <AppBar position="static">
                <div>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        {theaterList?.map((item, index) => {
                            return (
                                <Tab label={item.tenHeThongRap} {...a11yProps(index)} />
                            )
                        })}
                    </Tabs>
                </div>
            </AppBar>

            {theaterList?.map((item, index) => {
                // TRẢ VỀ 6 CON LẦN 1

                return (
                    <TabPanel value={value} index={index} >

                        <AppBar position="static">
                            <div>
                                <Tabs value={value1} onChange={handleChange1} aria-label="simple tabs example">
                                    {item.lstCumRap?.map((item1, index1) => {
                                        return (
                                            <Tab label={item1.tenCumRap} {...a11yProps(index1)} />
                                        )
                                    })}
                                </Tabs>
                            </div>
                        </AppBar>
                        {item.lstCumRap?.map((item2, index2) => {
                            return (
                                <TabPanel value={value1} index={index2}>
                                    <div className="row">
                                        {item2.danhSachPhim?.map((item3, index3) => {
                                            return (
                                                <div style={{ border: '1px solid black' }} className="col-sm-4 mb-4">
                                                    <p className="mb-0 text-center">{item3.tenPhim}</p>
                                                    <div className="row">
                                                        {item3.lstLichChieuTheoPhim?.map((item4, index4) => {
                                                            return (
                                                                <Link to={`/datve/${item4.maLichChieu}`} className="col-sm-4 ">{item4.maLichChieu}</Link>
                                                            )
                                                        })}
                                                    </div>

                                                </div>

                                            )
                                        })}
                                    </div>
                                </TabPanel>
                            )
                        })}
                    </TabPanel>
                )
            })}
        </div >
    );
}
