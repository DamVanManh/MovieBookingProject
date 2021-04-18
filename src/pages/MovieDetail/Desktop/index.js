import React from 'react'

import useStyles from './style';

export default function Desktop() {
  const bannerImg = "http://movie0706.cybersoft.edu.vn/hinhanh/kieu_gp09.png"
  const classes = useStyles({ bannerImg })

  return (
    <div>
      <div className={classes.top}>
        <div className={classes.bannerBlur}>

        </div>
        <div>gradiant</div>
        <div>topInfo</div>
      </div>
      <div>bottom</div>
    </div>
  )
}
