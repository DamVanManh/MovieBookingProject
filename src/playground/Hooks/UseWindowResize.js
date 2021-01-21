import { useState, useEffect } from 'react';

//custom lấy chiều dài và rộng của screen
export default function UseWindowResize() {
  const [windowSize, setWindowSize] = useState({width: 0, height: 0});

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  },[])
  const handleResize = evt => {
    // vị trí trỏ chuột: window.ClientWidth, window.ClientHeight
    
    const { innerWidth, innerHeight,  } = window;
    setWindowSize({
      width: innerWidth, height: innerHeight
    })
  }
  return [windowSize.width,windowSize.height];
}
