import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { LOADING_LAZY_MOUNT, LOADING_LAZY_UNMOUNT } from '../../reducers/constants/Lazy';
export default function Index() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOADING_LAZY_MOUNT })
    return () => {
      dispatch({ type: LOADING_LAZY_UNMOUNT })
    }
  }, [])
  return <div></div>
}
