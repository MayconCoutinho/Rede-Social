import { BaseError } from "./BaseError";

export class HeadersError extends BaseError {
    constructor(
        message: string = "Esse endpoit exige uma autorização a ser passada nos headers." 
    ) {
        super(422, message)
    }
}