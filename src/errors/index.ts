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

export function incorrectPasswordError(): CustomError {
    return {
        name: 'unauthorized',
        message: 'incorrect password'
    }
}

export function invalidTokenError(): CustomError {
    return {
        name: 'unauthorized',
        message: 'invalid Token'
    }
}

export function existentCredentialError(): CustomError {
    return {
        name: 'conflict',
        message: 'this credential is already registered'
    }
}

export function credentialNotFoundError(): CustomError {
    return {
        name: 'not found',
        message: 'credential not found'
    }
}

export function badRequestError(): CustomError {
    return {
        name: 'bad request',
        message: 'invalid parameters'
    }
}

export function unauthorizedError(): CustomError {
    return {
        name: 'unauthorized',
        message: 'access denied'
    }
}