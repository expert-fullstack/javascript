import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useUpdateUserMutation, useUpdateUserTokenMutation } from "../store/slices/userSlice";
import { setCredentials } from "../store/slices/authSlice";
import FormContainer from "../components/FormCotntainer";
import Spinner from "../components/Spinner";
import { RootState } from "../store";
import { messaging, getToken, onMessage } from "../firebaseInit";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();
  const [updateUserToken] = useUpdateUserTokenMutation();
  
  const updateNotificationToken = async (newToken: string) => {
    try {
      const res = await updateUserToken({
        _id: userInfo._id,
        token: newToken,
      }).unwrap();
    } catch (err: any) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          
          const newToken = await getToken(messaging, {
            vapidKey:
              "BM9pSDHlJqcbXy3COcQ0oJhhi-ouXD7LG1f6NBc5fx_ztANEMn_hTnPth8pdQS_EcDLGnljyt7ptM2rzERhq6Xo",
          });
          if (newToken) {
            console.log("FCM Token:", newToken);
            updateNotificationToken(newToken);
          } else {
            console.error("Failed to get FCM token.");
          }
        } else {
          console.error("Notification permission denied");
        }
      } catch (error) {
        console.error("An error occurred while retrieving token.", error);
      }
    };

    requestPermission();

    // Handle incoming messages
    onMessage(messaging, (payload: any) => {
      console.log("Message received. ", payload);
      // Display the notification
      toast.info(`New message: ${payload.notification?.title}`);
    });
  },[]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        console.log(res);
        dispatch(setCredentials(res));
        toast.success("Profile updated successfully");
      } catch (err: any) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <FormContainer>
      <h1>Update Profile</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="secondary" className="mt-3">
          Update
        </Button>

        {isLoading && <Spinner />}
      </Form>
    </FormContainer>
  );
};

export default Profile;
