import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { RequireAuth } from "./components/RequireAuth";
import { AuthContext } from "./utils/AuthContext";
import { getRedirectResult, User } from "firebase/auth";
import { auth } from "./utils/firebase/init";

function App() {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result) {
        setUser(result.user);
      }
    });
  }, []);

  return (
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
  );
}

export default App;
