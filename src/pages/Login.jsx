import { Typography, Container, Box } from "@mui/material";
import { API } from "../config";
import axios from "axios";
import { useEffect } from "react";
const Login = () => {
  useEffect(() => {
    const submit = () => {
      // let res = axios.get(API + "login");
      console.log("test");
    };
  });
  return (
    <>
      <main>
        <Container>
          <Typography variant="h1" sx={{ textAlign: "center" }}>
            Login
          </Typography>
          <Box></Box>
        </Container>
      </main>
    </>
  );
};

export default Login;
