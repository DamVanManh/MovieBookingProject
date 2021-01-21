import React, { useState, useMemo } from 'react'

export default function DemoUseMemo() {
  // VÍ DỤ 1
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // // count2 thay đổi làm render lại thì double cũng được tính toán lại gây giảm hiệu năng
  // const double = count1 * 2;

  // // muốn phép tính double chỉ được tính lại khi count1 thay đổi thì dùng useMemo
  // // bản chất sẽ so sánh count1 cũ và mới và gán lại giá trị nên với phép tính đơn giản thì không nên dùng useMemo
  // const doubleMemo = useMemo(() => {
  //   return count1 * 2;
  // }, [count1])

  // return (
  //   <div>
      // <h3>count 1: {count1}</h3>
      // <h3>Double count 1: {double}</h3>
      // <button onClick={() => setCount1(count1 + 1)}>Cộng count 1</button>

  //     <br/>

  //     <h3>count 2: {count2}</h3>
  //     <button onClick={() => setCount2(count2 + 1)}>Cộng count 2</button>
  //   </div>
  // )

  // VÍ DỤ 2
  const [selectedUsed, setSelectedUser] = useState({});
  const [userList, setUserList] = useState([
    { username: 'nguyên', age: 27 }, { username: 'mạnh', age: 27 }, { username: 'dan', age: 27 }
  ]);
  const [search, setSearch] = useState('')

  const handleSearch = evt => {
    setSearch(evt.target.value)
  }

  const handleSelectedUsed = user => {
    setSelectedUser(user)
  }
  
  // const userListNew = userList.filter(function (item) { // dòng này luôn bị chạy lại 
  //   return item.username.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  // })

  const userListNew = useMemo(() => {
    console.log('tính toán lại userlist')
    return userList.filter((item) => { // chỉ bị chạy lại khi 
      return item.username.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
  }, [userList, search]) 

  return (
    <div className='container'>
      {console.log('selectedUsed,userList,search: ',selectedUsed,userList,search)}
      <div>
        search: <input type='text' className='form-control' onChange={handleSearch} />
        <table class="table">
          <thead>
            <tr>
              <th>username</th>
              <th>age</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {userListNew.map((item,index) => {
              return (
                <tr key={index}>
                  <td scope="row">{item.username}</td>
                  <td>{item.age}</td>
                  <td><button className='btn btn-success' onClick={() => handleSelectedUsed(item)}>select user</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <h1>SelectedUser: {selectedUsed.username}</h1>
      </div>
    </div>
  )
}
