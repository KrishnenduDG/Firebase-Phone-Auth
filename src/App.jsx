import {
  LoginPage,
  OtpVerificationPage,
  PhoneLoginPage,
  ProfilePage,
  SignUpPage,
} from "@/pages";

import { useAuth } from "@/hooks/useAuth";

import OnlyNonAuthRoutes from "@/utils/OnlyNonAuthRoutes";
import ProtectedRoutes from "@/utils/ProtectedRoutes";
import React from "react";
import { Route, Routes } from "react-router";
const App = () => {
  const { isLoading } = useAuth();

  return isLoading ? (
    <>Loading the App.....</>
  ) : (
    <Routes>
      <Route
        path="/signup"
        element={
          <OnlyNonAuthRoutes>
            <SignUpPage />
          </OnlyNonAuthRoutes>
        }
      />
      <Route
        path="/login"
        element={
          <OnlyNonAuthRoutes>
            <LoginPage />
          </OnlyNonAuthRoutes>
        }
      />
      <Route
        path="/phone"
        element={
          <OnlyNonAuthRoutes>
            <PhoneLoginPage />
          </OnlyNonAuthRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <ProfilePage />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default App;
