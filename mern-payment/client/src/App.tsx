import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './style.css'
const App = () => {
  return (
    <div className="backgroundcls">
      <Header />
      <ToastContainer />
      <Container className="my-2">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
