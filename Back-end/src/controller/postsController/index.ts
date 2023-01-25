import { Request, Response } from "express";
import { PostsBusiness } from "../../business/postsBusiness";
import { BaseError } from "../../errors/BaseError";
import { IPostInputDTO } from "../../models/post";

export class PostsController {
    constructor(
        private postsBusiness: PostsBusiness
    ) { }
    public getPostsController = async (req: Request, res: Response) => {
        try {
            const token: string | undefined = req.headers.authorization
            const response = await this.postsBusiness.getPostBussines(token)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado no endpoint ping" })
        }
    }
    public postPostsController = async (req: Request, res: Response) => {
        try {
            const input: IPostInputDTO = {
                idUser: req.body.idUser,
                texto: req.body.texto,
                img: req.body.img,
            }
            const response = await this.postsBusiness.postBusiness(input)
            res.status(201).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
        }
    }
    public postStorageController = async (req: Request, res: Response) => {
        try {
            console.log(req)
            // const response = await this.postsBusiness.postBusiness(input)
            res.status(201).send("response")
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
        }
    }
}