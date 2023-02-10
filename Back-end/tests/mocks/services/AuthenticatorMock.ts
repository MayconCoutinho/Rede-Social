export interface ITokenPayload {
    id: string,
}
export class AuthenticatorMock {
    public generateToken = (payload: ITokenPayload): string => {
        return "token-mock"
    }
    public getTokenPayload = (token: string): ITokenPayload | null => {
        switch(token){
            case "token-mock-normal":
                const normalPayload: ITokenPayload = {
                    id: "id-mock",
                }
                return normalPayload
            default:
                return null
        }
    }
}