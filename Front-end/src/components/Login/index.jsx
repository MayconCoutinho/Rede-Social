import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Stack, TextField, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import facebookImg from "../../assets/img/login/facebook-icon.png";
import googleImg from "../../assets/img/login/google-icon.png";

import { AuthContext } from "../../context/Auth";
import { UseForm } from "../../hooks/UseForm";
import { goToCadastroPage } from "../../routes/coordinator";
import { FirebaseConfigChave } from "../../services/firebase";


export const Login = () => {
  const navigate = useNavigate();
  const { signin } = useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const { formValues, onChange } = UseForm({
    email: "",
    password: "",
  })

  const [values, setValues] = useState({
    showPassword: false,
  })
  const LoginUser = async () => {
    setLoading(false);
    await signin(formValues.email, formValues.password, navigate, checked)
    setLoading(true);
  }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const GoogleLogar = async () => {
    const auth = getAuth(FirebaseConfigChave())
    const provider = new GoogleAuthProvider()
    const { _tokenResponse } = await signInWithPopup(auth, provider)
    const { emailVerified, email, idToken } = _tokenResponse
    if (emailVerified) {
      setLoading(false);
      await signin(email, idToken, navigate, checked)
      setLoading(true);
    }
  }
  const FacebookLogar = async () => {
    const auth = getAuth(FirebaseConfigChave())
    const provider = new FacebookAuthProvider()
    const { _tokenResponse } = await signInWithPopup(auth, provider)
    const { email, idToken } = _tokenResponse
    setLoading(false);
    await signin(email, idToken, navigate, checked)
    setLoading(true);
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
            Social
            <Stack>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                name="email"
                type="email"
                onChange={onChange}

                sx={{
                  width: 300,
                  marginTop: 8,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <FormControl variant="standard"
                sx={{
                  width: 300,
                  marginTop: 7,
                  marginBottom: 5,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}>
                <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={onChange.password}
                  name="password"
                  onChange={onChange}
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Stack spacing={2} >
                <Stack
                  spacing={2}
                  marginBottom={2}
                >
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => { GoogleLogar() }}
                    sx={{ 
                      backgroundColor: "#fafafa",
                      ":hover" : {
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
                  >
                    <img src={facebookImg} style={{ width: 30 }} />
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  marginBottom={3}
                >
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{
                      color: "#910101",
                      '&.Mui-checked': {
                        color: "#910101",
                      }
                    }}
                  />
                  <Typography variant="caption"> Deseja se manter logado?</Typography>
                </Stack>
                <LoadingButton
                  loading={loading}
                  variant="outlined"
                  loadingPosition="center"
                  size="small"
                  onClick={() => { LoginUser() }}
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
                >
                  Entrar
                </LoadingButton>
                <Button
                  onClick={() => { goToCadastroPage(navigate) }}
                  sx={{
                    fontSize: "16px",
                    color: "#3f60b9",
                    textDecoration: "none",
                    marginTop: 35,
                    fontWeight: 600
                  }}
                >
                  Criar Conta
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
