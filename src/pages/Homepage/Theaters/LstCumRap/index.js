import React, { useMemo } from 'react';

import cumRapImgRandom from '../../../../constants/theaterImagesData'
import LstPhim from '../LstPhim'
import useStyles from './style'
import { underLine, customScrollbar } from '../../../../styles/materialUi'

export default function LstCumRap(props) {
  const { lstCumRap, isMobileTheater, color, maHeThongRap } = props;
  const [valueCumRap, setValueCumRap] = React.useState(0);
  const classes = useStyles({ underLine, customScrollbar, isMobileTheater, color });
  const handleChangeCumRap = (e) => {
    setValueCumRap(e.currentTarget.getAttribute("index"));
  };

  const imgLst = useMemo(() => { // dùng useMemo để hình ảnh cụm rạp không bị render lại khi click chọn cụm rạp khác
    function createImgLst() {
      let imgLst = []
      for (let i = 0; i < lstCumRap.length; i++) {
        imgLst.push(cumRapImgRandom())
      }
      return imgLst
    }
    return createImgLst()
  }, [maHeThongRap])

  return (
    <>
      <div className={classes.lstCumRap}>{/* div root danh sách cụm rạp */}
        {lstCumRap.map((cumRap, index) =>
        (
          <div className={classes.cumRap} index={index} onClick={(e,) => handleChangeCumRap(e)} key={cumRap.maCumRap} style={{ opacity: valueCumRap == index ? '1' : '.5' }}>
            <img className={classes.cumRap__img} src={imgLst[index]} />
            <div className={classes.cumRap__info}>
              <p className={classes['cumRap__name--first']}>{cumRap.tenCumRap.split("-")[0]}<span className={classes['cumRap__name--second']}>-{cumRap.tenCumRap.split("-")[1]}</span></p>
              <p className={classes.cumRap__address}>{cumRap.diaChi}</p>
            </div>
          </div>
        )
        )}
      </div>
      {lstCumRap.map((cumRap, index) => (
        valueCumRap == index && <LstPhim lstPhim={cumRap.danhSachPhim} key={cumRap.maCumRap} />
      ))}
    </>
  );
}


