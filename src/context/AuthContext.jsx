import { auth } from "@/firebase.config.js";
import {
  RecaptchaVerifier,
  onAuthStateChanged,
  signInWithPhoneNumber,
  signOut,
} from "@firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticatedUser(user);
    });

    return () => unSubscribe();
  }, []);

  useEffect(() => {
    if (JSON.stringify(authenticatedUser) === JSON.stringify({})) return;
    setIsLoading(false);
  }, [authenticatedUser]);

  const setUpReCaptcha = async (phoneNumber) => {
    const captchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "normal",
    });

    captchaVerifier.render();

    return signInWithPhoneNumber(auth, phoneNumber, captchaVerifier);
  };

  const handleLogOut = async () => await signOut(auth);

  const value = {
    setUpReCaptcha,
    setAuthenticatedUser,
    authenticatedUser,
    isLoading,
    handleLogOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
