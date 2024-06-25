import PrivateRoute from "../components/PrivateRoute.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import Profile from "../pages/Profile.tsx";
import PayPalButton from "../pages/Paypal.tsx";
import SuccessPage from "../pages/Success.tsx";
import Subscription from "../pages/Subscription.tsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
       <Route
        path="/payment"
        element={
          <PrivateRoute>
            <PayPalButton />
          </PrivateRoute>
        }
      />
        <Route
        path="/subscription"
        element={
          <PrivateRoute>
            <Subscription />
          </PrivateRoute>
        }
      />
       <Route
        path="/success"
        element={
            <SuccessPage />
        }
      />
    </Route> 
  )
);

export default router;
