import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TokenAuthenticator } from "../hooks/Token/index.jsx";
import { ErrorPage } from "../pages/ErrorPage/index.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { LoginPage } from "../pages/LoginPage/index.jsx";
import { PerfilPage } from "../pages/PerfilPage/index.jsx";
import { RegisterPage } from "../pages/RegisterPage/index.jsx";
import { PerfilFriendsPage } from "../pages/PerfilFrindsPage/index.jsx";

export const Router = () => {
  const Auth = TokenAuthenticator()
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={Auth === true ? <LoginPage /> : <HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="LoginPage" element={Auth === true ? <LoginPage /> : <HomePage />} />
        <Route path="Perfil" element={Auth === true ?  <LoginPage /> : <PerfilPage />} />
        <Route path="Perfil/:id" element={Auth === true ? <LoginPage /> : <PerfilFriendsPage />} />
        <Route path="RegisterPage" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
