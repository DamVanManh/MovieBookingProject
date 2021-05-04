import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import ModalTrailer from './components/ModalTrailer';

// page
import Homepage from './pages/Homepage';
import MovieDetail from './pages/MovieDetail';
import BookTickets from './pages/Bookticket';
import UsersManagement from './pages/UsersManagement';
import MoviesManagement from './pages/MoviesManagement';
import CreateShowtime from './pages/CreateShowtime';
import Login from './pages/Login';
import Register from './pages/Register';
//layout
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';
// Guard
import AdminRoute from "./guards/AdminRoute";
import CheckoutRoute from "./guards/CheckoutRoute";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 678,
      md: 736,
      lg: 768,
      xl: 992
    }
  }
});

function App() {
  return (
    <BrowserRouter >
      <MuiThemeProvider theme={theme}>
        <Switch>

          {/* component hiển thị bên trong route này luôn có giao diện MainLayout( header và footer) */}
          <Route exact path={["/", "/phim/:maPhim"]}>
            <Switch >
              <MainLayout >
                <Route exact path="/" component={Homepage} />
                <Route exact path="/phim/:maPhim" component={MovieDetail} />
              </MainLayout>
            </Switch>
          </Route>

          <CheckoutRoute exact path="/datve/:maLichChieu" component={BookTickets} />

          {/* component trong này chỉ cho phép truy cập khi tài khoản là admin */}
          <Route exact path={["/admin/users", "/admin/movies", "/admin/showtimes"]}>
            <AdminLayout >
              <Switch >
                <AdminRoute exact path='/admin/users' component={UsersManagement} />
                <AdminRoute exact path='/admin/movies' component={MoviesManagement} />
                <AdminRoute exact path='/admin/showtimes' component={CreateShowtime} />
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
        <ModalTrailer />
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;

// import { useSelector } from 'react-redux';
// const { loadingMovieList } = useSelector((state) => state.movieReducer)
// const { loadingTheaterList } = useSelector((state) => state.theaterReducer)
// const { loadingGetListSeat } = useSelector((state) => state.bookTicketReducer)

// import { Suspense, lazy } from 'react';
// import Loading from './components/Loading';
// import Homepage from './pages/Homepage';
// import MovieDetail from './pages/MovieDetail';
// import BookTickets from './pages/Bookticket';
// import UsersManagement from './pages/UsersManagement';
// import MoviesManagement from './pages/MoviesManagement';
// import Login from './pages/Login';
// import Register from './pages/Register';

// import MainLayout from './layouts/MainLayout';
// import AuthLayout from './layouts/AuthLayout';
// import AdminLayout from './layouts/AdminLayout';

// Guard
// import AdminRoute from "./guards/AdminRoute";
// import CheckoutRoute from "./guards/CheckoutRoute";


// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//       </Switch>
//     </Suspense>
//   </Router>
// );



// layout
// const MainLayout = lazy(() => import('./layouts/MainLayout'));
// const AuthLayout = lazy(() => import('./layouts/AuthLayout'));
// const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
// // guards
// const AdminRoute = lazy(() => import('./guards/AdminRoute'));
// const CheckoutRoute = lazy(() => import('./guards/CheckoutRoute'));
// // page
// const Homepage = lazy(() => import('./pages/Homepage'));
// const MovieDetail = lazy(() => import('./pages/MovieDetail'));
// const BookTickets = lazy(() => import('./pages/Bookticket'));
// const UsersManagement = lazy(() => import('./pages/UsersManagement'));
// const MoviesManagement = lazy(() => import('./pages/MoviesManagement'));
// const Login = lazy(() => import('./pages/Login'));
// const Register = lazy(() => import('./pages/Register'));