import { Router } from 'express'
import { UsersBusiness } from '../business/UsersBusiness'
import { UsersController } from '../controller/UsersController'
import { UsersDataBase } from '../database/UsersDataBase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'
import { RGBGenerator } from '../services/RGBGenarator'
import { PostsDataBase } from '../database/postsDataBase'

export const usersRouter = Router()

const usersController = new UsersController(
    new UsersBusiness(
        new UsersDataBase(),
        new RGBGenerator(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator(),
        new PostsDataBase(),
    )
)
usersRouter.get("/perfil", usersController.getPerfilUser)
usersRouter.post("/register", usersController.signup)
usersRouter.post("/login", usersController.login)
