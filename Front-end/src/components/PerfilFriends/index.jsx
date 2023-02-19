import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { AvatarPerfil } from "../AvatarPerfil"
import { GridFeed } from "../Feed"
import { GetPerfilUser } from "../../services/Api"
import { useState } from "react"

export const PerfilFriends = ({ id }) => {  
  const [user, setUser] = useState(null)
  const [post, setPost] = useState(null)

  
  const feedUser = async () => {
    const result = await GetPerfilUser(id)
    return result
  }

  feedUser().then((response) => {
    setUser(response.user)
    setPost(response.post)
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
        rgbColor={user?.rgb}
        name={user?.name}
        perfilImg={user?.imgPerfil}
        width={"150px"}
        height={"150px"}
      />
      <Typography variant="h5">
          {user?.name}
      </Typography>
      <Typography variant="p">
      bio: {user?.bio || 'ainda não tem bio'}
      </Typography>

      <GridFeed
      feed={post}
      />

    </Stack> 
   
  )
}
