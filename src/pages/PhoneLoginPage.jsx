import { useAuth } from "@/hooks/useAuth";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router";
const PhoneLoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOtpScreen, setIsOtpScreen] = useState(false);
  const [confirmObj, setConfirmObj] = useState(null);
  const otpRef = useRef();

  const { setUpReCaptcha, setAuthenticatedUser } = useAuth();

  const handlePhoneNumberSubmit = async () => {
    try {
      const res = await setUpReCaptcha(phoneNumber);
      setConfirmObj(res);
      setIsOtpScreen(true);
    } catch (error) {}
  };

  const handleOtpSubmit = async () => {
    const otpEntered = otpRef.current.value;
    try {
      const res = await confirmObj.confirm(otpEntered);
      console.log(res.user);
      setAuthenticatedUser(res.user);
      navigate("/profile");
    } catch (error) {
      alert(error.message);
    }
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
          {isOtpScreen ? (
            <TextField
              id="outlined-basic"
              inputRef={otpRef}
              label="OTP"
              variant="outlined"
              sx={{ mb: 3 }}
            />
          ) : (
            <PhoneInput
              country={"in"}
              value={phoneNumber}
              onChange={(value, country, e, formattedValue) =>
                setPhoneNumber(formattedValue)
              }
              inputStyle={{ width: "100%" }}
            />
          )}

          {!isOtpScreen && (
            <div id="recaptcha-container" style={{ marginTop: 20 }}></div>
          )}
        </Box>

        {/* Button */}
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            sx={{ fontSize: "1rem" }}
            onClick={isOtpScreen ? handleOtpSubmit : handlePhoneNumberSubmit}
            disabled={!phoneNumber}
          >
            {isOtpScreen ? "Verify OTP" : "Send OTP"}
          </Button>
        </Box>

        {/* Log In with Email Section */}

        {!isOtpScreen && (
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="h6" mr={1}>
              Log In with
            </Typography>
            <Link
              component="button"
              variant="h6"
              underline="none"
              onClick={() => {
                navigate("/login");
              }}
            >
              Email
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PhoneLoginPage;
