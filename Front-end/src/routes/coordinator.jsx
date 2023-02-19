export const goToLoginPage = (navigate) => {
  navigate("/LoginPage")
}
export const goToCadastroPage = (navigate) => {
  navigate("/RegisterPage")
}
export const goToHomePage = (navigate) => {
  navigate("/")
}
export const goToPerfilPage = (navigate) => {
  navigate(`/Perfil`)
}
export const goToPerfilFriendsPage = (navigate,id) => {
  navigate(`/Perfil/${id}`)
}
export const goToVoltar = (navigate) => {
  navigate(-1)
}
