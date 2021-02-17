require('./data/roles')
require('./data/users')
const {Role,setRoles} = require('./role')
const {User,setUsers} = require('./user')

/**
 * Returns an array of subordinate users
 * @param int userId 
 */
function getSubordinates(userId) {
    if (typeof users[userId] === 'undefined') 
        return `The user with ID "${userId}" could not be found.`
        
    return users[userId].getSubordinateUsers()
}

//export the function to make runable from CLI
module.exports = {
    getSubordinates: getSubordinates
}

//populate the data
setRoles()
setUsers()

//this allows us to run easily from CLI
require('make-runnable/custom')({
    printOutputFrame: false
})