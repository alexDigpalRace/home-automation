const express = require('express');
const router = express.Router();
const GroupsCtrl = require('../controllers/groupsCtrl.js');

// CRUD operations for accessing a group
// TODO seperate uri
router.route('/')
    .get(GroupsCtrl.apiGetGroup)
    .delete(GroupsCtrl.apiDeleteGroup);

router.route('/group/:name')
    .get(GroupsCtrl.apiGetGroup)
    .post(GroupsCtrl.apiPostGroup)
    .put(GroupsCtrl.apiUpdateGroup)
    .delete(GroupsCtrl.apiDeleteGroup);

module.exports = router;