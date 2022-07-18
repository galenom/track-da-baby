import { useEffect } from "react";
import "./App.css";
import { initFirebaseApp } from "./utils/firebase/init";

function App() {
  useEffect(() => {
    initFirebaseApp();
  }, []);
  return <></>;
}

export default App;
