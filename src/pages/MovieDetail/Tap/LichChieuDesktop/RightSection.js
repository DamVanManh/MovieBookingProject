import React, { useState, useMemo } from "react";

import useStyles from "./style";
import formatDate from "../../../../utilities/formatDate";
import ItemCumRap from "../../../../components/ItemCumRap";
import { selectDesktopData } from "../../../../reducers/selector/MovieDetail";

export default function RightSection({ currentSelectedHeThongRapChieu }) {
  const [indexSelected, setindexSelected] = useState(0);
  const desktopData = useMemo(
    () => selectDesktopData(currentSelectedHeThongRapChieu),
    [currentSelectedHeThongRapChieu]
  );
  const classes = useStyles();

  const handleSelectDay = (i) => {
    setindexSelected(i);
  };

  return (
    <div>
      <div className={classes.listDay}>
        {desktopData?.arrayDay?.map((day, i) => (
          <div
            className={classes.dayItem}
            key={day}
            style={{ color: i === indexSelected ? "#fb4226" : "#000" }}
            onClick={() => handleSelectDay(i)}
          >
            <p>{formatDate(day).dayToday}</p>
            <p
              style={{
                fontSize: i === indexSelected ? "18px" : "16px",
                transition: "all .2s",
              }}
            >
              {formatDate(day).YyMmDd}
            </p>
          </div>
        ))}
      </div>
      {desktopData?.allArrayCumRapChieuFilterByDay?.map(
        (arrayCumRapChieuFilterByDay, i) => (
          <div
            style={{ display: indexSelected === i ? "block" : "none" }}
            key={i}
          >
            {arrayCumRapChieuFilterByDay.map((item) => (
              <ItemCumRap
                key={item.tenCumRap}
                tenCumRap={item.tenCumRap}
                maLichChieu={item.maLichChieu}
                lichChieuPhim={item.lichChieuPhim}
                defaultExpanded={true}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
}
