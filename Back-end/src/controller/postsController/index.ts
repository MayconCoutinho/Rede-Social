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
            const response = await this.postsBusiness.getPostBussines()
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
                idUserToken: req.body.idUser,
                texto: req.body.texto,
                img: req.file,
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
}