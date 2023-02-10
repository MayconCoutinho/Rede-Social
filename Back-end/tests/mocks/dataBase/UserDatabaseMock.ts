import { IUserDB, User } from "../../../src/models/User";


export class UserDatabaseMock {
    public toUserDBModel = (user: User): IUserDB => {
        return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            rgb: user.getRGB(),
            imgPerfil: user.getImgPerfil(),
            friends: user.getFriends(),
            postUser: user.getPostUser()
        }
    }
    public getAllUsersDataBase = async () => {
        const result = [
            {
                date: "data-atual-mock",
                id: "id-mock-1",
                idUser: "id-user-mock",
                idUserLike: null,
                imgPerfil: null,
                name: "zoro1",
                rgb: [31, 32, 33]
            },
            {
                date: "data-atual-mock",
                id: "id-mock-2",
                idUser: "id-user-mock",
                idUserLike: null,
                imgPerfil: null,
                name: "zoro2",
                rgb: [31, 32, 33]
            }
        ]
        return result
    }
    public getUsersDataBase = async (token: any) => {
            const { id } = token
            const getAllUsers = await this.getAllUsersDataBase()
            const result = getAllUsers?.filter((item) => { return item?.id === id })
            return result
    }
    public findByEmail = async (email: string): Promise<any> => {
        const getUserfindByEmail = await this.getAllUsersDataBase()
        const mapEmail: IUserDB[] | undefined = getUserfindByEmail?.map((item) => { return item?.email })
        const checkingAllEmail: any = mapEmail?.filter((item: any) => {
            if (item === email) {
                return true
            }
            return undefined
        })
        return checkingAllEmail[0]
    }
    public findByEmailLogin = async (email: string): Promise<any> => {
        const getUserfindByEmail = await this.getAllUsersDataBase()
        const mapEmail: void[] | undefined = getUserfindByEmail?.map((item) => { return item })
        const checkingAllEmail: any = mapEmail?.filter((item: any) => {
            if (item?.email === email) {
                return item
            }
            return undefined
        })
        return checkingAllEmail[0]
    }
    public findByIdLogin = async (id: string): Promise<any> => {
        const getUserfindByEmail = await this.getAllUsersDataBase()
        const mapEmail: void[] | undefined = getUserfindByEmail?.map((item) => { return item })
        const checkingAll: any = mapEmail?.filter((item: any) => {
            if (item?.id === id) {
                return item
            }
            return undefined
        })
        return checkingAll[0]
    }
    public createUser = async (user: any) => {
        const userDB = this.toUserDBModel(user)
        return userDB
    }
}