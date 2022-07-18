import { Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import React, { useContext } from "react";

export const FirebaseContext = React.createContext<FirebaseContextDTO>({
  app: undefined,
  auth: undefined,
  analytics: undefined,
});

export const useFirebaseApp = () => useContext(FirebaseContext).app;
export const useFirebaseAuth = () => useContext(FirebaseContext).auth;
export const useFirebaseAnalytics = () => useContext(FirebaseContext).analytics;

export interface FirebaseContextDTO {
  app?: FirebaseApp;
  auth?: Auth;
  analytics?: Analytics;
}
