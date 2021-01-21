import React, { useState, useCallback } from 'react';
import DemoUseCallbackChild from "./DemoUseCallbackChild";

// Demo memo giúp chỉ khi nào message thay đổi thì mới render lại component con
export default function DemoUseCallback() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [arrayState, setArrayState] = useState([]);
  const array = [];

  // // ví dụ 5: component con render lại
  // nếu nhấn button thì DemoUseCallback render lại và khởi tạo lại handleChangeMessage, memo so sánh function handleChangeMessage cũ và mới dựa trên địa chỉ vùng nhớ nên thấy sự khác biệt và render lại con
  // nếu điền vào ô input thì handleChangeMessage thực thi làm render lại component cha và cũng khởi tạo mới function handleChangeMessage.... > render lại con
  // const handleChangeMessage = value => {
  //   setMessage(value);
  // }

  // // ví dụ 6: component con render lại
  // useCallback không có tham số thứ 2 hoặc tham số thứ 2 là undefined thì handleChangeMessage luôn được khởi tạo mới khi component cha render lại
  // const handleChangeMessage = useCallback(value => { // useCallback phải sử dụng cho function không hỗ trợ {} với []
  //   console.log('khởi tạo function')
  //   setMessage(value);
  // });

  // // ví dụ 7: component con không render lại
  // useCallback với tham số thứ 2 là [] chỉ cho handleChangeMessage được khởi tạo một lần duy nhất dù component cha có render lại
  // const handleChangeMessage = useCallback(value => { // useCallback phải sử dụng cho function không hỗ trợ {} với []
  //   setMessage(value);
  // }, []);

  // // ví dụ 8: component con render lại khi nhấn button, component con không render lại khi thay đổi ô input
  // useCallback với tham số thứ 2 là [count] sẽ cho phép khởi tạo lại handleChangeMessage khi count thay đổi
  const handleChangeMessage = useCallback(value => { // useCallback phải sử dụng cho function không hỗ trợ {} với []
    setMessage(value);
  }, [count]);

  // ví dụ 9: useCallback lưu trữ function với biến count=0 và không khởi tại lại nên biến count luôn có giá trị là 0
  // const handleChangeMessage = useCallback(value => {
  //   setMessage(value + count); // số nằm sau message luôn là số 0
  // }, []);
  
  // ví dụ 10: khi nhấn button thì handleChangeMessage được cập nhật với biến count mới
  // const handleChangeMessage = useCallback(value => {
  //   setMessage(value + count); // số nằm sau message thay đổi nếu nhấn button
  // }, [count]);


  return (
    <div>
      {console.log('render cha')}
      <h1>Demo useCallback</h1>
      <p>Message: {message}</p>
      {/* Ví Dụ 1, 2: khi nhấn button thì DemoUseCallbackChild được render lại và props message được hiển thị ra màn hình */}
      {/* vì button chỉ tăng biến count không làm thay đổi biến message truyền xuống DemoUseCallbackChild nên ta không muốn render lại DemoUseCallbackChild trong trường hợp này */}
      {/* <DemoUseCallbackChild message={message} /> */}

      {/* ví dụ 3: component con không render lại vì arrayState được khởi tạo bằng useState sẽ không khởi tạo lại lần nữa khi render lại component cha nên memo so sánh 2 địa chỉ vùng
      nhớ giống nhau => không thấy khác biệt, không render lại*/}
      {/* <DemoUseCallbackChild onChangeMessage={arrayState} /> */}

      {/* ví dụ 4: component con render lại vì array được khởi tạo lại khi render lại component cha nên memo so sánh 2 địa chỉ vùng nhớ khác nhau > thấy khác biệt > render lại*/}
      {/* <DemoUseCallbackChild onChangeMessage={array} /> */}

      {/* ví dụ 5:
              truyền function handleChangeMessage xuống component con
              khi component con thay đổi ô input thì chạy handleChangeMessage với giá trị truyền vào từ con
              thay đổi lại giá trị massage trong component cha*/}
      <DemoUseCallbackChild onChangeMessage={handleChangeMessage} />

      {/* <DemoUseCallbackChild message={message} onChangeMessage={handleChangeMessage}/> */}
      {/* // function không so sánh được */}
      {/* <DemoUseCallbackChild onChangeMessage={handleChangeMessage} /> */}
      <br />
      <br />
      <p>{count}</p>
      <button onClick={() => { setCount(count + 1) }}>tăng count</button>
    </div>
  )
}
