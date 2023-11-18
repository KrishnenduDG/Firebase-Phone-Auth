import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* SignUp Form Container */}
      <Box
        sx={{
          width: "30%",
          height: "45%",
          display: "flex",
          alignItems: "center",
          border: "3px solid black",
          borderRadius: 15,
          padding: 4,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          Login
        </Typography>

        {/* Input Fields */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          mb={0.5}
          width="80%"
        >
          <TextField
            id="outlined-basic"
            inputRef={emailRef}
            label="Email"
            variant="outlined"
            sx={{ mb: 3 }}
          />
          <TextField
            name="password"
            label="Password"
            inputRef={passwordRef}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <IoEye /> : <IoMdEyeOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Button */}
        <Box display={"flex"} justifyContent={"center"}>
          <Button variant="contained" sx={{ fontSize: "1rem" }}>
            Login
          </Button>
        </Box>

        {/* Already Have an Account Section */}
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography variant="h6" mr={1}>
            Don't have an Account?
          </Typography>
          <Link
            component="button"
            variant="h6"
            underline="none"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </Link>
        </Box>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography variant="h6" mr={1}>
            Log In with
          </Typography>
          <Link
            component="button"
            variant="h6"
            underline="none"
            onClick={() => {
              navigate("/phone");
            }}
          >
            OTP
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
