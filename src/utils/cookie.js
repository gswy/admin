import Cookies from 'js-cookie'

const tokenNam = 'token';

/**
 * 获取Token
 */
export function getToken() {
    return Cookies.get(tokenNam);
}

/**
 * 设置Token过期时间
 *
 * @param token 含Bearer的Token
 * @param expired 单位（秒）
 */
export function setToken(token, expired) {
    Cookies.set(tokenNam, token, {expires: expired / (24 * 3600)})
}

/**
 * 判断Token是否存在
 * @returns {boolean}
 */
export function hasToken() {
    return Boolean(Cookies.get(tokenNam))
}

/**
 * 删除Token
 */
export function delToken() {
    Cookies.remove(tokenNam)
}
