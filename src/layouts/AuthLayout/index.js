import React from 'react'

export default function AuthLayout(props) {
  const link = 'https://tix.vn/app/assets/img/icons/bg2.jpg'
  const background = {
    width: '100vw',
    height: '100vh',
    paddingTop: '60px',
    backgroundImage: 'url(' + link + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
  const bgColor = {
    backgroundImage: "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
    minWidth: 600,
    maxHeight: 700,
  }

  return (
    <div style={background}>
        <div style={bgColor}>
        {props.children}
        </div>
        
    </div>
  )
}
