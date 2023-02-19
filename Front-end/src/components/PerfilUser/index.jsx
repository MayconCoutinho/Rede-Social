import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { AvatarPerfil } from "../AvatarPerfil"
import { GridFeed } from "../Feed"
import { GetPerfilUser } from "../../services/Api"
import { useState } from "react"

export const PerfilUser = ({ rgbColor, name, perfilImg, bio, feed }) => {
  const posts = feed?.filter((item) => {
    if (item?.name === name) {
      return item
    }
    return null
  })
  return (

    <Stack
      margin={8}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <AvatarPerfil
        rgbColor={rgbColor}
        name={name}
        perfilImg={perfilImg}
        width={"150px"}
        height={"150px"}
        fontSize={"70px"}
      />
      <Typography variant="h5">
        {name}
      </Typography>
      <Typography variant="p">
        bio: {bio || 'ainda não tem bio'}
      </Typography>

    {
      posts === null ? 

      <Typography variant="h5"> Ainda não existe post </Typography>
      :
      <GridFeed
      feed={posts}
      admin={true}
      />
      
      

    }

    </Stack>

  )
}
