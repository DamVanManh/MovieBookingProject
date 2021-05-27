import React from 'react'

import UseApiCheckIsUserBooking from '../../utilities/useApiCheckIsUserBooking';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip';

export default function ButtonDelete({ onDeleted, taiKhoan }) {
  const isUserBooking = UseApiCheckIsUserBooking(taiKhoan)
  return (
    <Tooltip title={isUserBooking ? "Không thể xóa" : "Xóa"}>
      <IconButton color="primary" style={{ color: isUserBooking ? "#00000042" : "#f50057" }} onClick={() => onDeleted(taiKhoan)} >
        <DeleteForeverIcon />
      </IconButton>
    </Tooltip>
  )
}
