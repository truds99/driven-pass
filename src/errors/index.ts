import { CustomError } from "../protocols/index"

export function emailAlreadyRegisteredError(): CustomError {
    return {
        name: 'conflict',
        message: 'this email is already registered'
    }
}

export function emailNotRegisteredError(): CustomError {
    return {
        name: 'not found',
        message: 'email not found'
    }
}