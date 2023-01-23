import { Avatar } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

export const AvatarPerfil = () => {
  const { headerBarUserInfo } = useContext(AuthContext)

  if (headerBarUserInfo?.imgPerfil === null) {
    return <Avatar sx={{ bgcolor: `rgb(${headerBarUserInfo?.rgb})` }}> {headerBarUserInfo?.name[0].toUpperCase()} </Avatar>
  } else {
      return <Avatar alt={headerBarUserInfo?.name}src={headerBarUserInfo?.imgPerfil} />
  }
}
