import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const createToken = (payload: string | object | Buffer, secret: Secret, expireTime: string): string => {
    return jwt.sign(payload, secret, {
        expiresIn: expireTime
    } as any);
}

const verifyToken = (token: string, secret: Secret): JwtPayload => {
    return jwt.verify(token, secret) as JwtPayload
}

export const JwtHelper = {
    verifyToken,
    createToken
}