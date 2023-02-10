export class HashManagerMock {
    public hash = async (plaintext: string): Promise<string> => {
        if(plaintext === "zoro"){
            return "hash-zoro"
        }
        return "hash-mock"
    }
    public compare = async (plaintext: string, hash: string): Promise<boolean> => {
        if(plaintext === "zoro" && hash === "hash-zoro"){
            return true
        }
        return false
    }
}