import React, { useContext } from "react";
import MainLayout from "../../Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import backgroundImage from "../../assets/transp.jpeg";
import AuthContext from "../../Auth/Context";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <MainLayout>
      <Container component="main" fullWidth>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography>Bienvenido</Typography>
            <Typography style={{ marginLeft: 10 }}>{user.name}</Typography>
          </Box>
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </Box>
      </Container>
    </MainLayout>
  );
}
