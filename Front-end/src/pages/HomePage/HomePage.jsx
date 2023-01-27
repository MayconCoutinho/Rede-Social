import React, { useContext } from "react";
import { GridFeed } from "../../components/Feed";
import { Footer } from "../../components/Footer";
import { HeaderBar } from "../../components/HeaderBar";
import { PostUser } from "../../components/PostUser";
import { AuthContext } from "../../context/Auth";

export const HomePage = () => {
  const { user, signin, signout, headerBarUserInfo, loading, feed, UpdatePage} = useContext(AuthContext)

  return (
    <>
      <HeaderBar
        // headerBarUserInfo={headerBarUserInfo} 
        // signout={signout} 
        rgbColor={headerBarUserInfo?.rgb}
        name={headerBarUserInfo?.name}
        perfilImg={headerBarUserInfo?.imgPerfil}
      />
      <PostUser
        rgbColor={headerBarUserInfo?.rgb}
        name={headerBarUserInfo?.name}
        perfilImg={headerBarUserInfo?.imgPerfil}
        user={user}
        UpdatePage={UpdatePage}
      />
      <GridFeed feed={feed}/>
      <Footer />
    </>
  )
}
