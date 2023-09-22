const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@hotmail.com',
        phone: '514-555-5555',
        address: '1234 rue de la rue',
    },
    {
        id: 2,
        name: 'Jonathan Beauchemin',
        email: 'jbeauchemin@teccart.online',
        phone: '514-555-5555',
        address: '1234 rue de la rue',
    },
    {
        id: 3,
        name: 'Jacob Lebrun',
        email: 'jLebrun@teccart.online',
        phone: '514-555-5555',
        address: '1234 rue de la rue',
    },
    {
        id: 4,
        name: 'gatico pesho',
        email: 'gaticon@pesho.online',
        phone: '514-555-5555',
        address: '1234 rue de la rue',
    }
]

exports.find = () => {
    return users;
}

exports.findById = (id) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === parseInt(id)) {
            return user;
        }
    }
    return null
}
