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
    const data1 = item.substr(0, 10).split("-").reverse()
    const hora1 = item.substr(11, 5).replace(":", "h")
    return  hora1 + " " + data1[0] + "/" + data1[1] + "/" + data1[2]
  }
  return (
    <Card sx={{ width: 345 }}>

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
            height="194"
            loading="lazy"
            image={img}
            alt={img}
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
