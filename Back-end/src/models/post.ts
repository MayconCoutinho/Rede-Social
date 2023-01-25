export interface IpostDB {
  id: string,
  idUser: string,
  img: string,
  texto: string,
  idUserLike: string[] | null,
  date: string
}
export interface IPostInputDTO {
  idUser: string,
  texto: string,
  img: string,
}
export class Post {
  constructor(
    private id: string,
    private idUser: string,
    private img: string,
    private texto: string,
    private idUserLike: string[] | null,
    private date: string
  ) { }
  public getId = () => {
    return this.id
  }
  public getIdUser = () => {
    return this.idUser
  }
  public getImg = () => {
    return this.img
  }
  public getTexto = () => {
    return this.texto
  }
  public getIdUserLike = () => {
    return this.idUserLike
  }
  public getDate = () => {
    return this.date
  }
  public setId = (newId: string) => {
    this.id = newId
  }
  public setIdUser = (newIdUser: string) => {
    this.idUser = newIdUser
  }
  public setImg = (newImg: string) => {
    this.img = newImg
  }
  public setTexto = (newTexto: string) => {
    this.texto = newTexto
  }
  public setIdUserLike = (newIdUserLike: string[]) => {
    this.idUserLike = newIdUserLike
  }
  public setDate = (newDate: string) => {
    this.date = newDate
  }
}