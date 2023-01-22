import jwt from 'jsonwebtoken'

export interface ITokenPayload {
    id: string,
}
export class Authenticator {
    generateToken = (payload: ITokenPayload): string => {
        const token = jwt.sign(
            payload,
            "o0zane0o" as string
        )
        return token
    }
    getTokenPayload = (token: string): ITokenPayload | null => {
        try {
            const payload = jwt.verify(
                token,
               "o0zane0o" as string
            )
            return payload as ITokenPayload
        } catch (error) {
            return null
        }
    }
}