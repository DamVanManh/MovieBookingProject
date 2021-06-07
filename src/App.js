import { Suspense, lazy } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import ModalTrailer from './components/ModalTrailer';
import TriggerLoadingLazy from './components/TriggerLoadingLazy';
import Loading from './components/Loading';

// layout
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const AuthLayout = lazy(() => import('./layouts/AuthLayout'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
// guards
const AdminRoute = lazy(() => import('./guards/AdminRoute'));
const CheckoutRoute = lazy(() => import('./guards/CheckoutRoute'));
const UserProfileRoute = lazy(() => import('./guards/UserProfileRoute'));
// page
const Homepage = lazy(() => import('./pages/Homepage'));
const MovieDetail = lazy(() => import('./pages/MovieDetail'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const BookTickets = lazy(() => import('./pages/Bookticket'));
const UsersManagement = lazy(() => import('./pages/UsersManagement'));
const MoviesManagement = lazy(() => import('./pages/MoviesManagement'));
const CreateShowtime = lazy(() => import('./pages/CreateShowtime'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
        <Loading />
        <ModalTrailer />
        {/* trong khi đang tải component(được yêu cầu từ url), TriggerLoadingLazy được Suspense return, sau khi tải xong TriggerLoadingLazy bị unmount */}
        <Suspense fallback={<TriggerLoadingLazy />}>
          <Switch>

            {/* component hiển thị bên trong route này luôn có giao diện MainLayout( header và footer) */}
            <Route exact path={["/", "/phim/:maPhim", "/taikhoan"]}>
              <Switch >
                <MainLayout >
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/phim/:maPhim" component={MovieDetail} />
                  <UserProfileRoute exact path="/taikhoan" component={UserProfile} />
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
            {/* <Redirect to="/" />NotFoundView */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
