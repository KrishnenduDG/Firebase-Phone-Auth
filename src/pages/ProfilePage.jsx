import { useAuth } from "@/hooks/useAuth";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const { authenticatedUser, handleLogOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Box>
      <Typography>Profile Page</Typography>
      <Typography>{authenticatedUser.phoneNumber}</Typography>
      <Button
        onClick={async () => {
          await handleLogOut();
          navigate("/login");
        }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default ProfilePage;
