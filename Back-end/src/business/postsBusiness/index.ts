import { PostsDataBase } from "../../database/postsDataBase"
import { HeadersError } from "../../errors/HeaderError"
import { IPostInputDTO, Post } from "../../models/post"
import { Authenticator } from "../../services/Authenticator"
import { IdGenerator } from "../../services/IdGenerator"

export class PostsBusiness {
  constructor(
    private postsDataBase: PostsDataBase,
    private authenticator: Authenticator,
    private idGenerator:  IdGenerator
  ) { }
  public getPostBussines = async (token: string | undefined) => {
    if(!token){
      throw new HeadersError()
    }
    // Em validation apenas valida se o token existe, mas nesse caso seria melhor,
    // validar o token pegar o resultado e ver se exite no banco de dados. 
    // Tenho que pensar qual é a melhor forma, se é criar uma api em que pega e
    // o id do token e confirma isso ou outro metodo 
    const validation:  any = this.authenticator.getTokenPayload(token)
    
    const response = await this.postsDataBase.getAllPostsDataBase()
    return response
  }
  public postBusiness = async (input: IPostInputDTO): Promise<void> => {
    const { idUser, texto, img } = input

    const id = this.idGenerator.generate()
    const date = new Date().toISOString()
    console.log(date)
    const idUserLike = null

    const post = new Post(
      id,
      idUser,
      img,
      texto,
      idUserLike,
      date,
    ) 
    await this.postsDataBase.createPost(post)
  }
}