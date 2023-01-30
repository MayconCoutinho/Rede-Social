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
  const ConvertendoDataHora = (item) => {
    const data = item.substr(0, 10).split("-").reverse()
    const hora = item.substr(11, 5).split(":")
    const newDate = new Date().toISOString()
    const dataNew = newDate.substr(0, 10).split("-").reverse()
    const horaNew = newDate.substr(11, 5).split(":")

    const tempo = (
      dataNew[0] > data[0] ? `${dataNew[0] - data[0]} dias` :
        dataNew[1] > data[1] ? `${dataNew[1] - data[1]} mês` :
          dataNew[0] > data[0] ? `${dataNew[0] - data[0]} dias` :
            dataNew[0] === data[0] ? horaNew[0] > hora[0] ? `${horaNew[0] - hora[0]} h` :
              horaNew[1] - hora[1] === 0 ? "Agora mesmo" : `${horaNew[1] - hora[1]} min` : " "
    )
    return tempo
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
          <AvatarPerfil perfilImg={perfilImg} rgbColor={rgb} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={ConvertendoDataHora(date)}
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
