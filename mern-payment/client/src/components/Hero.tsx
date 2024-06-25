import { Container, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Hero = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        {userInfo ? (
          <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
            <h1 className="text-center mb-4">Welcome {userInfo.name}</h1>
            <p className="text-center mb-4">
              This is a MERN authentication web application that stores a JWT in
              an HTTP-Only cookie. It also uses Redux Toolkit and the React
              Bootstrap library
            </p>
            <div className="d-flex">
              <Button variant="secondary" href="/profile" className="me-3">
                Update Profile
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
            <h1 className="text-center mb-4">MERN Authentication</h1>
            <p className="text-center mb-4">
              This is a MERN authentication web application that stores a JWT in
              an HTTP-Only cookie. It also uses Redux Toolkit and the React
              Bootstrap library
            </p>
            <div className="d-flex">
              <Button variant="primary" href="/login" className="me-3">
                Sign In
              </Button>
              <Button variant="secondary" href="/register">
                Register
              </Button>
            </div>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default Hero;
