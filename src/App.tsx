import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { RequireAuth } from "./components/RequireAuth";
import { AuthContext } from "./utils/AuthContext";
import { getRedirectResult, User } from "firebase/auth";
import { auth } from "./utils/firebase/init";

export const LOCAL_STORAGE_REDIRECT_KEY = "LOCAL_STORAGE_REDIRECT_KEY";

function App() {
  const [user, setUser] = useState<null | User>(null);
  const navigate = useNavigate();

  const redirectUrl = window.localStorage.getItem(LOCAL_STORAGE_REDIRECT_KEY);

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result) {
        setUser(result.user);
        if (redirectUrl) {
          window.localStorage.removeItem(LOCAL_STORAGE_REDIRECT_KEY);
          navigate(redirectUrl);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-container">
      <AuthContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Routes>
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
