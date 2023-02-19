import React, { useContext } from "react";
import { Footer } from "../../components/Footer";
import { HeaderBar } from "../../components/HeaderBar";
import { PerfilUser } from "../../components/PerfilUser";
import { AuthContext } from "../../context/Auth";
import { useParams } from "react-router-dom";

export const PerfilPage = () => {
  const { headerBarUserInfo, feed} = useContext(AuthContext)

  return (
    <>
      <HeaderBar
        rgbColor={headerBarUserInfo?.rgb}
        name={headerBarUserInfo?.name}
        perfilImg={headerBarUserInfo?.imgPerfil}
      />
      <PerfilUser
        rgbColor={headerBarUserInfo?.rgb}
        name={headerBarUserInfo?.name}
        perfilImg={headerBarUserInfo?.imgPerfil}
        bio={headerBarUserInfo?.bio}
        feed={feed}
      />
      <Footer />
    </>
  )
}
