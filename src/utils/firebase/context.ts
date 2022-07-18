import { Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import React, { useContext } from "react";

export const FirebaseContext = React.createContext<FirebaseContextDTO>({
  app: undefined,
  auth: undefined,
  analytics: undefined,
});

export const useFirebaseContext = () => useContext(FirebaseContext);

export interface FirebaseContextDTO {
  app?: FirebaseApp;
  auth?: Auth;
  analytics?: Analytics;
}
