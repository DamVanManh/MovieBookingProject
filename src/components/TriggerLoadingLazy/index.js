import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
export default function Index() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOADING_LAZY_MOUNT" })
    return () => {
      dispatch({ type: "LOADING_LAZY_UNMOUNT" })
    }
  }, [])
  return <div></div>
}
