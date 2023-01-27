import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { IpostDB, Post } from "../../models/post";
import { FirebaseConfigChave } from "../firebase";

export class PostsDataBase {
    public toPostDBModel = (user: Post): IpostDB => {
        return {
            id: user.getId(),
            idUser:  user.getIdUser(),
            name:  user.getName(),
            imgPerfil:  user.getImgPerfil(),
            rgb: user.getRGB(),
            img:  user.getImg(),
            texto:  user.getTexto(),
            idUserLike:  user.getIdUserLike(),
            date:  user.getDate(),
        }
    }
    public getAllPostsDataBase = async () => {
        try {
            const db = FirebaseConfigChave()
            const userCollectionRef = collection(db, "Feed")
            const querySnapshot = await getDocs(userCollectionRef)
            const result = querySnapshot.docs.map((doc) => doc.data())
            const filtrandoDadosData = (dataCompleta: any) => {
                const limpandoData = dataCompleta.substr(0, 10).split('-')
                const resultData = limpandoData[0] + limpandoData[1] + limpandoData[2]
                const limpandoHora = dataCompleta.substr(11, 8).split(":")
                const resultHota = limpandoHora[0] + limpandoHora[1] + limpandoHora[2]
                const DataHora = resultData + resultHota
                return DataHora
              }     
              const response = result.sort((data1: any, data2: any) => {
                return filtrandoDadosData(data1.date) - filtrandoDadosData(data2.date)
              })

            return response.reverse()
        } catch (error: any) {
            console.log(error.response)
        }
    }
    public createPost = async (post: any) => {
        console.log(this.toPostDBModel(post))
        const postDB = this.toPostDBModel(post)
        const db = FirebaseConfigChave()
        setDoc(doc(db, "Feed", postDB.id), postDB );
    }
}