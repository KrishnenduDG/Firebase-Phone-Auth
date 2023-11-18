import { useAuth } from "@/hooks/useAuth";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router";
const PhoneLoginPage = () => {
  const otpRef = useRef();

  const handleOTPSubmit = () => {
    console.log(otpRef.current.value);
  };
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
          OTP Login
        </Typography>

        {/* Input Fields */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width="80%"
        >
          <TextField
            id="outlined-basic"
            inputRef={otpRef}
            label="OTP"
            variant="outlined"
            sx={{ mb: 3 }}
          />
        </Box>

        {/* Button */}
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            sx={{ fontSize: "1rem" }}
            onClick={handleOTPSubmit}
            // disabled={!otpRef.current || otpRef.current.value === ""}
          >
            Verify OTP
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PhoneLoginPage;
