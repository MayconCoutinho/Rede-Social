import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { AvatarPerfil } from "../AvatarPerfil"

export const PerfilUser = ({ rgbColor, name, perfilImg }) => {
  return (
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    >
      <AvatarPerfil
        rgbColor={rgbColor}
        name={name}
        perfilImg={perfilImg}
      />
      <Typography variant="h3">
          {name}
      </Typography>
    </Stack>

  )
}
