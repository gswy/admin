import request from "@/utils/request";

export function signIn(data) {
    return request({
        url: '/auth/signIn',
        method: 'POST',
        data: data
    });
}

export function getMine() {
    return request({
        url: '/auth/mine',
        method: 'GET',
    });
}

export function getMenu() {
    return request({
        url: '/auth/menu',
        method: 'GET'
    });
}
