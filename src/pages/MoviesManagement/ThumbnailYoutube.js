import React from 'react'

import getVideoId from '../../utilities/getVideoIdFromUrlyoutube';
import BtnPlay from '../../components/BtnPlay';
import { useStyles } from './styles';

export default function ThumbnailYoutube({ urlYoutube }) {
  const classes = useStyles();
  return (
    <div className={classes.rootTrailer}>
      <img src={`https://img.youtube.com/vi/${getVideoId(urlYoutube)}/mqdefault.jpg`} alt="trailer" className={classes.imgTrailer} />
      <BtnPlay width={40} height={40} urlYoutube={urlYoutube} />
    </div>
  )
}
