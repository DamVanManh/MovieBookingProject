import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

// isLazy chuyển từ true sang false và ngược lại trong vài ms dẫn đến component loadding hiểu lầm là đã completed loadding và chuyển sang hiệu ứng fadeout
// Hook này có tắc dụng nếu isLazy chuyển đổi từ true > false thì phải cách lần chuyển trước 100ms mới cho phép chuyển
export default function UseHandleVibrateLazy() {
  const { isLazy } = useSelector((state) => state.lazyReducer);
  const clear = useRef(null);
  const [isLazyout, setisLazyout] = useState(false);
  useEffect(() => {
    if (isLazy) {
      setisLazyout(true);
      clearTimeout(clear.current);
    } else {
      clear.current = setTimeout(() => {
        setisLazyout(false); // chờ 100ms sau mới chuyển sang false, nhưng nếu chưa tới 100ms mà isLazy chuyển thành true thì hủy set false
      }, 100);
    }
  }, [isLazy]);
  return isLazyout;
}
