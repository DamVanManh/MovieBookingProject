import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";

import LstCumRap from "./LstCumRap";
import useStyles from "./style";
import { underLine } from "../../../styles/materialUi";
import { colorTheater } from "../../../constants/theaterData";
import Seperate from "../../../components/Seperate";
import MobileLstCumrap from "./MobileLstCumrap";

export default function HeThongRap() {
  const theme = useTheme();
  const isMobileTheater = useMediaQuery(theme.breakpoints.down("sm"));
  const { theaterList, errorTheaterList } = useSelector(
    (state) => state.theaterReducer
  );
  const [valueHeThongRap, setValueHeThongRap] = React.useState(0);
  const classes = useStyles({ isMobileTheater, underLine });

  if (errorTheaterList) {
    return <div>{errorTheaterList}</div>;
  }
  return (
    <div id="cumrap">
      <Seperate />
      <div className={classes.theater}>
        <Tabs
          variant={isMobileTheater ? "scrollable" : "standard"}
          scrollButtons="on"
          orientation={isMobileTheater ? "horizontal" : "vertical"}
          value={valueHeThongRap}
          classes={{ indicator: classes.tabs__indicator, root: classes.taps }}
        >
          {theaterList.map((theater, index) => (
            <Tab
              onClick={() => setValueHeThongRap(index)}
              disableRipple
              classes={{
                root: classes.tap,
                textColorInherit: classes.textColorInherit,
              }}
              key={theater.maHeThongRap}
              label={
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={theater.logo}
                  alt="theaterLogo"
                />
              }
            />
          ))}
        </Tabs>
        {theaterList.map((theater, index2) => (
          <div
            hidden={valueHeThongRap !== index2}
            key={theater.maHeThongRap}
            className={classes.cumRap}
          >
            {isMobileTheater ? (
              <MobileLstCumrap lstCumRap={theater.lstCumRap} />
            ) : (
              <LstCumRap
                lstCumRap={theater.lstCumRap}
                color={
                  colorTheater[
                    theater.lstCumRap[0].tenCumRap.slice(0, 3).toUpperCase()
                  ]
                }
                maHeThongRap={theater.maHeThongRap}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
