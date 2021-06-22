import React, { memo } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles, Accordion, AccordionSummary, AccordionDetails } from './style'
import ItemPhim from './ItemPhim';
import TenCumRap from '../../../../components/TenCumRap';
import Address from '../../../../components/ItemCumRap/Address';

import FakeImgTheater from '../../../../components/FakeImgTheater/fakeImgTheater';

function MobileLstCumRap({ lstCumRap }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (index) => (event, newExpanded) => {
    setExpanded(newExpanded ? index : false);
  };

  return (
    <div className={classes.rootCumRap}>
      {lstCumRap?.map((item, index) => (
        <Accordion key={item.tenCumRap} style={{ direction: "ltr" }} square expanded={expanded === index} onChange={handleChange(index)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <FakeImgTheater nameTheater={item.tenCumRap} imgStyle={classes.imgTheater} />
            <div className={classes.wrapInfo} >
              <TenCumRap tenCumRap={item.tenCumRap} testSize={12} />
              <Address maLichChieu={item.maLichChieu} diaChiAlreadyExist={item.diaChi} />
            </div>
            <div style={{ clear: "both" }}></div>
          </AccordionSummary>
          <AccordionDetails >
            {(expanded === index) && item.danhSachPhim.map((phim) => (
              <ItemPhim key={phim.tenPhim} phim={phim} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
export default memo(MobileLstCumRap)
