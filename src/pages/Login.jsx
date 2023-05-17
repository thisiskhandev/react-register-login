import {
  Typography,
  Container,
  Box,
  FormControl,
  InputLabel,
  Input,
  FormGroup,
  Button,
} from "@mui/material";
import { API } from "../config";
import axios from "axios";
import { useEffect, useState } from "react";
const Login = () => {
  const [isShow, setIsShown] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const loginSubmit = (e) => {
    // let res = axios.get(API + "login");
    // e.preventDefault();
    console.log(name, email, phone);
    setIsShown(true);
  };
  useEffect(() => {});
  return (
    <>
      <main>
        <Container style={{ maxWidth: "550px" }}>
          <Typography variant="h1" sx={{ textAlign: "center" }}>
            Login
          </Typography>
          <Box>
            <form onSubmit={(event) => event.preventDefault()}>
              <FormGroup>
                <FormControl sx={{ mt: 5 }}>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl sx={{ mt: 5 }}>
                  <InputLabel htmlFor="email">Email address</InputLabel>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl sx={{ mt: 5 }}>
                  <InputLabel htmlFor="phone">Phone</InputLabel>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>
                <FormControl sx={{ mt: 5 }}>
                  <Button
                    // type="submit"
                    variant="outlined"
                    onClick={loginSubmit}
                  >
                    Outlined
                  </Button>
                </FormControl>
              </FormGroup>
            </form>
          </Box>
        </Container>
        {isShow && (
          <>
            <Container sx={{ mt: 15 }}>
              <ul>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
              </ul>
            </Container>
          </>
        )}
      </main>
    </>
  );
};

export default Login;
