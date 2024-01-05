import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456',8),
        isAdmin: true,
    },

    {
        name: 'Luffy',
        email: 'luffy@gmail.com',
        password: bcrypt.hashSync('123456',8),
        isAdmin: false,
    },

    {
        name: 'Zoro',
        email: 'zoro@gmail.com',
        password: bcrypt.hashSync('123456',8),
        isAdmin: false,
    },

]

export default users;