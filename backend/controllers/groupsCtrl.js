const GroupsDAO = require('../dao/groupsDAO');

class GroupsCtrl {
    static async apiGetGroup(req, res, next) {
        let groups;
        if (req.params.name) {
            const groupName = req.params.name;
            groups = await GroupsDAO.getGroup(groupName);
        } else {
            console.log('no query, getting all');
            groups = await GroupsDAO.getGroup();
        }
        res.json(groups);
    }

    static async apiPostGroup(req, res, next) {
        const groupName = req.params.name;
        if (groupName) {
            const addedGroup = await GroupsDAO.addGroup(groupName);
            res.status(200);
            res.json(addedGroup);
        } else {
            res.status(500).send();
        }
    }

    // TODO fix body...
    static async apiUpdateGroup(req, res, next) {
        const groupName = req.params.name;
        const newName = req.body.name;
        console.log(groupName, newName);
        const updatedGroup = await GroupsDAO.updateGroup(groupName, newName);
        res.status(200);
        res.json(updatedGroup);
    }

    // TODO: return deleted document?
    static async apiDeleteGroup(req, res, next) {
        const groupName = req.params.name;
        var deletedGroup;
        if (groupName) {
            deletedGroup = await GroupsDAO.deleteGroup(groupName);
        } else {
            // USE WITH GREAT RESPONSIBILITY
            deletedGroup = await GroupsDAO.deleteGroup();
        }

        res.status(200);
        res.json(deletedGroup);
    }
}

module.exports = GroupsCtrl;