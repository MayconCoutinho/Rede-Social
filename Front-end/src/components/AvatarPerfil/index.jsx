import { Avatar } from "@mui/material";

export const AvatarPerfil = ({rgbColor, name, perfilImg }) => {
  if ( perfilImg === null) {
    return <Avatar sx={{ bgcolor: `rgb(${rgbColor})` }}> {name.toUpperCase()} </Avatar>
  } else {
      return <Avatar alt={name}src={perfilImg} />
  }
}
