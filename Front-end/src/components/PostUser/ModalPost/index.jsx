import { PhotoCamera } from '@mui/icons-material';
import { Button, Divider, IconButton, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { PostUserFeed } from '../../../services';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "300px",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ModalPost({ name, open, setOpen, handleOpen, handleClose, user, UpdatePage }) {
  const [img, setImg] = useState(null)

  const { formValues, onChange, cleanFields } = useForm({
    texto: "",
  })

  const SendThePost = async () => {
    if (user && img) {
      const config = {
        headers: {
          'Accept': '',
          'Content-Type': 'multipart/form-data'
        }
      }
      let formData = new FormData()
      formData.append('idUser', user)
      formData.append('texto', formValues.texto)
      formData.append('img', img)
      await PostUserFeed(formData, config)
      setImg(null)
      cleanFields()
      UpdatePage()
    }
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2"
              textAlign={"center"}
              marginBottom={2}
            >
              Criar publicação
            </Typography >
            <Divider
              marginBottom={4}
            />
            <TextField
              fullWidth
              id="outlined-textarea"
              multiline
              fontSize={15}
              placeholder={`No que você esta pensando, ${name}?`}
              value={onChange.texto}
              onChange={onChange}
              name="texto"
            />
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden type="file" onChange={(event) => { setImg(event?.target?.files[0]) }}
              />
              {img === null ?
                <PhotoCamera sx={{
                  width: 280,
                  height: 200,
                  fontSize: 50,
                  color: "#9e0000",
                  backgroundColor: "#dddddd",
                  borderRadius: 2,
                }} />
                :
                <Box width={280} height={300}  >
                  <img style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "scale-down",
                  }}

                    src={URL.createObjectURL(img)} />
                </Box>
              }

            </IconButton>
            <Button variant="contained" size="medium" onClick={() => { SendThePost() }}>
              postar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
