
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

var Page = db.define('page', {
  title: {
    type: Sequelize.STRING
  },
  urlTitle: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});


//convert below table into exportable format like above.
db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
});
