const localDB = 'mongodb://localhost:27017/users'

const currentDB = process.env.MONGODB_URI || localDB

module.exports = currentDB