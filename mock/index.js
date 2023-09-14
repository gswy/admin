


export default [
    {
        url: '/api/auth/signIn',
        timeout: 3000,
        method: 'POST',
        response: {
            token: 'test',
            expired: 3600
        }
    }
]