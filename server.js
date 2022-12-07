const app = require('./app')
const dotenv = require('dotenv')

//thiet lap file cau hinh
dotenv.config({path: 'config/config.env'}) //duong dan bien moi truong


const serverX = app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode!`)
})

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting server...........');

    serverX.close(() => {
        process.exit(1)
    })
})

