// #!/usr/bin / env node

var app = require('../app');
var debug = require('debug')('api:server');
var http = require('http');
const mongodb = require('mongodb');
const dotenv = require('dotenv');
const GroupsDAO = require('../dao/groupsDAO');
const MongoClient = mongodb.MongoClient
dotenv.config();

/**
 * Get port from environment and store in Express.
 */

var port = (process.env.PORT || '9000');
app.set('port', port);

// connect to Mongodb db
MongoClient.connect(process.env.HOMEAUTO_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true
})
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async client => {
    await GroupsDAO.injectDB(client);
    var server = http.createServer(app);
    server.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  })
