export interface IpostDB {
  id: string,
  idUser: string,
  name: string,
  imgPerfil: string,
  rgb: [],
  img: string | null,
  texto: string,
  idUserLike: string[] | null,
  date: string
}
export interface IPostInputDTO {
  idUserToken: string,
  texto: string,
  img: any,
}
export class Post {
  constructor(
    private id: string,
    private idUser: string,
    private name: string,
    private imgPerfil: string,
    private rgb: [],
    private img: string | null,
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
  public getName = () => {
    return this.name
  }
  public getImgPerfil = () => {
    return this.imgPerfil
  }
  public getRGB = () => {
    return this.rgb
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
  public setName = (newName: string) => {
    this.name = newName
  }  
  public setImgPerfil = (newImgPerfil: string) => {
    this.imgPerfil = newImgPerfil
  }
  public setRgb = (newRGB: []) => {
    this.rgb = newRGB
  }
  public setImg = (newImg: string | null) => {
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