import React from 'react';
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import Login from '../../pages/Login/';
export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const param = useParams();
  console.log('headerLLL', history, location, param)
  return (
    <div className='w-100 d-flex justify-content-between'>
      <div>movie</div>
      <ul>
        <li>
          <Link to='dangnhap' >login{Login}</Link>
        </li>
      </ul>
      
    </div>
  )
}


