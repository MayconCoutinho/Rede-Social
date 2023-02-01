import { Avatar } from "@mui/material";

export const AvatarPerfil = ({rgbColor, name, perfilImg }) => {
  if ( perfilImg === null) {
    return <Avatar sx={{ bgcolor: `rgb(${rgbColor})` }} > m</Avatar>
  } else {
      return <Avatar alt={name}src={perfilImg}/>
  }
}
