import React from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles, Accordion, AccordionSummary, AccordionDetails } from './style'
import ItemPhim from './ItemPhim';
import TenCumRap from '../../../../components/TenCumRap';
import Address from '../../../../components/ItemCumRap/Address';

import FakeImgTheater from '../../../../components/FakeImgTheater/fakeImgTheater';

export default function MobileLstCumRap({ lstCumRap, isMobileTheater }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.rootCumRap}>
      {lstCumRap?.map(item => (
        <Accordion key={item.tenCumRap} style={{ direction: "ltr" }} square expanded={expanded === item.tenCumRap} onChange={handleChange(item.tenCumRap)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <FakeImgTheater nameTheater={item.tenCumRap} imgStyle={classes.imgTheater} />
            <div className={classes.wrapInfo} >
              <TenCumRap tenCumRap={item.tenCumRap} testSize={12} />
              <Address maLichChieu={item.maLichChieu} diaChiAlreadyExist={item.diaChi} />
            </div>
            <div style={{ clear: "both" }}></div>
          </AccordionSummary>
          <AccordionDetails >
            {item.danhSachPhim.map((phim) => (
              <ItemPhim key={phim.tenPhim} isMobileTheater={isMobileTheater} phim={phim} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
