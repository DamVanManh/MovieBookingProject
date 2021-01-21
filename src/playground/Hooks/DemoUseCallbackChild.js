import React, { memo } from 'react'

// ví dụ 1
// export default function DemoUseCallbackChild(props) {
//   console.log('hiển thị props',props)

//   const handleChange = (evt) => {
//     props.onChangeMessage(evt.target.value)
//   }
//   return (
//     <div>
//       <h1>DemoUseCallbackChild</h1>
//       <input type="text" className='form-control' onChange={(item) => handleChange(item)}/>
//     </div>
//   )
// }


// ví dụ 2,3.... sử dụng memo: khi nhấn button thì DemoUseCallbackChild không bị render lại nữa 
// memo giống Purecomponent sẽ tự so sánh props cũ và props mới nếu khác sẽ reder lại component
// memo giống Purecomponent chỉ so sánh các biến primitive: number, string... không thể so sánh [] {} function
// nếu truyền String xuống toán tử 'a' === 'b' nhận thấy sự khác biệt
// nếu truyền [] xuống toán tử [] === [fdfg] không nhận thấy sự khác biệt do trỏ chung địa chi vùng nhớ
// nếu truyền [] xuống toán tử [] === [...fdfg] nhận thấy sự khác biệt do không trỏ chung địa chi vùng nhớ
// nếu truyền function xuống toán tử function === function không nhận thấy sự khác biệt do trỏ chung địa chi vùng nhớ > không render lại
// purecomponent so sánh cả state và props, còn memo chỉ so sánh props
function DemoUseCallbackChild(props) {
  console.log('hiển thị props',props)

  const handleChange = (evt) => {
    props.onChangeMessage(evt.target.value)
  }
  return (
    <div>
      <h1>DemoUseCallbackChild</h1>
      <input type="text" className='form-control' onChange={(item) => handleChange(item)}/>
      {/* <input type="text" className='form-control' /> */}
    </div>
  )
}

export default memo(DemoUseCallbackChild); // memo là HOC