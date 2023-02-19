import { Avatar } from "@mui/material";

export const AvatarPerfil = ({rgbColor, name, perfilImg, width, height}) => {
  const firstLetter = name && name[0].toUpperCase()
  if ( perfilImg === null) {
    return <Avatar sx={{ bgcolor: `rgb(${rgbColor})`, width:`${width}` }} > {firstLetter}</Avatar>
  } else {
      return <Avatar alt={name}src={perfilImg} sx={{width:`${width}`, height:`${height}` }} />
  }
}
