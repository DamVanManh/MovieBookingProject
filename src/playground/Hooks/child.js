import React,{useState, useEffect } from 'react';

export default function Child() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Child Mounted");
    return () =>{ // nếu trong useEffect() return về một function A, thì function A hoạt động như componentWillUnmount
      console.log("Child unMounted");
    }
  },[])// tham số thứ 2 có thể để trống hoặc [] hoặc [count] thì chức năng componentWillUnmount vẫn hoạt động bình thường
  return (
    <div>
      Child component
    </div>
  )
}
