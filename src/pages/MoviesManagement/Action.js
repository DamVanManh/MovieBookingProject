import React from 'react'

import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip';

import UseApiCheckIsMaPhimSetShowtime from '../../utilities/useApiCheckIsMaPhimSetShowtime';

export default function ButtonDelete({ onDeleted, phimItem, onEdit }) {
  const isMovieSetShowtime = UseApiCheckIsMaPhimSetShowtime(phimItem.maPhim)
  return (
    <>
      <Tooltip title={isMovieSetShowtime ? "Không thể xóa" : "Xóa"}>
        <IconButton color="primary" style={{ color: isMovieSetShowtime ? "#00000042" : "#f50057" }} onClick={() => onDeleted(phimItem.maPhim)} >
          <DeleteForeverIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Chỉnh sửa">
        <IconButton color="primary" style={{ color: "#3f51b5" }} onClick={() => onEdit(phimItem)} >
          <EditIcon />
        </IconButton>
      </Tooltip>
    </>

  )
}
