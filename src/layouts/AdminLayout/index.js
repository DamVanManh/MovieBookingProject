import React from 'react'

export default function AdminLayout(props) {
  console.log(props)
  return (
    <div>
      <h1>Admin layout</h1>
      {props.children}
    </div>
  )
}

