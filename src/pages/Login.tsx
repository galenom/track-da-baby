import React from "react";
import { getAuth, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";
import { provider } from "../utils/firebase/sso";

export const Login = () => {
  const signIn = () => {
    const auth = getAuth();
    signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <GoogleButton onClick={signIn} />
    </div>
  );
};
