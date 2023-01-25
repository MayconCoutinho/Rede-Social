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
            return result
        } catch (error: any) {
            console.log(error.response)
        }
    }
    public createPost = async (post: any) => {
        console.table(this.toPostDBModel(post))
        const postDB = this.toPostDBModel(post)
        const db = FirebaseConfigChave()
        setDoc(doc(db, "Feed", postDB.id), postDB );
    }
}