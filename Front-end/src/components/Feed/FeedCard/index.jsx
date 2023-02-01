import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import * as React from 'react';
import { AvatarPerfil } from '../../AvatarPerfil';

export const FeedCard = ({ date, id, idUser, name, perfilImg, rgb, idUserLike, img, texto, }) => {
  const ConvertingDateTime = (fullDate) => {

    const date = fullDate.substr(0, 10).split("/")
    const hour = fullDate.substr(11, 5).split(":")

    const newDate = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})


    const dateNow = newDate.substr(0, 10).split("/")
    const hourNew = newDate.substr(11, 5).split(":")

    const day = 0
    const month = 1
    const year = 2
    const hours = 0
    const min = 1

    if (dateNow[year] > date[year]) {
      return (dateNow[year] - date[year]) + " ano"
    }
    if (dateNow[month] > date[month]) {
      return (dateNow[month] - date[month]) + " mês"
    }
    if (dateNow[day] > date[day]) {
      return (dateNow[day] - date[day]) + " dia"
    }
    if (hourNew[min] > hour[min]) {
      return (hourNew[min] - hour[min]) + " min"
    }
    if (hourNew[hours] > hour[hours]) {
      return (hourNew[hours] - hour[hours]) + " h"
    }
    if (hourNew[hours] - hour[hours] === 0) {
      return "Agora mesmo"
    }
  }

  return (
    <Card sx={{
      width: 345,
      '@media (min-width: 600px)': {
        width: 600,
      }
    }}>

      <CardHeader
        avatar={
          <AvatarPerfil perfilImg={perfilImg} rgbColor={rgb} name={name} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={ConvertingDateTime(date)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {texto}
        </Typography>
      </CardContent>
      {
        img === null ?
          <></>
          :
          <CardMedia
            component="img"
            height="auto"
            loading="lazy"
            image={img}
            alt={img}
            sx={{
              maxHeight: "600px"
            }}
          />
      }
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={2}
      >
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Stack>
    </Card>
  );
}
