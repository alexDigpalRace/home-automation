let groups

/* TODO:
* Ensure names are unique
* Ensure names are of correct format
* 
*/

class GroupsDAO {
    static async injectDB(conn) {
        if (groups) {
            return;
        }
        try {
            groups = await conn.db(process.env.HOMEAUTO_DB).collection('groups');
        } catch (e) {
            console.error(`unable to establish a collection handle in groupsDAO ${e}`);
            return;
        }
    }

    static async getGroup(groupName) {
        let cursor;
        try {
            if (groupName) {
                cursor = groups.findOne({ name: groupName });
                return cursor;
            } else {
                cursor = groups.find({});
                return cursor.toArray();
            }
        } catch (e) {
            console.error(`unable to find groups, ${e}`);
            return;
        }
    }

    static async addGroup(name) {
        try {
            return groups.insertOne({ name: name });
        } catch (e) {
            console.error(e);
        }
    }

    static async updateGroup(groupName, newName) {
        try {
            return groups.updateOne({ name: groupName }, { $set: { name: newName }});
        } catch (e) {
            console.error(`could not update, ${e}`);
            return;
        }
    }

    static async deleteGroup(groupName) {
        try {
            if (groupName) {
                return groups.deleteOne({ name: groupName });
            } else {
                return groups.deleteMany({});
            }
        } catch (e) {
            console.error(`failed to delete, ${e}`);
        }
    }
}

module.exports = GroupsDAO;