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
    },
    {
        url: '/api/auth/menu',
        timeout: 2000,
        method: 'GET',
        response: [
            {
                id: 1,
                name: '系统管理',
                type: 'CATEGORY',
                meta: {auth: false, permission: 'system'},
                children: [
                    {
                        id: 2,
                        name: '用户管理',
                        type: 'MENU',
                        meta: {auth: false, permission: 'users'},
                        children: [
                            {id: 21, name: '新增', meta: {auth: true}, permission: 'create'},
                            {id: 22, name: '修改', meta: {auth: true}, permission: 'update'},
                            {id: 23, name: '查看', meta: {auth: true}, permission: 'view'},
                            {id: 24, name: '删除', meta: {auth: true}, permission: 'delete'},
                        ]
                    },
                    {
                        id: 3,
                        name: '角色管理',
                        type: 'MENU',
                        meta: {auth: false, permission: 'roles'},
                        children: [
                            {id: 31, name: '新增', meta: {auth: true}, permission: 'create'},
                            {id: 32, name: '修改', meta: {auth: true}, permission: 'update'},
                            {id: 33, name: '查看', meta: {auth: true}, permission: 'view'},
                            {id: 34, name: '删除', meta: {auth: true}, permission: 'delete'},
                        ]
                    },
                    {
                        id: 4,
                        name: '部门管理',
                        type: 'MENU',
                        meta: {auth: false, permission: 'branch'},
                        children: [
                            {id: 41, name: '新增', meta: {auth: true}, permission: 'create'},
                            {id: 42, name: '修改', meta: {auth: true}, permission: 'update'},
                            {id: 43, name: '查看', meta: {auth: true}, permission: 'view'},
                            {id: 44, name: '删除', meta: {auth: true}, permission: 'delete'},
                        ]
                    },
                ]
            },
            {
                id: 5,
                name: '系统监控',
                type: 'CATEGORY',
                meta: {auth: false, permission: 'monitor'},
                children: [
                    {
                        id: 6,
                        name: '在线用户',
                        type: 'MENU',
                        meta: {auth: false, permission: 'online'},
                        children: [
                            {id: 61, name: '强退', meta: {auth: true}, permission: 'exit'},
                        ]
                    },
                    {
                        id: 7,
                        name: '系统状态',
                        type: 'MENU',
                        meta: {auth: false, permission: 'control'},
                        children: []
                    },
                    {
                        id: 8,
                        name: '系统日志',
                        type: 'MENU',
                        meta: {auth: false, permission: 'branch'},
                        children: [
                            {id: 42, name: '清空', meta: {auth: true}, permission: 'clear'},
                            {id: 43, name: '查看', meta: {auth: true}, permission: 'view'},
                            {id: 44, name: '删除', meta: {auth: true}, permission: 'delete'},
                        ]
                    },
                ]
            },
        ]
    }
]