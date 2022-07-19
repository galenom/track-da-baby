import { User } from "firebase/auth";
import React, { useContext } from "react";

export const AuthContext = React.createContext<IAuthContext>({
  user: null,
  setUser: null,
});

export const useAuthContext = () => useContext(AuthContext);
export const useAuthorizedUser = () => useContext(AuthContext).user;

interface IAuthContext {
  user: User | null;
  setUser: null | ((user: User | null) => void);
}
