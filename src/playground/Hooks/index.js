import React, { useState, useEffect } from 'react';
import Child from "./child";
import UseAPICourses from "./UseAPICourses";
import UseWindowResize from "./UseWindowResize";

export default function Hooks() {
  // useState và useEffect phải viết trước function và return > ngược lại sẽ báo lỗi
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState({ username: '', email: '' });

  // dùng custom hook
  const [courseList] = UseAPICourses();
  const [width, height] = UseWindowResize(); // mỗi khi width hoặc height thay đổi thì component Hooks sẽ render lại

  useEffect(() => {
    console.log("courseList, width, height: ", courseList, width, height);
  })

  useEffect(() => { // giống componentDidMount và componentDidUpdate nếu không truyền vào
    console.log("không truyền", count); // ít dùng vì lúc nào nó cũng chạy giảm hiệu năng
  })

  useEffect(() => { // nếu tham số thứ 2 là array rỗng thì <=> componentDidMount, chỉ chạy một lần
    console.log("truyền [] rỗng", count);
  }, [])

  useEffect(() => { // nếu tham số thứ 2 là array chứa biến thì <=> componentDidMount + khi biến thay đổi thì sẽ chạy useEffect
    console.log("truyền [count]", count);
  }, [count])

  const handleChange = evt => {
    const { name, value } = evt.target;
    // setForm({ // biến form thành obj một key
    //   [name]: value,
    // })
    // cách 1
    // setForm({ ...form, // copy lại
    //   [name]: value, // thay đổi 1 giá trị bên trong
    // })
    // nhược điểm cách một là 
    // setForm() //ccount = 2
    // setForm()//count = count+1 // không đảm bảo giá trị là 2 để cộng thêm

    // cách 2: đảm bảo currentForm luôn là giá trị mới nhất dù bất đồng bộ
    // setForm((currentForm) => {
    //   return {
    //     ...currentForm,
    //     [name]: value,
    //   }
    // })
    setForm((currentForm) => ({ ...currentForm, [name]: value, }))

    // console.log("courseList, width, height: ",courseList, width, height)
  }

  return (

    <div>
      {/* {width > 768 ? <Destop /> : <Mobile />} */}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>tăng</button>
      <button onClick={() => setCount(count - 1)}>giảm</button>
      <br />
      <p className={isActive ? 'bg-primary' : 'bg-secondary'}>Hello</p>
      <button onClick={() => setIsActive(!isActive)}>toggle</button>

      {isActive ? <Child /> : null}
      <br />
      <div>
        <label>Username</label>
        <input type="text"
          value={form.username}
          onChange={handleChange}
          name='username' />
      </div>
      <div>
        <label>Email</label>
        <input type="text"
          value={form.email}
          onChange={handleChange}
          name='email' />
      </div>

    </div>
  )
}

