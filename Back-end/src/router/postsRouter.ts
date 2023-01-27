import { Router } from 'express'
import multer from 'multer'
import { PostsBusiness } from '../business/postsBusiness'
import { PostsController } from '../controller/postsController'
import { UsersDataBase } from '../database/UsersDataBase'
import { PostsDataBase } from '../database/postsDataBase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'
import { UploadImage } from '../services/firebase'

export const postsRouter = Router()

const Multer = multer({
    storage: multer.memoryStorage()
})

const postsController = new PostsController(
    new PostsBusiness(
        new PostsDataBase(),
        new Authenticator(),
        new IdGenerator(),
        new UsersDataBase(),
    )
)
postsRouter.get("/", postsController.getPostsController)
postsRouter.post("/", Multer.single("img"), UploadImage , postsController.postPostsController)


