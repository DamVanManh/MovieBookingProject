
// // nơi set up routing:
// import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
// import Homepage from './pages/Homepage';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import MainLayout from './layouts/MainLayout';
// import AuthLayout from './layouts/AuthLayout';
// import CourseDetail from './pages/CourseDetail';
// import CourseList from './pages/CourseList';
// import PageNotFound from "./pages/PageNotFound";
// import AdminLayout from './layouts/AdminLayout';
// import UsersManagement from './pages/UsersManagement';
// import CoursesManagement from './pages/CoursesManagement';

// // Guard
// import AdminRoute from "./guards/AdminRoute";

// function App() {
//   return (
//     <BrowserRouter >
//       <Switch>
//         {/* làm sao để khi truy cập /login hiển thị <AuthLayout>Login</AuthLayout> hoặc /register hiển thị <AuthLayout>Register</AuthLayout>: tái sử dụng AuthLayout */}
//         {/* cách 1: vào MainLayout và AuthLayout nhét {this.props.children} vào giữa JSX */}
//         {/* <Route exact path="/" render={(props) => (
//           <MainLayout {...props}>
//             <Homepage {...props}/>
//           </MainLayout >
//         )}/>
//         <Route exact path="/login" render={(props) => (
//           <AuthLayout {...props}>
//             <Login {...props}/>
//           </AuthLayout >
//         )}/>
//         <Route exact path="/register" render={(props) => (
//           <AuthLayout {...props}>
//             <Register {...props}/>
//           </AuthLayout >
//         )}/> */}

//         {/* cách 2: dùng root lồng nhau: */}
//         {/* bi lỗi render ra 2 component */}
//         {/* <Route path="/" component={MainLayout}>
//           <MainLayout >
//             <Route path="/" component={Homepage} />
//             <Route path="/news" component={Homepage} />
//           </MainLayout>
//         </Route> */}

//         {/* lỗi không phân biệt được bên dưới */}
//         {/* <Route exact path="/" component={MainLayout}>
//           <MainLayout >
//             <Switch >
              
//               <Route exact path="/" component={Homepage} />
//               <Route exact path="/news" component={Homepage} />
//             </Switch>
//           </MainLayout>
//         </Route>

//         <Route exact path={["/login","/register"]}>
//           <AuthLayout >
//             <Switch >
//               <Route exact path="/login" component={Login}/>
//               <Route exact path="/register" component={Register}/>
//             </Switch>
//           </AuthLayout>
//         </Route> */}

//         <Route exact path={["/", "/courses/:category", "/course/:courseId"]}>
//           <MainLayout >
//             <Switch >
//               <Route exact path="/" component={Homepage} />
//               <Route exact path="/courses/:category" component={CourseList} />
//               <Route exact path="/course/:courseId" component={CourseDetail} />
//             </Switch>
//           </MainLayout>
//         </Route>

//         <Route exact path={["/admin/users/"]}>
//           <AdminLayout >
//             <Switch >
//               {/* <Route exact path="/admin/users" component={UsersManagement} /> */}

//               {/* cách 1: chỉ tài khoản là GV mới được vào UsersManagement */}
//               {/* <Route exact path="/admin/users" render={(props) => {
//                 const maLoaiNguoiDung = 'GV';
//                 if (maLoaiNguoiDung !== 'GV') {
//                   return <Redirect to='/' />
//                 }
//                 return <UsersManagement {...props} />
//               }} /> */}
              
//               {/* cách 2 khi phức tạp lên: private router */}
//               <AdminRoute exact path='/admin/users' component={UsersManagement} />
//               {/* AdminRoute là một function, nhận vào props từ App.js và reducer, dùng reducer để xác định cần return về component nào hay đá sang path khác */}

//               {/* giả sử bạn có thêm component UsersTALK và muốn chỉ có tài khoản GV mới vào được thì chỉ cần gọi AdminRoute ra dùng lại  */}
//               {/* <AdminRoute exact path='/admin/users/talk' component={UsersTALK} /> */}
              
//             </Switch>
//           </AdminLayout>
//         </Route>

//         <Route exact path={["/login", "/register"]}>
//           <AuthLayout >
//             <Switch >
//               <Route exact path="/login" component={Login} />
//               <Route exact path="/register" component={Register} />
//             </Switch>
//           </AuthLayout>
//         </Route>

//         {/* demo Redirect from: dùng để chuyển từ đường dẫn người dùng nhập sai /auth sang một component đã có path="/login" */}
//         {/* <Route exact path={["/login","/register", "/auth"]}>
//           <AuthLayout >
//           // <Redirect from="/auth" to="/login" />
//             <Switch >
//               <Redirect from="/auth" to="/login" />
//               <Route exact path="/login" component={Login}/>
//               <Route exact path="/register" component={Register}/>
//             </Switch>
//           </AuthLayout>
//         </Route> */}

//         {/* khi người dùng nhập sai địa chỉ : http://localhost:3002/fdsf */}
//         {/* cách 1 Redirect: dưới cùng root*/}
//         <Redirect to="/" />
//         {/* cách 2: để dưới cùng root*/}
//         {/* <Route component={PageNotFound}/> */}
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import MovieDetail from './pages/MovieDetail';
import BookTickets from './pages/Bookticket';
import AdminLayout from './layouts/AdminLayout';
import UsersManagement from './pages/UsersManagement';
import MoviesManagement from './pages/MoviesManagement';

// Guard
import AdminRoute from "./guards/AdminRoute";

function App() {
  return (
    <BrowserRouter >
      <Switch>

        {/* component hiển thị bên trong route này luôn có giao diện MainLayout( header và footer) */}
        <Route exact path={["/", "/phim/:movieId", "/datve/:movieId"]}>
          <MainLayout >
            <Switch >
              <Route exact path="/" component={Homepage} />
              <Route exact path="/phim/:movieId" component={MovieDetail} />
              <Route exact path="/datve/:movieId" component={BookTickets} />
            </Switch>
          </MainLayout>
        </Route>

        {/* component trong này chỉ cho phép truy cập khi tài khoản là admin */}
        <Route exact path={["/admin/users","/admin/movies"]}>
          <AdminLayout >
            <Switch >
              <AdminRoute exact path='/admin/users' component={UsersManagement} />
              <AdminRoute exact path='/admin/movies' component={MoviesManagement} />
            </Switch>
          </AdminLayout>
        </Route>

        {/* component hiển thị bên trong route này luôn có giao diện AuthLayout */}
        <Route exact path={["/dangnhap", "/dangky"]}>
          <AuthLayout >
            <Switch >
              <Route exact path="/dangnhap" component={Login} />
              <Route exact path="/dangky" component={Register} />
            </Switch>
          </AuthLayout>
        </Route>

        {/* khi người dùng nhập sai địa chỉ ví dụ localhost:3002/fdsf thì tự động chuyển sang trang home*/}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
