


export default [
    {
        url: '/api/auth/signIn',
        timeout: 3000,
        method: 'POST',
        response: {
            token: 'test',
            expired: 3600
        }
    },
    {
        url: '/api/auth/mine',
        timeout: 3000,
        method: 'GET',
        response: {
            id: 1,
            avatar: null,
            username: 'test',
            nickname: '超级管理员',
            status: true,
            createdAt: '2023-09-14 10:49:28',
            updatedAt: '2023-09-14 10:49:28'
        }
    }
]