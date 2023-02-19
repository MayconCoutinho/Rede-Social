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
import { ConvertingDateTime } from '../../../hooks/ConvertingDateTime';
import { AvatarPerfil } from '../../AvatarPerfil';
import { useNavigate } from 'react-router-dom';
import { goToPerfilFriendsPage } from '../../../routes/coordinator';

export const FeedCard = ({ date, id, idUser, name, perfilImg, rgb, idUserLike, img, texto, }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{
      width: 345,
      '@media (min-width: 600px)': {
        width: 600,
      }
    }}>
      <CardHeader
        avatar={
          <Stack onClick={() => {goToPerfilFriendsPage(navigate, idUser)}}> 
            <AvatarPerfil perfilImg={perfilImg} rgbColor={rgb} name={name} />
          </Stack>
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
