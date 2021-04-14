import React from 'react';

import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SeatIcon from '@material-ui/icons/CallToActionRounded';
import PaymentIcon from '@material-ui/icons/Payment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useSelector, useDispatch } from 'react-redux';

import { useStyles, ColorlibConnector } from './style';
import { FAKE_AVATAR } from '../../../../constants/config';

export default function Stepcheckout() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const { activeStep } = useSelector(state => state.bookTicketReducer);
  const { currentUser } = useSelector(state => state.authReducer);
  const steps = ['CHỌN GHẾ', 'THANH TOÁN', 'KẾT QUẢ ĐẶT VÉ'];

  function StepIcon(props) {
    const { active, completed } = props;
    const icons = {
      1: <SeatIcon />,
      2: <PaymentIcon />,
      3: <CheckCircleIcon />,
    };
    return (
      <div
        className={clsx(classes.stepIcon, {
          [classes.stepIconActive]: active,
          [classes.stepIconCompleted]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} className={classes.stepper} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel classes={{ label: classes.label }} StepIconComponent={StepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.account}>
        <img src={FAKE_AVATAR} alt="avatar" className={classes.avatar} />
        <p className={classes.hoTen}>{currentUser.hoTen}</p>
      </div>
    </div>
  );
}

// ColorlibConnector: đường gạch ngang nối giữa các bước
// activeStep: xác định step hiện tại
// StepIconComponent: node làm icon đại diện, mặc định nhận vào boolean active, completed, error và number: icon để css tương ứng

