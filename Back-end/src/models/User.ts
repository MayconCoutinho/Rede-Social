export interface IUserDB {
  id: string,
  name: string,
  email: string,
  password: string,
  rgb: [],
  imgPerfil: {} | null,
  friends: [] | null,
  postUser: [] | null,
}
export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private rgb: [],
    private imgPerfil: {} | null,
    private friends: [] | null,
    private postUser: [] | null,

  ) { }
  public getId = () => {
    return this.id
  }
  public getName = () => {
    return this.name
  }
  public getEmail = () => {
    return this.email
  }
  public getPassword = () => {
    return this.password
  }
  public getRGB = () => {
    return this.rgb
  }
  public getImgPerfil = () => {
    return this.imgPerfil
  }
  public getFriends = () => {
    return this.friends
  }
  public getPostUser = () => {
    return this.postUser
  }
  public setId = (newId: string) => {
    this.id = newId
  }
  public setName = (newName: string) => {
    this.name = newName
  }
  public setEmail = (newEmail: string) => {
    this.email = newEmail
  }
  public setPassword = (newPassword: string) => {
    this.password = newPassword
  }
  public setRgb = (newRGB: []) => {
    this.rgb = newRGB
  }
  public setImgPerfil = (newImgPerfil: {} | null) => {
    this.imgPerfil = newImgPerfil
  }
  public setFriends = (newFriends: [] | null) => {
    this.friends = newFriends
  }
  public setPostUser = (newPostUser: [] | null) => {
    this.postUser = newPostUser
  }
}
export interface ISignupInputDTO {
  name: string,
  email: string,
  password: string
}
export interface ISignupOutputDTO {
  message: string,
  token: string
}
export interface ILoginInputDTO {
  email: string,
  password: string
}
export interface ILoginOutputDTO {
  message: string,
  token: string
}