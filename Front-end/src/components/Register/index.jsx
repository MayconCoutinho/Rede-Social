import { Box, Button, Stack, TextField } from "@mui/material";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import facebookImg from "../../assets/img/login/facebook-icon.png";
import googleImg from "../../assets/img/login/google-icon.png";
import { UseForm } from "../../hooks/UseForm";
import { goToLoginPage } from "../../routes/coordinator";
import { PostSignup } from "../../services/Api";
import { FirebaseConfigChave } from "../../services/firebase";

export const Register = () => {
  const navigate = useNavigate();

  const { formValues, onChange } = UseForm({
    name: "",
    email: "",
    password: "",
  })

  const Signup = () => {
    PostSignup(formValues.name, formValues.email, formValues.password)
    // goToHomePage(navigate)
  }
  const FacebookLogar = async () => {
    const auth = getAuth(FirebaseConfigChave())
    const provider = new FacebookAuthProvider()
    const { _tokenResponse } = await signInWithPopup(auth, provider)
    const { firstName, email, idToken } = _tokenResponse
    await PostSignup(firstName, email, idToken)
  }
  const GoogleLogar = async () => {
    const auth = getAuth(FirebaseConfigChave())
    const provider = new GoogleAuthProvider()
    const { _tokenResponse } = await signInWithPopup(auth, provider)
    const { emailVerified, firstName, email, idToken } = _tokenResponse
    if (emailVerified) {
      await PostSignup(firstName, email, idToken)
    }
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "auto",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "420px",
            height: "600px",
          }}
        >
          <Stack
            sx={{
              color: "#910101",
              fontSize: "40px",
              textAlign: "center",
              marginTop: "20px",
            }}
            spacing={2}>

            Cadastro

            <Stack>

              <TextField
                id="standard-basic"
                label="Nome"
                variant="standard"
                name="name"
                onChange={onChange}
                required
                sx={{
                  width: 300,
                  marginTop: 8,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                type={'text'}
              />
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                name="email"
                onChange={onChange}
                required
                sx={{
                  width: 300,
                  marginTop: 5,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                type={'text'}
              />
              <TextField
                id="standard-basic"
                label="Senha"
                variant="standard"
                name="password"
                onChange={onChange}
                required
                sx={{
                  width: 300,
                  marginTop: 5,
                  marginBottom: 5,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                type={'text'}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-stretch"
              spacing={4}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => { GoogleLogar() }}
                sx={{
                  backgroundColor: "#fafafa",
                  paddingLeft: 6,
                  paddingRight: 6,
                  ":hover": {
                    backgroundColor: "#f1f1f1",
                  }
                }}
              >
                <img src={googleImg} style={{ width: 30 }} />
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => { FacebookLogar() }}
                sx={{
                  paddingLeft: 6,
                  paddingRight: 6,
                }}
              >
                <img src={facebookImg} style={{ width: 30 }} />
              </Button>
            </Stack>
            <Button
              onClick={() => { goToLoginPage(navigate) }}
              sx={{
                color: "#ffffff",
                width: 300,
                background: "#910101",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                '&:hover': {
                  backgroundColor: '#b13333'
                },
              }}
              size="small"
              variant="contained"
            > Voltar </Button>
            <Button
              onClick={() => { Signup() }}
              sx={{
                color: "#ffffff",
                width: 300,
                background: "#3f60b9",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                '&:hover': {
                  backgroundColor: '#7489c2'
                },
              }}
              size="small"
              variant="contained"
            > Criar </Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
