import React from 'react';

import LstPhim from '../LstPhim'
import useStyles from './style'
import { underLine, customScrollbar } from '../../../../styles/materialUi'
import FakeImgTheater from '../../../../components/FakeImgTheater/fakeImgTheater';

export default function LstCumRap(props) {
  const { lstCumRap, isMobileTheater, color } = props;
  const [valueCumRap, setValueCumRap] = React.useState(0);
  const classes = useStyles({ underLine, customScrollbar, isMobileTheater, color });
  const handleChangeCumRap = (e) => {
    setValueCumRap(Number(e.currentTarget.getAttribute("index")));
  };

  return (
    <>
      <div className={classes.lstCumRap}>{/* div root danh sách cụm rạp */}
        {lstCumRap.map((cumRap, index) =>
        (
          <div className={classes.cumRap} index={index} onClick={(e,) => handleChangeCumRap(e)} key={cumRap.maCumRap} style={{ opacity: valueCumRap === index ? '1' : '.5' }}>
            <FakeImgTheater nameTheater={cumRap.tenCumRap} imgStyle={classes.cumRap__img} />
            <div className={classes.cumRap__info}>
              <p className={classes['cumRap__name--first']}>{cumRap.tenCumRap.split("-")[0]}<span className={classes['cumRap__name--second']}>-{cumRap.tenCumRap.split("-")[1]}</span></p>
              <p className={classes.cumRap__address}>{cumRap.diaChi}</p>
            </div>
          </div>
        )
        )}
      </div>
      {lstCumRap.map((cumRap, index) => (
        valueCumRap === index && <LstPhim lstPhim={cumRap.danhSachPhim} key={cumRap.maCumRap} />
      ))}
    </>
  );
}


