import React, { useEffect, useState } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStyles, Accordion, AccordionSummary, AccordionDetails } from './style'
import formatDate from '../../../../utilities/formatDate';
import ItemCumRap from '../../../../components/ItemCumRap';

export default function HeThongRap({ data, isMobile }) {

  const [indexSelected, setindexSelected] = useState(0)
  const [expanded, setExpanded] = React.useState("");
  const [dataLCPDesktop, setDataLCPDesktop] = useState({ arrayDay: [], arrayHeThongRapChieuFilterByDay: [] })
  const classes = useStyles();

  useEffect(() => {
    // tạo mảng chứa tất cả LichChieuPhim, thêm prop tenHeThongRap, tenCumRap, logo
    const arrayAllLichChieuPhimAddProp = data.heThongRapChieu?.reduce((colect1, heThongRapChieuItem) => {
      return [...colect1,
      ...heThongRapChieuItem.cumRapChieu?.reduce((colect2, cumRapChieuItem) => {
        return [...colect2,
        ...cumRapChieuItem.lichChieuPhim?.reduce((colect3, lichChieuPhimItem) => {
          return [...colect3, { ...lichChieuPhimItem, tenHeThongRap: heThongRapChieuItem.tenHeThongRap, tenCumRap: cumRapChieuItem.tenCumRap, logo: heThongRapChieuItem.logo }]
        }, [])
        ]
      }, [])
      ]
    }, [])


    // tạo mảng chứa tất cả ngày
    const arrayDay = [...new Set(arrayAllLichChieuPhimAddProp?.map(item => (item.ngayChieuGioChieu?.slice(0, 10))))].sort()

    // MẢNG CHA, ITEM LÀ CHỨA DATA THEO NGÀY: [ [{},{}], [{},{}], [{},{}] ]
    const arrayHeThongRapChieuFilterByDay = arrayDay.map((day) => {

      // tạo mảng chỉ chứa LichChieuPhim trùng ngày: các item cần thuộc nhiều hethongrap và cum rap, cần lọc lại theo he thong rạp và cumrap
      const arrayLichChieuPhimFilterByDay = arrayAllLichChieuPhimAddProp.filter(item => {
        if (item.ngayChieuGioChieu.slice(0, 10) === day) {
          return true
        }
        return false
      })
      // tạo mảng heThongRap không trùng lặp
      const arrayHeThongRapRemoveDup = arrayLichChieuPhimFilterByDay?.filter((itemIncrease, indexIncrease, arr) => {
        const indexFirstFounded = arr.findIndex((t) => (
          t.tenHeThongRap === itemIncrease.tenHeThongRap
        ))
        return indexIncrease === indexFirstFounded
      })

      // MẢNG CON: item là các HeThongRap: [ {tenHeThongRap: "gd", logo: "ht", cumRapChieu: [{tenCumRap: " ", maLichChieu: "", lichChieuPhim: [{},{}] }] }, {},,, ]
      const arrayHeThongRapItem = arrayHeThongRapRemoveDup.map(item => {
        const tenHeThongRap = item.tenHeThongRap
        const logo = item.logo

        // tạo mảng chỉ chứa item trùng tenHeThongRap
        const arrayLichChieuPhimFilterByHeThongRap = arrayLichChieuPhimFilterByDay?.filter((item, index) => {
          if (item.tenHeThongRap === tenHeThongRap) {
            return true
          }
          return false
        })

        // loại bỏ cumRapChieu trùng lặp
        const arrayCumRapChieuRemoveDup = arrayLichChieuPhimFilterByHeThongRap?.filter((itemIncrease, indexIncrease, arr) => {
          const indexFirstFounded = arr.findIndex((t) => (
            t.tenCumRap === itemIncrease.tenCumRap
          ))
          return indexIncrease === indexFirstFounded
        })

        // tạo mảng cumRapChieu: tenCumRap, maLichChieu, lichChieuPhim: []
        const cumRapChieu = arrayCumRapChieuRemoveDup.map(cumRapChieu => {
          const tenCumRap = cumRapChieu.tenCumRap
          const maLichChieu = cumRapChieu.maLichChieu
          // tạo mảng lichChieuPhim: item lọc theo tenCumRap
          const lichChieuPhim = arrayLichChieuPhimFilterByHeThongRap.filter(lichChieuPhim => lichChieuPhim.tenCumRap === tenCumRap)
          return { tenCumRap, maLichChieu, lichChieuPhim }
        })
        // obj trong mảng con
        return { tenHeThongRap, logo, cumRapChieu }
      })

      return arrayHeThongRapItem // [{tenHeThongRap: "gd", logo: "ht", cumRapChieu: [{tenCumRap: " ", maLichChieu: "", lichChieuPhim: [{},{}]}]}]
    })
    setDataLCPDesktop({ arrayDay, arrayHeThongRapChieuFilterByDay })
  }, [data])

  const handleSelectDay = (i) => {
    setindexSelected(i)
  }
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.listDay}>
        {data?.heThongRapChieu?.length === 0 && <p style={{ padding: 10 }}>Hiện tại chưa có lịch chiếu cho phim này</p>}
        {dataLCPDesktop.arrayDay?.map((day, i) => (
          <div className={classes.dayItem} key={day} style={{ color: i === indexSelected ? "#fb4226" : "#000" }} onClick={() => handleSelectDay(i)}>
            <p>{formatDate(day).dayToday}</p>
            <p style={{ fontSize: i === indexSelected ? "18px" : "16px" }}>{formatDate(day).dDMmYy}</p>
          </div>
        ))}
      </div>
      {dataLCPDesktop.arrayHeThongRapChieuFilterByDay?.map((day, indexDay) => (
        <div key={indexDay} style={{ display: indexDay === indexSelected ? "block" : "none" }}>
          {day.map((heThongRap) => (
            <Accordion key={heThongRap.tenHeThongRap} square expanded={expanded === heThongRap.tenHeThongRap} onChange={handleChange(heThongRap.tenHeThongRap)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <img src={heThongRap.logo} alt="logo" className={classes.logo} />
                <p className={classes.nameTheater}>{heThongRap.tenHeThongRap}</p>
              </AccordionSummary>
              <AccordionDetails >
                {heThongRap.cumRapChieu.map((item) => (
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

{/* [{tenHeThongRap: "gd", logo: "ht", cumRapChieu: [{tenCumRap: " ", maLichChieu: "", lichChieuPhim: [{},{}]}]}] */ }
