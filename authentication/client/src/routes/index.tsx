import PrivateRoute from "../components/PrivateRoute.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import Profile from "../pages/Profile.tsx";
import PaymentPage from "../pages/PaymentPage.tsx";
import SuccessPage from "../pages/Success.tsx";
import HomePage from "../pages/MainPage.tsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App.tsx";
import FailedPage from "../pages/Failed.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
      <Route path="/success" element={<PrivateRoute><SuccessPage /></PrivateRoute>} />
      <Route path="/failed" element={<PrivateRoute><FailedPage /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/main" element={<PrivateRoute><HomePage /></PrivateRoute>} />
    </Route>
  )
);

export default router;
