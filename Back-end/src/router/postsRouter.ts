import { Router } from 'express'
import { PostsBusiness } from '../business/postsBusiness'
import { PostsController } from '../controller/postsController'
import { UsersDataBase } from '../database/UsersDataBase'
import { PostsDataBase } from '../database/postsDataBase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'

export const postsRouter = Router()

const postsController = new PostsController(
    new PostsBusiness(
        new PostsDataBase(),
        new Authenticator(),
        new IdGenerator(),
        new UsersDataBase(),
    )
)
postsRouter.get("/", postsController.getPostsController)
postsRouter.post("/", postsController.postPostsController)
postsRouter.post("/storage", postsController.postStorageController)


