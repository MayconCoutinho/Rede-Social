import { Avatar } from "@mui/material";

export const AvatarPerfil = ({rgbColor, name, perfilImg, width, height,fontSize}) => {
  const firstLetter = name && name[0].toUpperCase()
  if ( perfilImg === null) {
    return <Avatar sx={{ bgcolor: `rgb(${rgbColor})`, width:`${width}`, height:`${height}`, fontSize:`${fontSize}` }} > {firstLetter}</Avatar>
  } else {
      return <Avatar alt={name}src={perfilImg} sx={{width:`${width}`, height:`${height}`, }} />
  }
}
