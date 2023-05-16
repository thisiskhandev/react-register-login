import { Container, Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import { HOSTNAME } from "../config";

const Navigation = () => {
  return (
    <>
      <header style={{ backgroundColor: blueGrey[100] }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">
              <NavLink to={items[0].navLink}>Logo</NavLink>
            </Typography>
            <ul style={{ display: "flex" }}>
              {items.map((elem, ind) => {
                return (
                  <>
                    {elem.show ? (
                      <li key={ind}>
                        <NavLink to={elem.navLink}>{elem.navName}</NavLink>
                      </li>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </ul>
          </Box>
        </Container>
      </header>
    </>
  );
};

const items = [
  { navLink: HOSTNAME, navName: "Home", show: true },
  { navLink: HOSTNAME + "contact", navName: "Contact", show: true },
  { navLink: HOSTNAME + "login", navName: "Login", show: true },
  { navLink: HOSTNAME + "register", navName: "Register", show: true },
];

export default Navigation;
