import React, { useContext } from "react";
import { Footer } from "../../components/Footer";
import { HeaderBar } from "../../components/HeaderBar";
import { AuthContext } from "../../context/Auth";
import { useParams } from "react-router-dom";
import { PerfilFriends } from "../../components/PerfilFriends";

export const PerfilFriendsPage = () => {
  const { headerBarUserInfo} = useContext(AuthContext)
  const { id } = useParams()

  return (
    <>
      <HeaderBar
        rgbColor={headerBarUserInfo?.rgb}
        name={headerBarUserInfo?.name}
        perfilImg={headerBarUserInfo?.imgPerfil}
      />
      <PerfilFriends
        rgbColor={headerBarUserInfo?.rgb}
        name={headerBarUserInfo?.name}
        perfilImg={headerBarUserInfo?.imgPerfil}
        bio={headerBarUserInfo?.bio}
        id={id}
      />
      <Footer />
    </>
  )
}
