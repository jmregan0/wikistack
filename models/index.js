
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

var Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false,
    get: function(route) {
      return '/wiki/' + route;    //come back to
    }
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }

}, {
  hooks: {
    beforeValidate: function (page){
        console.log('page', page);

        var title = page.title;
        console.log('title', title);

        var nonAlph = /[^a-zA-Z0-9_]/g;
        var noSpace = /[' ']/g;
        if(title){
            page.urlTitle = title.replace(noSpace, '_').replace(nonAlph, '');
        } else{
            page.urlTitle = Math.random().toString(36).substring(2, 7);
        }
    }}
});


//convert below table into exportable format like above.
var User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

 module.exports = {
   db: db,
   Page: Page,
   User: User
 };
