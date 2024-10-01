import { CustomError } from "../protocols/index"

export function emailAlreadyRegisteredError(): CustomError {
    return {
        name: 'conflict',
        message: 'this email is already registered'
    }
}