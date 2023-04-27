import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../../Utils/Theme";
import Login from "../../Components/Forms/Login";
import Register from "../../Components/Forms/Register";

export default function AuthScreen() {
  const [showForm, setShowForm] = useState(1);
  return (
    <ThemeProvider theme={Theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {showForm === 1 ? (
            <Login setShowForm={setShowForm} />
          ) : (
            <Register setShowForm={setShowForm} />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
