import { Box, Grid } from "@mui/material";
import { FeedCard } from "./FeedCard";

export const GridFeed = ({ feed }) => {
  return (
    <Grid
      marginTop={5}
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {feed && feed?.map((item) => {
        return (<>
          <Box marginBottom={4}>
            <FeedCard
              date={item?.date}
              id={item?.id}
              idUser={item?.idUser}
              name={item?.name}
              perfilImg={item?.imgPerfil}
              rgb={item?.rgb}
              idUserLike={item?.idUserLike}
              img={item?.img}
              texto={item?.texto}
            />
          </Box>
        </>)
      })}
    </Grid>
  )
}
