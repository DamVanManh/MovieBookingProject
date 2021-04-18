import React from 'react'

import useStyles from './style';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { DISPLAY_MOBILE_HOMEPAGE } from '../../constants/config'
import Mobile from './Mobile';
import Desktop from './Desktop';

export default function Index() {
  const isMobile = useMediaQuery(DISPLAY_MOBILE_HOMEPAGE)
  const classes = useStyles()
  return (
    <>
      {
        isMobile ? <Mobile /> : <Desktop />
      }
    </>
  )
}
