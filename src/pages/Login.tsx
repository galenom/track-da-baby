import React from "react";
import { getAuth, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";
import { provider } from "../utils/firebase/sso";
import { useFirebaseApp } from "../utils/firebase/context";

export const Login = () => {
  const app = useFirebaseApp();
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
