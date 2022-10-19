import crypto from 'crypto';

function comparePassword(password: string, passwordHash: string) {
    if (hashPasswordMD5(password) == passwordHash) return true;

    return false;
}

function hashPasswordMD5(password: string) {
    return crypto.createHash('md5').update(password).digest('hex');
}

export { comparePassword,hashPasswordMD5 };
