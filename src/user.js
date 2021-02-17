users=[]

/**
 * User class
 * Constructed with object {int id, string name, int role}
 */
class User {
    constructor(userObj) {
        this.Id = userObj.Id
        this.Name = userObj.Name
        this.Role = userObj.Role
    }
    
    getSubordinateUsers = function() {
        const subordinateRoles = roles[this.Role].getSubordinateRoles()
        
        return users.filter(function(e) {
            return subordinateRoles.includes(e.Role)
        }).map(function(user){
           return {
                'Id':user.Id,
                'Name':user.Name,
                'Role':user.Role
            }
        })
    }
}

/**
 * Populates the users array with data from data/users.js
 */
function setUsers() {
    usersSet = false
    i=0
    while (usersSet===false) {
        i++
        userVar = 'objUser' + i.toString()

        if (typeof global[userVar] === 'undefined'){
            usersSet = true
            continue
        }
        
        userObj = new User(global[userVar])
        users[userObj.Id] = userObj
    }
}

module.exports = {
    User,
    setUsers
}