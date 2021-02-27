import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import useStyles from './style'
import { Container } from '@material-ui/core';


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

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="container">
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static">
                    <div>
                        <Tabs className={classes.tabBar} value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab className={classes.tabButton} label="Điện Ảnh 24h" {...a11yProps(0)} />
                            <Tab className={classes.tabButton} label="Review" {...a11yProps(1)} />
                            <Tab className={classes.tabButton} label="Khuyến Mãi" {...a11yProps(2)} />
                        </Tabs>
                    </div>

                </AppBar>

                <TabPanel value={value} index={0}>
                    <div className="row">
                        <div className="col-sm-6">
                            <a href="#" className={classes.news}>
                                <img className="card-img-top" src="./img/hot-news.jpg" alt />

                                <div className="card-body">
                                    <h4 className="card-title">Khai trương rạp xịn giá ngon, chuẩn xì tai Sài Gòn</h4>
                                    <p className="card-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!</p>
                                </div>
                            </a>

                        </div>
                        <div className="col-sm-6">
                            <div className={classes.news}>
                                <img className="card-img-top" src="./img/hot-news.jpg" alt />
                                <div className="card-body">
                                    <h4 className="card-title">Khai trương rạp xịn giá ngon, chuẩn xì tai Sài Gòn</h4>
                                    <p className="card-text">Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <a href="#" className={classes.news}>
                                <img className="card-img-top" src="./img/latest-news.png" alt />
                                <div className="card-body">
                                    <h4 className="card-title">Tiệc trăng máu chính thức cán mốc 2 tỉ chỉ sau 2 tuần công chiếu</h4>
                                    <p className="card-text">Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác phẩm. </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href="#" className={classes.news}>
                                <img className="card-img-top" src="./img/latest-news.png" alt />
                                <div className="card-body">
                                    <h4 className="card-title">Tiệc trăng máu chính thức cán mốc 2 tỉ chỉ sau 2 tuần công chiếu</h4>
                                    <p className="card-text">Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác phẩm. </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-4" >
                            <a className={classes.bonusNews} href="">
                                <div className="row mb-2">
                                    <div className="col-sm-3 pr-0">
                                        <img className={classes.fullImg} src="./img/latest-news.png" alt="" />
                                    </div>
                                    <div className="col-sm-9">
                                        <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                    </div>
                                </div>
                            </a>
                            <a className={classes.bonusNews} href="">
                                <div className="row mb-2">
                                    <div className="col-sm-3 pr-0">
                                        <img className={classes.fullImg} src="./img/latest-news.png" alt="" />
                                    </div>
                                    <div className="col-sm-9">
                                        <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                    </div>
                                </div>
                            </a>
                            <a className={classes.bonusNews} href="">
                                <div className="row mb-2">
                                    <div className="col-sm-3 pr-0">
                                        <img className={classes.fullImg} src="./img/latest-news.png" alt="" />
                                    </div>
                                    <div className="col-sm-9">
                                        <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                    </div>
                                </div>
                            </a>
                            <a className={classes.bonusNews} href="">
                                <div className="row mb-2">
                                    <div className="col-sm-3 pr-0">
                                        <img className={classes.fullImg} src="./img/latest-news.png" alt="" />
                                    </div>
                                    <div className="col-sm-9">
                                        <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    Item Two
            </TabPanel>

                <TabPanel value={value} index={2}>
                    Item Three
            </TabPanel>
            </div >
        </div>

    );
}
