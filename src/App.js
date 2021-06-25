import { Suspense, lazy } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import ModalTrailer from './components/ModalTrailer';
import TriggerLoadingLazy from './components/TriggerLoadingLazy';
import Loading from './components/Loading';
import { theme } from './constants/config';

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
              <MainLayout >
                <Route exact path="/" component={Homepage} />
                <Route exact path="/phim/:maPhim" component={MovieDetail} />
                <UserProfileRoute exact path="/taikhoan" component={UserProfile} />
              </MainLayout>
            </Route>

            <CheckoutRoute exact path="/datve/:maLichChieu" component={BookTickets} />

            {/* component trong này chỉ cho phép truy cập khi tài khoản là admin */}
            <Route exact path={["/admin/users", "/admin/movies", "/admin/showtimes"]}>
              <AdminLayout >
                <AdminRoute exact path='/admin/users' component={UsersManagement} />
                <AdminRoute exact path='/admin/movies' component={MoviesManagement} />
                <AdminRoute exact path='/admin/showtimes' component={CreateShowtime} />
              </AdminLayout>
            </Route>

            {/* component hiển thị bên trong route này luôn có giao diện AuthLayout */}
            <Route exact path={["/dangnhap", "/dangky"]}>
              <AuthLayout >
                <Route exact path="/dangnhap" component={Login} />
                <Route exact path="/dangky" component={Register} />
              </AuthLayout>
            </Route>

            {/* khi người dùng nhập sai địa chỉ ví dụ localhost:3002/fdsf thì tự động chuyển sang trang NotFound*/}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
