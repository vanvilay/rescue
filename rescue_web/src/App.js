import * as React from "react";
import "./App.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { backdropClasses } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        justifyContent="center"
        sx={{ padding: 10, height: "100vh", margin: "0px auto" }}
      >
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 20,
              mx: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
           <img src={require('./Assent/Vientiane_Rescue.jpg')} style={{ height: 150, width: 160 }} />

            <Typography
              component="h1"
              variant="h5"
              fontFamily="Noto Sans Lao Looped"
              fontSize={40}
              fontWeight={backdropClasses}
            >
              ເຂົ້າສຸ່ລະບົບ
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="User Name"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ fontFamily: "Noto Sans Lao Looped", mt: 3, mb: 2 }}
              >
                ເຂົ້າສຸ່ລະບົບ
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    fontFamily="Noto Sans Lao Looped"
                  >
                    ລືມລະຫັດຜ່ານ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    fontFamily="Noto Sans Lao Looped"
                  >
                    {"ທ່ານຍັງບໍ່ມີ Account ແມ່ນບໍ່? ກະລຸນາ Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
