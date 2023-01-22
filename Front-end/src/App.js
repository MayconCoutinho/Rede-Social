import React from "react";
import { AuthProvider } from "./context/Auth/index.jsx";
import { Router } from "./routes/Routes";
import "./styles/globals.css";

function App() {
  return (
    <>
    <AuthProvider>
      <Router/>
    </AuthProvider>
    </>
  );
}
export default App;
