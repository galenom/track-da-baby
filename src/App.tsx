import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { initFirebaseApp } from "./utils/firebase/init";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { FirebaseContext, FirebaseContextDTO } from "./utils/firebase/context";

function App() {
  const [firState, setFirState] = useState<FirebaseContextDTO>({
    app: undefined,
    auth: undefined,
    analytics: undefined,
  });

  useEffect(() => {
    setFirState(initFirebaseApp());
  }, []);

  return (
    <FirebaseContext.Provider value={firState}>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Routes>
    </FirebaseContext.Provider>
  );
}

export default App;
