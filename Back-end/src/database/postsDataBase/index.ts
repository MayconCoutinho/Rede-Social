import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { IpostDB, Post } from "../../models/post";
import { FirebaseConfigChave } from "../firebase";

export class PostsDataBase {
    public toPostDBModel = (user: Post): IpostDB => {
        const postUser : IpostDB = {
            id: user.getId(),
            idUser:  user.getIdUser(),
            name:  user.getName(),
            imgPerfil:  user.getImgPerfil(),
            rgb: user.getRGB(),
            img:  user.getImg(),
            texto:  user.getTexto(),
            idUserLike:  user.getIdUserLike(),
            date:  user.getDate()
        }
            return  postUser
        }
    
    public getAllPostsDataBase = async () => {
        try {
            const db = FirebaseConfigChave()
            const userCollectionRef = collection(db, "usuarios")
            const querySnapshot = await getDocs(userCollectionRef)
            const result = querySnapshot.docs.map((doc) => doc.data())

            const filtrandoDadosData = (dataCompleta: any) => {
                const day = 0
                const month = 1
                const year = 2
                const hours = 0
                const min = 1
                const s = 2

                const limpandoData = dataCompleta.substr(0, 10).split("/")
                const resultData = limpandoData[day] + limpandoData[month] + limpandoData[year]

                const limpandoHora = dataCompleta.substr(11,7).split(":")
                const resultHota = limpandoHora[hours] + limpandoHora[min] + limpandoHora[s]

                const DataHora = resultData + resultHota     
                           
                return DataHora
              }     
              const response = result.sort((firstDate: any, secondDate: any) => {
                return filtrandoDadosData(firstDate.date) - filtrandoDadosData(secondDate.date)
              })

            return response.reverse()
        } catch (error: any) {
            console.log(error.response)
        }
    }
    public createPost = async (post: any) => {
        // pegar todos posts antigos e adicionar o novo
        
        const postDB = this.toPostDBModel(post)
        const db = FirebaseConfigChave()
        updateDoc(doc(db, "usuarios", postDB.idUser), {postUser : [, postDB]});
    }
}