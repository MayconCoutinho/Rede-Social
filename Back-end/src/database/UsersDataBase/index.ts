import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { IUserDB, User } from "../../models/User";
import { FirebaseConfigChave } from "../firebase";

export class UsersDataBase {
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
        try {
            const db = FirebaseConfigChave()
            const userCollectionRef = collection(db, "usuarios")
            const querySnapshot = await getDocs(userCollectionRef)
            const getUsers = querySnapshot.docs.map((doc) => doc.data())
            const result = getUsers?.filter((item) => { return item }).map((item: any) => {
                return item
            })
            return result
        } catch (error: any) {
            console.log(error.response)
        }
    }
    public getUsersDataBase = async (token: any) => {
        try {
            const { id } = token
            const getAllUsers  = await this.getAllUsersDataBase()
            const result = getAllUsers?.filter((item) => { return item?.id === id})
            return result
        } catch (error: any) {
            console.log(error.response)
        }
    }
    public getPerfilUserDataBase = async (idUser:string, postUser: any) => {
      try {     
        const getUserId = await this.getAllUsersDataBase()
        const mapEmail: void[] | undefined = getUserId?.map((item) => { return item })
        const checkingAllId: any = mapEmail?.filter((item: any) => {
            if (item?.id === idUser) {
               return item 
            }
            return undefined
        })
        const filtercheckingAllId = checkingAllId.map((item: any) => {
          return {
            id:item.id,
            imgPerfil:item.imgPerfil,
            name:item.name,
            rgb:item.rgb
          }
        })
        return {user:filtercheckingAllId[0], post:postUser}
        
      } catch (error: any) {
          console.log(error.response)
      }
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
        const db = FirebaseConfigChave()
        setDoc(doc(db, "usuarios", userDB.id),  userDB );
    }
}
