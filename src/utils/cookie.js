import Cookies from 'js-cookie'

/**
 * 获取Token
 */
export function getToken() {
    return Cookies.get('token');
}

/**
 * 设置Token过期时间
 *
 * @param token 含Bearer的Token
 * @param expired 单位（秒）
 */
export function setToken(token, expired) {
    Cookies.set('token', {expires: expired / (24 * 3600)})
}

/**
 * 判断Token是否存在
 * @returns {boolean}
 */
export function hasToken() {
    return Boolean(Cookies.get('token'))
}
