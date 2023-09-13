import request from "@/utils/request";

export function signIn(data) {
    return request({
        url: '/auth/signIn',
        method: 'POST',
        data: data
    });
}

export function signUp(data) {
    return request({
        url: '/auth/signUp'
    });
}