roles = [];

/**
 * Role class
 * Constructed with object {int id, string name, int parent}
 */
class Role {
    constructor(roleObj) {
        this.Id = roleObj.Id
        this.Name = roleObj.Name
        this.Parent = roleObj.Parent
    }

    getSubordinateRoles = function() {
        const currentRoleId = this.Id

        return roles.filter(function(e) {
            return e.Parent >= currentRoleId
        }).map(function(role) {
            return role.Id
        })
    }
}

/**
 * Populates the roles array with data from data/roles.js
 */
function setRoles() {
    rolesSet = false
    i=0

    while(rolesSet===false) {
        i++
        roleVar = 'objRole' + i.toString()

        if (typeof global[roleVar] === 'undefined'){
            rolesSet=true;
            continue;
        }

        roleObj = new Role(global[roleVar])
        roles[roleObj.Id] = roleObj
    }
}

module.exports = {
    Role,
    setRoles
}