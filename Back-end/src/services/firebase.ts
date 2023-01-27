import admin from "firebase-admin";

const serviceAccount = require("../database/firebase/fireBase-key.json");

const BUCKET = "rede-social-203d0.appspot.com"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket : BUCKET
});

const bucket = admin.storage().bucket()

export const UploadImage = (req: any, res: any, next: any) => {
    if(!req.file){
      return next()
    }
    const imagem = req.file
    const nameImage = Date.now() + "." + imagem.originalname.split(".").pop()
    const file = bucket.file("feed/" + nameImage)

    const stream = file.createWriteStream({
      metadata: {
        contentType: imagem.mimetype,
      }
    })
    stream.on("error", (error) => {
      console.log(error)
    })
    stream.on("finish", async () => {
      await file.makePublic()
      req.file.firebaseUrl = `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/feed%2F${nameImage}?alt=media&token`
      next()
    })
    stream.end(imagem.buffer)
}

