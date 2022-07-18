import React from "react";
import { getAuth, getRedirectResult, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";
import { provider } from "../utils/firebase/sso";
import { app } from "../utils/firebase/init";

export const Login = () => {
  const signIn = () => {
    const auth = getAuth(app);
    signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <GoogleButton onClick={signIn} />
    </div>
  );
};
