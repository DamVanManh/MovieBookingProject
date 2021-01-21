import React from 'react'

export default function AuthLayout(props) {
  return (
    <div>
      <h1>AuthLayout</h1>
        {/* phải có dòng này thì mới nhận được component được truyền vào từ App */}
        {props.children}
    </div>
  )
}
