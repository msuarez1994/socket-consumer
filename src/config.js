require('dotenv').config()
module.exports = {
    api: {
        parties_host: process.env.API_HOST || 'http://146.190.152.106',
        parties_port: process.env.API_PORT || 4002,
        socket_url: process.env.SOCKET_HOST || 'http://146.190.152.106:9550',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    }
}