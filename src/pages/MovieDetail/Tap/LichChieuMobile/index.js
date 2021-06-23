import React, { useState } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';
import { useStyles, Accordion, AccordionSummary, AccordionDetails } from './style'

import formatDate from '../../../../utilities/formatDate';
import ItemCumRap from '../../../../components/ItemCumRap';
import { selectMobileData } from '../../../../reducers/selector/MovieDetail';

export default function LichChieuMobile() {

  const mobileData = useSelector(selectMobileData)

  const [indexSelected, setindexSelected] = useState(0)
  const [expanded, setExpanded] = React.useState("");
  const classes = useStyles();

  const handleSelectDay = (i) => {
    setindexSelected(i)
  }
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.listDay}>
        {mobileData.isEmptyData && <p style={{ padding: 10 }}>Hiện tại chưa có lịch chiếu cho phim này</p>}
        {mobileData.arrayHeThongRapChieuFilterByDay?.map((item, i) => (
          <div className={classes.dayItem} key={item.date} style={{ color: i === indexSelected ? "#fb4226" : "#000" }} onClick={() => handleSelectDay(i)}>
            <p>{formatDate(item.date).dayToday}</p>
            <p style={{ fontSize: i === indexSelected ? "18px" : "16px", transition: "all .2s" }}>{formatDate(item.date).YyMmDd}</p>
          </div>
        ))}
      </div>
      {mobileData.arrayHeThongRapChieuFilterByDay?.map((item, indexDay) => (
        <div key={item.date} style={{ display: indexDay === indexSelected ? "block" : "none" }}>
          {item.heThongRap?.map((heThongRapItem) => (
            <Accordion key={heThongRapItem.tenHeThongRap} square expanded={expanded === heThongRapItem.tenHeThongRap} onChange={handleChange(heThongRapItem.tenHeThongRap)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <img src={heThongRapItem.logo} alt="logo" className={classes.logo} />
                <p className={classes.nameTheater}>{heThongRapItem.tenHeThongRap}</p>
              </AccordionSummary>
              <AccordionDetails >
                {heThongRapItem.cumRapChieu.map((item) => (
                  <ItemCumRap key={item.tenCumRap} tenCumRap={item.tenCumRap} maLichChieu={item.maLichChieu} lichChieuPhim={item.lichChieuPhim} />
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ))}
    </div >
  );
}


