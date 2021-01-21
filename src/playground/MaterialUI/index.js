import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';// để override class
// import './style.css'
import './style.scss'


// override lại style mặc định của material
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
export default function MaterialUI() {
  const classes = useStyles();
  return (
    <div>
      {/* sử dụng tùy chọn sãn có */}
      <Button variant="contained" color='primary'>material </Button >

      {/* override bằng Hook API */}
      <Button variant="contained" className={classes.root}>makeStyles </Button >

      {/* override bằng css không được khuyến khích */}
      {/* <Button variant="contained" className='MuiButton-label'>css </Button > */}

      {/* sử dụng scss */}
      <button className='demo'>scss</button>
      
    </div>
  )
}
