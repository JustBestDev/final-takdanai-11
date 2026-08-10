import jwt from 'jsonwebtoken'

export const createTokenDocter = (user) => {
    const payload = {
        id: user.id,
        user: user.username
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET_DOCTOR, {
        algorithm: 'HS256',
        expiresIn: '1d'
    })
    return token
}

export const verifyTokenDoctor = (token) => {
    const payload = jwt.verify(token, process.env.JWT_SECRET_DOCTOR, {
        algorithms: ['HS256']
    })
    return payload
}

export const createTokenUser = (user) => {
    const payload = {
        id: user.id,
        user: user.username
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET_USER, {
        algorithm: 'HS256',
        expiresIn: '1d'
    })
    return token
}

export const verifyTokenUser = (token) => {
    const payload = jwt.verify(token, process.env.JWT_SECRET_USER, {
        algorithms: ['HS256']
    })
    return payload
}